import React from 'react'
import PageSEO from '@/components/SEO/PageSEO'
import siteMetaData from '@/data/siteMetaData'
import LoginLayout from '@/components/Layouts/LoginLayout'
import { AiOutlineUser, AiOutlineLock } from 'react-icons/ai'
import Input from '@/components/Login/Input'
import * as S from './styles'
import { FormState } from 'react-hook-form'
import { Control } from 'react-hook-form'
import { FormValues } from '.'

export type LoginProps = {
  onSubmit: () => void
  control: Control
  formState: FormState<FormValues>
}

export default function LoginPresenter(props: LoginProps) {
  const {
    onSubmit,
    control,
    formState: { isValid, errors },
  } = props

  return (
    <>
      <PageSEO ogTitle={`Login | ${siteMetaData.title}`} ogDescription={siteMetaData.description} />
      <LoginLayout>
        <S.Form onSubmit={onSubmit}>
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
