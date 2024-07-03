import { FC, memo, useRef } from 'react';
import cls from './AppLink.module.scss';
import { NavLink, LinkProps } from 'react-router-dom';
import { Mods, classNames } from 'shared/lib/classNames/classNames';

interface Props extends LinkProps {
  className?: string;
}

const AppLinkComponent: FC<Props> = (props: Props) => {
  const { to, className, children, ...otherProps } = props;
  // const mods: Mods = {
  //   [cls.active]: isActi,
  // };
  return (
    <NavLink
      to={to}
      className={({ isActive }: any): string =>
        isActive
          ? classNames(cls.AppLink, {}, [className, cls.active])
          : classNames(cls.AppLink, {}, [className])
      }
      {...otherProps}
    >
      {children}
    </NavLink>
  );
};
export const AppLink = memo(AppLinkComponent);
