import React, { InputHTMLAttributes } from 'react'
import { Control, Controller } from 'react-hook-form'
import { FaCheckCircle } from 'react-icons/fa'
import { IconType } from 'react-icons'
import * as S from './styles'
import { FormValues } from '@/pages/login'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  icon: IconType
  type: 'text' | 'password'
  label: string
  name: string
  control: Control<FormValues | any>
}

export default function Input({ icon, type, label, name, control, ...rest }: InputProps) {
  const Icon = icon

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { isDirty, invalid } }) => (
        <S.Container>
          <S.Label htmlFor={label}>{label}</S.Label>
          <S.InputWrapper>
            <S.IconWrapper>
              <S.Icon>{<Icon />}</S.Icon>
            </S.IconWrapper>
            <S.Input id={name} type={type} {...field} {...rest} />
            <S.ErrorWrapper>
              {isDirty && (
                <>
                  <S.ErrorLabel htmlFor="error" className="sr-only">
                    Error
                  </S.ErrorLabel>
                  <S.ErrorIcon invalid={invalid} icon={FaCheckCircle} />
                </>
              )}
            </S.ErrorWrapper>
          </S.InputWrapper>
        </S.Container>
      )}
    />
  )
}
