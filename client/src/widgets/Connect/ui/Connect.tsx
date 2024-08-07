import { FC, memo } from 'react';
import cls from './Connect.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import LinkPhone from 'shared/ui/LinkPhone/LinkPhone';
import LinkTg from 'shared/ui/LinkTg/LinkTg';
import LinkWh from 'shared/ui/LinkWh/LinkWh';

interface Props {
  className?: string;
}
const Connect: FC<Props> = (props: Props) => {
  const { className, ...otherProps } = props;
  return (
    <div className={cls.Connect} {...otherProps}>
      <LinkPhone classNameIcon={cls.iconCall} classNameText={cls.text} />
      <LinkWh className={cls.icon} />
      <LinkTg className={cls.icon} />
    </div>
  );
};

export default memo(Connect);
