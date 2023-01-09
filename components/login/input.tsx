import React from 'react'
import { Control, Controller } from 'react-hook-form'
import { FaCheckCircle } from 'react-icons/fa'
type InputProps = {
  icon: any
  type: 'text' | 'password'
  label: string
  name: string
  control: Control
  rules: Object
  placeholder?: string
  [key: string]: any
}

export default function Input({
  icon,
  type,
  label,
  name,
  control,
  rules,
  placeholder,
  ...rest
}: InputProps) {
  const Icon = icon
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState: { isDirty, invalid } }) => (
        <div className="w-full sm:w-80 md:w-96">
          <label
            htmlFor={label}
            className="block  text-gray-700 mb-2 text-xs uppercase font-semibold tracking-wider"
          >
            {label}
          </label>
          <div className="relative mt-1 rounded-md shadow-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <span className="text-gray-500 text-xl">{<Icon />}</span>
            </div>
            <input
              type={type}
              id={label}
              className="block w-full rounded-md border-gray-300 pl-10 pr-12 py-2 focus:border-gray-900 focus:ring-gray-500 text-md"
              {...field}
              {...rest}
            />
            <div className="absolute inset-y-0 right-0 flex items-center">
              {isDirty && (
                <>
                  <label htmlFor="error" className="sr-only">
                    Error
                  </label>
                  <div
                    className={`w-10 flex items-center justify-center text-xl ${
                      invalid ? 'text-red-500' : 'text-blue-500'
                    }`}
                  >
                    <FaCheckCircle />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    />
  )
}
