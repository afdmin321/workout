import { FC, memo } from 'react';
import cls from './LinkMail.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Icon } from '../Icon/Icon';
import Link from '../Link/Link';
import IconMail from 'shared/assets/icons/email.svg';
interface Props {
  className?: string;
  classNameText?: string;
}
const LinkMail: FC<Props> = (props: Props) => {
  const { className, classNameText, ...otherProps } = props;
  return (
    <Link href="mailto:info@gk-sg.ru" {...otherProps}>
      <Icon Src={IconMail} className={classNames(cls.icon, {}, [className])} />
      <div className={classNames(cls.text, {}, [classNameText])}>
        info@gk-sg.ru
      </div>
    </Link>
  );
};

export default memo(LinkMail);
