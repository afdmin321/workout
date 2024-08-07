import { FC, ReactNode, memo } from 'react';
import cls from './Link.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeLink } from '../AppLink/AppLink';

interface Props {
  children: ReactNode;
  href: string;
  target?: string;
  className?: string;
  theme?: ThemeLink;
}
const Link: FC<Props> = (props: Props) => {
  const {
    className,
    href,
    theme = ThemeLink.CLEAR,
    children,
    ...otherProps
  } = props;
  return (
    <a
      href={href}
      className={classNames(cls.Link, { [cls[theme]]: theme }, [className])}
      {...otherProps}
    >
      {children}
    </a>
  );
};

export default memo(Link);
