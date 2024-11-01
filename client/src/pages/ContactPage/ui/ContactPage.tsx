import { FC, memo } from 'react';
import cls from './ContactPage.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import LinkPhone from 'shared/ui/LinkPhone/LinkPhone';
import LinkMail from 'shared/ui/LinkEmail/LinkMail';
import LinkMap from 'shared/ui/LinkMap/LinkMap';
import LinkWh from 'shared/ui/LinkWh/LinkWh';
import LinkTg from 'shared/ui/LinkTg/LinkTg';
import { Map } from 'widgets/Map';
import FormCall, { ThemeForm } from 'features/FormCall/ui/FormCall';
import { Helmet } from 'react-helmet';

interface Props {
  className?: string;
}
const ContactPage: FC<Props> = (props: Props) => {
  const { className, ...otherProps } = props;
  return (
    <section
      className={classNames(cls.ContactPage, {}, [className])}
      {...otherProps}
    >
      <Helmet>
        <title>{`Воркаут.рф, производитель спортивного оборудования. Наши контакты!`}</title>
        <meta
          property="og:title"
          content={`Воркаут.рф, производитель спортивного оборудования. Наши контакты!`}
        />
        <meta
          property="og:description"
          content={`Воркаут.рф, звоните, телефон: 8-800-201-77-73 и 8-8634-45-60-61; или приезжайте в гости по адресу: Ростовская обл., г. Таганрог, ул. Котлостроительная, д37 - к19.`}
        />
        <meta
          name="description"
          content={`Воркаут.рф, звоните, телефон: 8-800-201-77-73 и 8-8634-45-60-61; или приезжайте в гости по адресу: Ростовская обл., г. Таганрог, ул. Котлостроительная, д37 - к19.`}
        />
        <meta
          name="keywords"
          content={`воркаут,воркауты,воркаут рф,купить воркауты,заказать воркауты,спотривеое оборудование,уличные спортивные площадки,спорт комплекс, +телефон`}
        />
      </Helmet>
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
      <FormCall className={cls.form} theme={ThemeForm.CONTACT} id="aboute-form-sg">
        <h2 className={cls.formTitle}>Мы перезвоним в буднии дни с 8-17</h2>
      </FormCall>
    </section>
  );
};

export default memo(ContactPage);
