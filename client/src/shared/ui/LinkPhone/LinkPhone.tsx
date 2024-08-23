import { FC, memo } from 'react';
import cls from './LinkPhone.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Icon } from '../Icon/Icon';
import Link from '../Link/Link';
import PhoneCall from 'shared/assets/icons/phone.svg';
interface Props {
  className?: string;
  classNameText?: string;
  classNameIcon?: string;
}
const LinkPhone: FC<Props> = (props: Props) => {
  const { className, classNameIcon, classNameText, ...otherProps } = props;
  return (
    <Link
      aria-label="наш номер телефона: 88002017773"
      href="tel:88002017773"
      className={classNames(cls.link, {}, [className])}
    >
      <Icon
        Src={PhoneCall}
        className={classNames(cls.icon, {}, [classNameIcon])}
        {...otherProps}
      />
      <div className={classNames(cls.text, {}, [classNameText])}>
        8-800-201-77-73
      </div>
    </Link>
  );
};

export default memo(LinkPhone);
