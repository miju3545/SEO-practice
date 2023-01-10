import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useSession } from '../../contexts/session'
import { useRouter } from 'next/router'
import { DEFAULT_PATH } from '@/data/siteMetaData'
import useLogin from '../../hooks/useLogin'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import LoginPresenter from './view'
import { usePostLoginMutation } from '../../queries/auth.query.'

export type FormValues = {
  username: string
  password: string
}

export default function LoginContainer() {
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

  const { control, handleSubmit, setFocus, formState, setError } = useForm<FormValues>({
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
    <LoginPresenter control={control} onSubmit={handleSubmit(onSubmitInfo)} formState={formState} />
  )
}
