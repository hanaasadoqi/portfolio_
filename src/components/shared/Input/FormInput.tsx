import React, { ElementType, ForwardedRef, forwardRef } from 'react'
import PropTypes from 'prop-types'
import BaseInput, { BaseInputProps } from './BaseInput'
import clsx from 'clsx'

type FormInputProps<T extends ElementType = 'input'> = BaseInputProps<T> & {
  label?: string
  errorMessage?: string
  isRequired?: boolean
  showError?: boolean
}

const FormInput = forwardRef(
  <T extends ElementType = 'input'>(
    {
      label,
      errorMessage,
      isRequired = false,
      showError = false,
      id,
      ariaDescribedBy,
      className,
      ...rest
    }: FormInputProps<T>,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const inputId =
      id || `form-input-${Math.random().toString(36).substr(2, 9)}`

    return (
      <div className="rounded-md p-2">
        {label && (
          <label htmlFor={inputId} className="text-primary-700 text-lg">
            {label} {isRequired && <span className="text-red-500">*</span>}
          </label>
        )}
        <BaseInput
          ref={ref}
          id={inputId}
          aria-describedby={
            showError && errorMessage ? `${inputId}-error` : ariaDescribedBy
          }
          aria-invalid={showError}
          className={clsx(
            'bg-primary-100 focus-within:bg-primary-50 my-2 w-full p-2',
            className
          )}
          {...rest}
        />
        {showError && errorMessage && (
          <span
            id={`${inputId}-error`}
            className="form-input-error text-red-500"
          >
            {errorMessage}
          </span>
        )}
      </div>
    )
  }
)

FormInput.displayName = 'FormInput'

// Define propTypes directly on FormInput
FormInput.propTypes = {
  label: PropTypes.string,
  errorMessage: PropTypes.string,
  isRequired: PropTypes.bool,
  showError: PropTypes.bool,
  id: PropTypes.string,
  ariaDescribedBy: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  name: PropTypes.string,
  autoComplete: PropTypes.string,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  ariaLabel: PropTypes.string,
  ariaInvalid: PropTypes.bool,
  className: PropTypes.string,
  ariaProps: PropTypes.object,
}

export default React.memo(FormInput)
