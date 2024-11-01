import { FC, memo } from 'react';
import cls from './AboutPage.module.scss';
import { Icon } from 'shared/ui/Icon/Icon';
import IconDuotone from 'shared/assets/icons/duotone.svg';
import IconTick from 'shared/assets/icons/tick.svg';
import IconCertificate from 'shared/assets/icons/certificate.svg';
import IconDelivery from 'shared/assets/icons/delivery.svg';
import OneImg from 'shared/assets/about/yoke.jpg';
import TwoImg from 'shared/assets/about/iskra.jpg';
import { Helmet } from 'react-helmet';
const AboutPage: FC = () => {
  return (
    <section className={cls.AboutPage}>
      <Helmet>
        <title>{`Воркаут.рф, производитель спортивного оборудования. О нашей компании!`}</title>
        <meta
          property="og:title"
          content={`Воркаут.рф, производитель спортивного оборудования. О нашей компании!`}
        />
        <meta
          property="og:description"
          content={`Мы производитель спортивного оборудования для воркаут площадок, занимаем лидирующие позиции более 12 лет на рынке! Доставка по России`}
        />
        <meta
          name="description"
          content={`Мы производитель спортивного оборудования для воркаут площадок, занимаем лидирующие позиции более 12 лет на рынке! Доставка по России`}
        />
        <meta name="keywords" content={`воркаут,воркауты,воркаут рф,купить воркауты,заказать воркауты,спотривеое оборудование,уличные спортивные площадки,спорт комплекс`} />
      </Helmet>
      <div className={cls.wrapperVideo}>
        <iframe
          width="100%"
          height="450"
          src="https://rutube.ru/play/embed/2de05bf92c0ade0c2f4dad9d441d86ac/"
          frameBorder="0"
          allow="clipboard-write; autoplay"
          allowFullScreen
        ></iframe>
      </div>
      <div className={cls.wrapperImg}>
        <img
          src={OneImg}
          alt="Процесс производства
        "
          className={cls.img}
        />
        <img
          src={TwoImg}
          alt="Процесс производства
        "
          className={cls.img}
        />
      </div>
      <ul className={cls.list}>
        <li className={cls.item}>
          <div className={cls.wrapperIcon}>
            <Icon Src={IconDuotone} className={cls.icon} />
          </div>
          <p className={cls.text}>
            ВОРКАУТ.РФ ВХОДИТ В ГРУППУ КОМПАНИЙ "СТРОЙ ГОРОД" И ЯВЛЯЕТСЯ
            СЕРТИФИЦИРОВАННЫМ ПРОИЗВОДИТЕЛЕМ СПОРТИВНОГО И ДЕТСКОГО ИГРОВОГО
            ОБОРУДОВАНИЯ.
          </p>
        </li>
        <li className={cls.item}>
          <div className={cls.wrapperIcon}>
            <Icon Src={IconTick} className={cls.icon} />
          </div>
          <p className={cls.text}>
            МЫ ЗАНИМАЕМ ЛИДИРУЮЩИЕ ПОЗИЦИИ БОЛЕЕ 12 ЛЕТ НА РЫНКЕ. ТОЛЬКО
            КАЧЕСТВЕННОЕ СПОРТИВНОЕ ОБОРУДОВАНИЕ ПО КОНКУРЕНТОСПОСОБНЫМ ЦЕНАМ.
          </p>
        </li>
        <li className={cls.item}>
          <div className={cls.wrapperIcon}>
            <Icon Src={IconCertificate} className={cls.icon} />
          </div>
          <p className={cls.text}>
            КОПИИ СЕРТИФИКАТОВ ВЫДАЮТСЯ ПО ФАКТУ ЗАКЛЮЧЕНИЯ ДОГОВОРА.
          </p>
        </li>
        <li className={cls.item}>
          <div className={cls.wrapperIcon}>
            <Icon Src={IconDelivery} className={cls.icon} />
          </div>
          <p className={cls.text}>
            ДОСТАВКА ДО ВАШЕГО ГОРОДА ЛЮБОЙ ТРАНСПОРТНОЙ КОМПАНИЕЙ ИЛИ
            ПЕРЕВОЗЧИКОМ.
          </p>
        </li>
      </ul>
    </section>
  );
};

export default memo(AboutPage);
