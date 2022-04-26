import { FC, ReactNode } from 'react';
import "./styles.scss";

type Props = {
  leftElement?: ReactNode;
  rightElement?: ReactNode;
};

const Header: FC<Props> = ({ leftElement, rightElement}) => {
  return (
    <header className="header">
      <div className="header__element">{leftElement}</div>
      <p>Todo App</p>
      <div className="header__element">{rightElement}</div>
    </header>
  )
}

export default Header;
