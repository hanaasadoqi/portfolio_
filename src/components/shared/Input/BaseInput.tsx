import React, {
  useState,
  ElementType,
  ForwardedRef,
  forwardRef,
  useEffect,
} from 'react'
import PropTypes from 'prop-types'
import { BaseComponent, BaseComponentProps } from '../BaseComponent'

export type BaseInputProps<T extends ElementType = 'input'> =
  BaseComponentProps<T> & {
    type?: string
    placeholder?: string
    value?: string | number
    defaultValue?: string | number
    onChange?: (value: string | number) => void // Simplified onChange handler
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
    onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void
    name?: string
    id?: string
    autoComplete?: string
    disabled?: boolean
    readOnly?: boolean
    ariaLabel?: string
    ariaDescribedBy?: string
    ariaInvalid?: boolean
  }

const BaseInput = forwardRef(
  <T extends ElementType = 'input'>(
    {
      type = 'text',
      placeholder = '',
      value,
      defaultValue,
      onChange,
      onBlur,
      onFocus,
      name,
      id,
      autoComplete,
      disabled = false,
      readOnly = false,
      ariaLabel,
      ariaDescribedBy,
      ariaInvalid,
      className,
      ariaProps = {},
      ...rest
    }: BaseInputProps<T>,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const [inputValue, setInputValue] = useState(value || defaultValue || '')

    useEffect(() => {
      if (value !== undefined) {
        setInputValue(value)
      }
    }, [value])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value
      setInputValue(newValue)
      if (onChange) {
        onChange(newValue)
      }
    }

    return (
      <BaseComponent
        as="input"
        ref={ref}
        type={type}
        placeholder={placeholder}
        value={inputValue}
        onChange={handleChange}
        onBlur={onBlur}
        onFocus={onFocus}
        name={name}
        id={id}
        autoComplete={autoComplete}
        disabled={disabled}
        readOnly={readOnly}
        aria-label={ariaLabel}
        aria-describedby={ariaDescribedBy}
        aria-invalid={ariaInvalid}
        className={className}
        aria-disabled={disabled}
        {...ariaProps}
        {...rest}
      />
    )
  }
)

BaseInput.displayName = 'BaseInput'

BaseInput.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  name: PropTypes.string,
  id: PropTypes.string,
  autoComplete: PropTypes.string,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  ariaLabel: PropTypes.string,
  ariaDescribedBy: PropTypes.string,
  ariaInvalid: PropTypes.bool,
  className: PropTypes.string,
  ariaProps: PropTypes.object,
}

export default React.memo(BaseInput)
