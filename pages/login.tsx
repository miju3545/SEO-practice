import React, { useEffect } from 'react'

import LayoutRenderer from '@/components/LayoutRenderer'
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

const DEFAULT_LAYOUT = 'LoginLayout'

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
    formState: { isValid },
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
        const { accessToken, expiresIn } = data
        login(accessToken, expiresIn)
        router.push('/attractions?page=1&per_page=10')
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
      <LayoutRenderer layout={DEFAULT_LAYOUT}>
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
                className="mt-6 px-4 py-3 rounded-md text-lg bg-gray-900 w-full text-white  sm:w-80 md:w-96 mb-4 disabled:opacity-50"
                disabled={!isValid}
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </LayoutRenderer>
    </>
  )
}
