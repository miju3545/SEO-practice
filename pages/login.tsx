import React, { useEffect } from 'react'
import Input from '@/components/login/input'
import { useForm } from 'react-hook-form'
import { useSession } from '../context/session'
import { useMutation } from 'react-query'
import { fetcher } from '@/utils/queryClient'
import { QueryKeys } from '../utils/queryClient'
import { useRouter } from 'next/router'
import { AiOutlineUser, AiOutlineLock } from 'react-icons/ai'
import useIsAuthed from '../hooks/useIsAuthed'
import PageSEO from '@/components/seo/page'
import siteMetaData from '@/data/siteMetaData'
import LoginLayout from '@/layouts/LoginLayout'

type FormType = {
  username: string
  password: string
}
export default function LoginPage() {
  const router = useRouter()
  const { login } = useSession()
  const isAuthed = useIsAuthed()
  const {
    control,
    handleSubmit,
    getValues,
    setFocus,
    formState: { isValid, errors },
    setError,
  } = useForm<FormType>({
    defaultValues: { username: '', password: '' },
    mode: 'onChange',
  })

  const { mutate: loginMutate } = useMutation(
    QueryKeys.AUTH,
    ({ username, password }: FormType) =>
      fetcher({ method: 'POST', path: '/api/login', body: { username, password } }),
    {
      onSuccess: (data) => {
        if (data.status === 'error') {
          setError('password', { type: 'submitError', message: '' })
          setError('username', {
            type: 'submitError',
            message: 'Invalid Username or password :(',
          })
        } else {
          const { accessToken, expiresIn } = data
          login(accessToken, expiresIn)
          router.push('/attractions?page=1&per_page=10')
        }
      },
    }
  )

  const onSubmit = () => {
    const [username, password] = getValues(['username', 'password'])
    loginMutate({ username, password })
  }

  useEffect(() => {
    setFocus('username')
  }, [setFocus])

  useEffect(() => {
    if (isAuthed) router.push('/attractions?page=1&per_page=10')
  }, [isAuthed, router])

  return (
    <>
      <PageSEO ogTitle={`Login - ${siteMetaData.title}`} ogDescription={siteMetaData.description} />
      <LoginLayout>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-4">
              <Input
                icon={AiOutlineUser}
                type="text"
                label={'Username'}
                name={'username'}
                control={control}
                rules={{ required: true, pattern: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/ }}
                placeholder={'username'}
                autoFocus={true}
              />
              <Input
                icon={AiOutlineLock}
                type="password"
                label={'Password'}
                name={'password'}
                control={control}
                rules={{ required: true, pattern: /^[A-Za-z0-9._%+-]{8,}$/ }}
                placeholder={'password'}
              />
              <button
                type="submit"
                className="mt-6 px-4 py-3 rounded-md text-lg bg-gray-900 w-full text-white sm:w-80 md:w-96  disabled:opacity-50 mb-2  uppercase font-semibold tracking-wider"
                disabled={!isValid}
              >
                Login
              </button>
              {errors.username?.type === 'submitError' && (
                <p className="text-red-500 text-sm">{errors.username?.message}</p>
              )}
            </div>
          </form>
        </div>
      </LoginLayout>
    </>
  )
}
