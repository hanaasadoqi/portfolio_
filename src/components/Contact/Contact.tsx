'use client'

import React, { useState } from 'react'
import FormInput from '../shared/Input/FormInput'
import { BaseButton } from '../shared'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (field: string) => (value: string | number) => {
    setFormData(prevState => ({
      ...prevState,
      [field]: value,
    }))
  }

  const validateEmail = (email: string): boolean => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailPattern.test(email)
  }

  const validateForm = () => {
    const newErrors = {
      name: '',
      email: '',
      subject: '',
      message: '',
    }

    if (!formData.name) {
      newErrors.name = 'Name is required'
    }
    if (!formData.email) {
      newErrors.email = 'Email is required'
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    if (!formData.subject) {
      newErrors.subject = 'Subject is required'
    }
    if (!formData.message) {
      newErrors.message = 'Message is required'
    }

    setErrors(newErrors)
    return !Object.values(newErrors).some(error => error)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (validateForm()) {
      // Handle form submission, e.g., send the data to your API
      console.log('Form submitted:', formData)
    }
  }

  return (
    <section
      id="contact"
      data-id="contact"
      className="my-48 flex min-h-screen w-screen flex-col items-center justify-center py-24"
    >
      <div className="container h-full w-full max-w-3xl bg-primary-200 p-8 dark:bg-primary-800">
        <h3 className="text-center text-2xl text-primary-800 dark:text-primary-200 md:text-left md:text-3xl lg:text-4xl">
          Contact Me
        </h3>
        <form
          onSubmit={handleSubmit}
          noValidate
          className="w-full space-y-8 text-primary-800 dark:text-primary-200"
        >
          <FormInput
            label="Name"
            value={formData.name}
            onChange={handleChange('name')}
            errorMessage={errors.name}
            showError={!!errors.name}
            isRequired
            placeholder="Enter your name"
          />
          <FormInput
            label="Email"
            type="email"
            value={formData.email}
            onChange={handleChange('email')}
            errorMessage={errors.email}
            showError={!!errors.email}
            isRequired
            placeholder="Enter your email"
          />
          <FormInput
            label="Subject"
            value={formData.subject}
            onChange={handleChange('subject')}
            errorMessage={errors.subject}
            showError={!!errors.subject}
            isRequired
            placeholder="Enter the subject"
          />
          <FormInput
            as="textarea"
            label="Message"
            value={formData.message}
            onChange={handleChange('message')}
            errorMessage={errors.message}
            showError={!!errors.message}
            isRequired
            placeholder="Enter your message"
          />
          <div className="mb-4 flex w-full items-center justify-end">
            <BaseButton type="submit" variant="primary" size="lg">
              Send Message
            </BaseButton>
          </div>
        </form>
      </div>
    </section>
  )
}
