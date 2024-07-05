import { FC, memo } from 'react';
import cls from './ContactPage.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import LinkPhone from 'shared/ui/LinkPhone/LinkPhone';
import LinkMail from 'shared/ui/LinkEmail/LinkMail';
import LinkMap from 'shared/ui/LinkMap/LinkMap';
import LinkWh from 'shared/ui/LinkWh/LinkWh';
import LinkTg from 'shared/ui/LinkTg/LinkTg';
import { Map } from 'widgets/Map';
import FormCall from 'features/FormCall/ui/FormCall';

interface Props {
  className?: string;
}
const ContactPage: FC<Props> = (props: Props) => {
  const { className, ...otherProps } = props;
  return (
    <div
      className={classNames(cls.ContactPage, {}, [className])}
      {...otherProps}
    >
      <div className={cls.wrapper}>
        <div className={cls.wrapperInfo}>
          <div className={cls.wrapperConnect}>
            <LinkPhone
              className={classNames(cls.icon, {}, [cls.iconConnect])}
              classNameText={classNames(cls.text, {}, [cls.textConnect])}
            />
            <LinkMail
              className={classNames(cls.icon, {}, [cls.iconConnect])}
              classNameText={classNames(cls.text, {}, [cls.textConnect])}
            />
          </div>
          <LinkMap
            className={classNames(cls.icon, {}, [cls.iconMap])}
            classNameText={classNames(cls.text, {}, [cls.textMap])}
          />
          <div className={cls.wrapperMessager}>
            <LinkWh
              className={classNames(cls.iconMessager, {}, [cls.iconWh])}
            />
            <LinkTg
              className={classNames(cls.iconMessager, {}, [cls.iconTg])}
            />
          </div>
        </div>
      </div>
      <div className={cls.wrapperMap}>
        <Map />
      </div>
      <FormCall
        className={cls.form}
        classNameInput={cls.input}
        classNameLabel={cls.label}
        classNameButton={cls.button}
        title="Мы перезвоним в буднии дни с 8-17"
      />
    </div>
  );
};

export default memo(ContactPage);
