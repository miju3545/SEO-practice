import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useSession } from '@/contexts/session'
import { useRouter } from 'next/router'
import { DEFAULT_PATH } from '@/data/siteMetaData'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { usePostLoginMutation } from '../queries/auth/auth.query'
import PageSEO from '@/components/SEO/PageSEO'
import siteMetaData from '@/data/siteMetaData'
import LoginLayout from '@/components/Layouts/LoginLayout'
import { AiOutlineUser, AiOutlineLock } from 'react-icons/ai'
import Input from '@/components/Login/Input/index'
import * as S from '@/components/Login/styles'

export type FormValues = {
  username: string
  password: string
}

export default function LoginPage() {
  const router = useRouter()

  const { login, isAuthed } = useSession()

  const schema = yup.object({
    username: yup
      .string()
      .matches(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/)
      .required('username is required'),
    password: yup
      .string()
      .matches(/^[A-Za-z0-9._%+-]{8,}$/)
      .required('password is required'),
  })

  const {
    control,
    handleSubmit,
    setFocus,
    formState: { isValid, errors },
    setError,
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
    defaultValues: { username: '', password: '' },
    mode: 'onChange',
  })

  const postLoginMutate = usePostLoginMutation()

  const onSubmitInfo = ({ username, password }: FormValues) => {
    postLoginMutate.mutateAsync(
      { username, password },
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
            router.push(DEFAULT_PATH)
          }
        },
      }
    )
  }

  useEffect(() => {
    setFocus('username')
  }, [setFocus])

  useEffect(() => {
    if (isAuthed) router.push(DEFAULT_PATH)
  }, [isAuthed, router])

  return (
    <>
      <PageSEO ogTitle={`Login | ${siteMetaData.title}`} ogDescription={siteMetaData.description} />
      <LoginLayout>
        <S.Form onSubmit={handleSubmit(onSubmitInfo)}>
          <Input
            icon={AiOutlineUser}
            type="text"
            label={'username'}
            name={'username'}
            control={control}
            placeholder={'username'}
            autoFocus={true}
          />
          <Input
            icon={AiOutlineLock}
            type="password"
            label={'password'}
            name={'password'}
            control={control}
            placeholder={'password'}
          />
          <S.Button type="submit" disabled={!isValid}>
            Login
          </S.Button>
          {errors.username?.type === 'submitError' && errors.username?.message && (
            <S.ErrorMessage>{errors.username?.message}</S.ErrorMessage>
          )}
        </S.Form>
      </LoginLayout>
    </>
  )
}
