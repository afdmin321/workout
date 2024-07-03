import { FC, memo } from 'react';
import cls from './Footer.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import PrimaryItems from 'widgets/Navbar/ui/PrimaryItems/PrimaryItems';
import SecondaryItems from 'widgets/Navbar/ui/SecondaryItems/SecondaryItems';
import { Connect } from 'widgets/Connect';
import Link from 'shared/ui/Link/Link';
import { Icon } from 'shared/ui/Icon/Icon';
import IconMail from 'shared/assets/icons/email.svg';
import IconMap from 'shared/assets/icons/map.svg';
import IconChat from 'shared/assets/icons/message.svg';
import IconCall from 'shared/assets/icons/phone.svg';
import { Button } from 'shared/ui/Button/Button';

interface Props {
  className?: string;
}
const Footer: FC<Props> = (props: Props) => {
  const { className, ...otherProps } = props;
  return (
    <footer className={classNames(cls.Footer, {}, [className])}>
      <div className={classNames(cls.wrapperButtons, {}, ['width-wrapper'])}>
        <div className={cls.buttons}>
          <Button className={classNames(cls.button, {}, [cls.buttonCall])}>
            <Icon Src={IconCall} className={cls.icon} />
          </Button>
          <Button className={classNames(cls.button, {}, [cls.buttonChat])}>
            <Icon Src={IconChat} className={cls.icon} />
          </Button>
        </div>
      </div>
      <div className={classNames(cls.wrapper, {}, [cls.wrapperNav])}>
        <PrimaryItems className={cls.list} />
        <SecondaryItems className={cls.list} />
      </div>
      <div className={classNames(cls.wrapper, {}, [cls.wrapperLink])}>
        <Connect />
        <Link href="mailto:info@gk-sg.ru">
          <Icon Src={IconMail} className={cls.iconMail} />
          <div className={classNames(cls.text, {}, [cls.textMail])}>
            info@gk-sg.ru
          </div>
        </Link>
        <Link
          href="https://yandex.ru/maps/971/taganrog/house/kotlostroitelnaya_ulitsa_37_19/Z0EYfg5hS0QEQFptfX50cXxjbA==/?ll=38.892132%2C47.250101&utm_source=ntp_chrome&z=16.8"
          className={cls.linkMap}
          target="_blank"
        >
          <Icon Src={IconMap} className={cls.iconMap} />
          <div className={classNames(cls.text, {}, [cls.textMap])}>
            Россия,&nbsp;Ростовская&nbsp;обл.&nbsp;г.&nbsp;Таганрог
            Ул.&nbsp;Котлостроительная&nbsp;37&nbsp;-&nbsp;19.
          </div>
        </Link>
      </div>
    </footer>
  );
};

export default memo(Footer);
