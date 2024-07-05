import { FC, memo } from 'react';
import cls from './Footer.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import PrimaryItems from 'widgets/Navbar/ui/PrimaryItems/PrimaryItems';
import SecondaryItems from 'widgets/Navbar/ui/SecondaryItems/SecondaryItems';
import { Connect } from 'widgets/Connect';
import Link from 'shared/ui/Link/Link';
import { Icon } from 'shared/ui/Icon/Icon';
import IconMap from 'shared/assets/icons/map.svg';
import IconChat from 'shared/assets/icons/message.svg';
import IconCall from 'shared/assets/icons/phone.svg';
import { Button } from 'shared/ui/Button/Button';
import LinkMail from 'shared/ui/LinkEmail/LinkMail';
import LinkMap from 'shared/ui/LinkMap/LinkMap';

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
        <LinkMail className={cls.iconMail} classNameText={cls.textMail} />
   
        <LinkMap className={cls.iconMap} classNameText={cls.textMap}/>
      </div>
    </footer>
  );
};

export default memo(Footer);
