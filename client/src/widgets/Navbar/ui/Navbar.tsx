import { memo } from 'react';
import cls from './Navbar.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
const Navbar = () => {
  return <header className={cls.header}></header>;
};
export default memo(Navbar);
