import { FC, ReactNode } from 'react';
import "./styles.scss";

type Props = {
  children: ReactNode;
  className?: string;
};

const Container: FC<Props> = ({ children, className }) => {
  return (
    <div className={`container ${className}`}>
      {children}
    </div>
  )
}

export default Container;
