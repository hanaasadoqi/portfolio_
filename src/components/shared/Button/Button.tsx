import React from "react";

/**
 * Props for the Button component.
 * 
 * @interface ButtonProps
 * @property {string} [label="Button"] - The label text to display on the button. Defaults to "Button".
 * @property {Function} [onClick] - Callback function to be called when the button is clicked.
 */
export interface ButtonProps {
  /**
   * The label text to display on the button.
   * 
   * @type {string}
   * @default "Button"
   */
  label?: string;
  /**
   * Function to be called when the button is clicked.
   * 
   * @type {Function}
   * @param {React.MouseEvent<HTMLButtonElement>} [event] - The click event object.
   */
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  label = "Button",
  onClick,
}) => {
  return (
    <button onClick={onClick} className="border hover:bg-blue-500 px-4 py-2">
      {label}
    </button>
  );
};

// Set a display name for debugging purposes.
Button.displayName = "Button";

export default Button;
