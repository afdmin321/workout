import { FC, memo } from 'react';
import cls from './LinkTg.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import TgIcon from 'shared/assets/icons/telegram.svg';
import { Icon } from '../Icon/Icon';
import Link from '../Link/Link';

interface Props {
  className?: string;
}
const LinkTg: FC<Props> = (props: Props) => {
  const { className, ...otherProps } = props;
  return (
    <Link
      aria-label="перейти на наш телеграм: https://t.me/Stroygorod1988"
      href="https://t.me/Stroygorod1988"
      className={cls.link}
      {...otherProps}
    >
      <Icon Src={TgIcon} className={classNames(cls.icon, {}, [className])} />
    </Link>
  );
};

export default memo(LinkTg);
