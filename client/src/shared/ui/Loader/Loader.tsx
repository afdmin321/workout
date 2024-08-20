import { FC } from 'react';
import cls from './Loader.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

export enum ThemeLoader {
  BIG = 'big',
  MINI = 'mini',
}

interface Props {
  className?: string;
  theme?: ThemeLoader;
}

export const Loader: FC<Props> = ({ className, theme = ThemeLoader.BIG }: Props) => {
  return (
    <div className={classNames(cls.loader, {[cls[theme]]: theme})}>
    </div>
  );
};
