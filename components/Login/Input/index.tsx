import React from 'react'
import { Control, Controller } from 'react-hook-form'
import { FaCheckCircle } from 'react-icons/fa'
import { IconType } from 'react-icons'
import { AnyOBJ } from 'types/attraction.type'
import * as S from './styles'

type InputProps = {
  icon: IconType
  type: 'text' | 'password'
  label: string
  name: string
  control: Control
  placeholder?: string
} & AnyOBJ

export default function Input({
  icon,
  type,
  label,
  name,
  control,
  placeholder,
  ...rest
}: InputProps) {
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
