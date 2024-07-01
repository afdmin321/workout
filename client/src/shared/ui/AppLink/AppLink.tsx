import { FC, memo } from 'react';
import cls from './AppLink.module.scss';
import { Link, LinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';

interface Props extends LinkProps {
  className?: string;
}

const AppLinkComponent: FC<Props> = (props: Props) => {
  const { to, className, children, ...otherProps } = props;
  return (
    <Link to={to} className={classNames(cls.AppLink, {}, [])} {...otherProps}>
      {children}
    </Link>
  );
};
export const AppLink = memo(AppLinkComponent);
