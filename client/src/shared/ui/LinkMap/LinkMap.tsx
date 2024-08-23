import { FC, memo } from 'react';
import cls from './LinkMap.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Icon } from '../Icon/Icon';
import Link from '../Link/Link';
import IconMap from 'shared/assets/icons/map.svg';

interface Props {
  className?: string;
  classNameText?: string;
  classNameIcon?: string;
}
const LinkMap: FC<Props> = (props: Props) => {
  const { className, classNameIcon, classNameText, ...otherProps } = props;
  return (
    <Link
      href="https://yandex.ru/maps/971/taganrog/house/kotlostroitelnaya_ulitsa_37_19/Z0EYfg5hS0QEQFptfX50cXxjbA==/?ll=38.892132%2C47.250101&utm_source=ntp_chrome&z=16.8"
      className={classNames(cls.className, {}, [cls.linkMap])}
      target="_blank"
      aria-label="мы находимся по адресу: Россия,Ростовскаяобл.г.Таганрог
        Ул.Котлостроительная37-19."
      {...otherProps}
    >
      <Icon
        Src={IconMap}
        className={classNames(cls.icon, {}, [classNameIcon])}
      />
      <div className={classNames(cls.text, {}, [classNameText])}>
        Россия,&nbsp;Ростовская&nbsp;обл.,&nbsp;г.&nbsp;Таганрог,
        ул.&nbsp;Котлостроительная,&nbsp;д37&nbsp;-&nbsp;к19.
      </div>
    </Link>
  );
};

export default memo(LinkMap);
