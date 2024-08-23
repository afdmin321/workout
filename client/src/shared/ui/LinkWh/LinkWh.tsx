import { FC, memo } from 'react';
import cls from './LinkWh.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import Link from '../Link/Link';
import { Icon } from '../Icon/Icon';
import WhIcon from 'shared/assets/icons/whatsapp.svg';

interface Props {
     className?: string;
  }
const LinkWh: FC<Props> = (props: Props) => {
 const { className, ...otherProps } = props;
  return (
    <Link href="https://wa.me/79094124640"  aria-label="перейти на наш телеграм: https://wa.me/79094124640"  className={cls.link} {...otherProps}>
        <Icon Src={WhIcon} className={classNames(cls.icon, {}, [className])} />
      </Link>
  )
};

export default memo(LinkWh);
