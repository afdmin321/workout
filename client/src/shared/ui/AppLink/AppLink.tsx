import { FC, memo } from 'react';
import cls from './AppLink.module.scss';
import { NavLink, LinkProps } from 'react-router-dom';
import { Mods, classNames } from 'shared/lib/classNames/classNames';

export enum ThemeLink {
  CLEAR = 'clear',
  BLUE = 'blue',
}
interface Props extends LinkProps {
  className?: string;
  theme?: ThemeLink;
}

const AppLinkComponent: FC<Props> = (props: Props) => {
  const {
    to,
    className,
    theme = ThemeLink.CLEAR,
    children,
    ...otherProps
  } = props;

  const mods: Mods = {
    [cls[theme]]: theme,
  };
  return (
    <NavLink
      to={to}
      className={({ isActive }: any): string =>
        isActive
          ? classNames(cls.AppLink, mods, [className, cls.active])
          : classNames(cls.AppLink, mods, [className])
      }
      {...otherProps}
    >
      {children}
    </NavLink>
  );
};
export const AppLink = memo(AppLinkComponent);
