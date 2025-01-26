import React from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

const Button : React.FC<ButtonProps> = ({ onClick, children, disabled }) => {
    return (
        <button onClick={onClick} className={styles.button} disabled={disabled}>
            {children}
        </button>
    );
}

export default Button;