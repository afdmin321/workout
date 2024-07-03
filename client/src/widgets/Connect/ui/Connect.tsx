import { FC, memo } from 'react';
import cls from './Connect.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import Link from 'shared/ui/Link/Link';
import { Text } from 'shared/ui/Text/Text';
import { Icon } from 'shared/ui/Icon/Icon';
import PhoneCall from 'shared/assets/icons/phone.svg';
import TgIcon from "shared/assets/icons/telegram.svg"
import WhIcon from "shared/assets/icons/whatsapp.svg"

interface Props {
     className?: string;
  }
const Connect: FC<Props> = (props: Props) => {
 const { className, ...otherProps } = props;
  return (
    <div className={cls.Connect}>
    <Link href="tel:88002017773">
      <Icon Src={PhoneCall} className={cls.iconCall}/>
      <div className={cls.text}>8-800-201-77-73</div>
    </Link>
    <Link href="https://wa.me/qr/RJQCYFR4OGWHI1">
      <Icon Src={WhIcon} className={classNames(cls.icon, {}, [cls.iconWh])} />

    </Link>
    <Link href="https://t.me/Stroygorod1988">
      <Icon Src={TgIcon} className={cls.icon}/>

    </Link>
  </div>
  )
};

export default memo(Connect);
