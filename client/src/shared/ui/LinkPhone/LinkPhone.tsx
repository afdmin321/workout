import { FC, memo } from 'react';
import cls from './LinkPhone.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Icon } from '../Icon/Icon';
import Link from '../Link/Link';
import PhoneCall from 'shared/assets/icons/phone.svg';
interface Props {
  className?: string;
  classNameText?: string;
}
const LinkPhone: FC<Props> = (props: Props) => {
  const { className, classNameText, ...otherProps } = props;
  return (
    <Link href="tel:88002017773">
      <Icon
        Src={PhoneCall}
        className={classNames(cls.icon, {}, [className])}
        {...otherProps}
      />
      <div className={classNames(cls.text, {}, [classNameText])}>
        8-800-201-77-73
      </div>
    </Link>
  );
};

export default memo(LinkPhone);
