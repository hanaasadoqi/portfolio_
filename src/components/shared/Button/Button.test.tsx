import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button Component', () => {
  it('renders with default label', () => {
    render(<Button />);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent('Button');
  });

  it('renders with custom label', () => {
    render(<Button label="Click Me" />);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveTextContent('Click Me');
  });

  it('calls onClick handler when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick} />);
    const buttonElement = screen.getByRole('button');
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('does not call onClick handler when not provided', () => {
    const handleClick = jest.fn();
    render(<Button />);
    const buttonElement = screen.getByRole('button');
    fireEvent.click(buttonElement);
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('applies correct classes', () => {
    render(<Button />);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveClass('px-4');
    expect(buttonElement).toHaveClass('py-2');
  });
});
