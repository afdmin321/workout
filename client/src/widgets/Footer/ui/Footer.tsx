import { FC, memo } from 'react';
import cls from './Footer.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import PrimaryItems from 'widgets/Navbar/ui/PrimaryItems/PrimaryItems';
import SecondaryItems from 'widgets/Navbar/ui/SecondaryItems/SecondaryItems';
import { Connect } from 'widgets/Connect';
import LinkMail from 'shared/ui/LinkEmail/LinkMail';
import LinkMap from 'shared/ui/LinkMap/LinkMap';


interface Props {
  className?: string;
}
const Footer: FC<Props> = (props: Props) => {
  const { className, ...otherProps } = props;
  return (
    <footer className={classNames(cls.Footer, {}, [className])}>
      <div className={classNames(cls.wrapper, {}, [cls.wrapperNav])}>
        <PrimaryItems className={cls.list} />
        <SecondaryItems className={cls.list} />
      </div>
      <div className={classNames(cls.wrapper, {}, [cls.wrapperLink])}>
        <Connect />
        <LinkMail classNameIcon={cls.iconMail} classNameText={cls.textMail} />
        <LinkMap classNameIcon={cls.iconMap} classNameText={cls.textMap} />
      </div>
    </footer>
  );
};

export default memo(Footer);
