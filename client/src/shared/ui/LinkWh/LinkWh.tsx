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
    <Link href="https://wa.me/qr/RJQCYFR4OGWHI1" {...otherProps}>
        <Icon Src={WhIcon} className={classNames(cls.icon, {}, [className])} />
      </Link>
  )
};

export default memo(LinkWh);