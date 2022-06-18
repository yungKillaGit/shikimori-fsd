import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  onClick: () => void;
  className?: string;
}

const Button = ({ children, onClick, className }: Props) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={className}
    >
      {children}
    </button>
  );
};

export default Button;
