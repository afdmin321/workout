import { FC, ReactNode, memo } from 'react';
import cls from './Link.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

interface Props {
  children: ReactNode;
  href: string;
  target?: string;
  className?: string;
}
const Link: FC<Props> = (props: Props) => {
  const { className, href, children, ...otherProps } = props;
  return (
    <a
      href={href}
      className={classNames(cls.Link, {}, [className])}
      {...otherProps}
    >
      {children}
    </a>
  );
};

export default memo(Link);
