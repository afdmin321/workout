import { FC, memo } from 'react';
import cls from './AboutPage.module.scss';
import YouTube from 'react-youtube';
import imgAkim from 'shared/assets/1.jpg';
import { Icon } from 'shared/ui/Icon/Icon';
import IconDuotone from 'shared/assets/icons/duotone.svg';
import IconTick from 'shared/assets/icons/tick.svg';
import IconCertificate from 'shared/assets/icons/certificate.svg';
import IconDelivery from 'shared/assets/icons/delivery.svg';
const AboutPage: FC = () => {
  return (
    <div className={cls.AboutPage}>
      <div className={cls.wrapperWideo}>
        <YouTube
          videoId="5htaIcuqjAc"
          className={cls.video}
          iframeClassName={cls.video}
        />
      </div>
      <div className={cls.wrapperImg}>
        <img src={imgAkim} alt="" className={cls.img} />
        <img src={imgAkim} alt="" className={cls.img} />
      </div>
      <ul className={cls.list}>
        <li className={cls.item}>
          <div className={cls.wrapperIcon}>
            <Icon Src={IconDuotone} className={cls.icon} />
          </div>
          <p className={cls.text}>
            ВОРКАУТ.РФ ВХОДИТ ГРУППУ КОМПАНИЙ "СТРОЙ ГОРОД" И ЯВЛЯЕТСЯ
            СЕРТИФИЦИРОВАННЫМ ПРОИЗВОДИТЕЛЕМ СПОРТИВНОГО И ДЕТСКОГО ИГРОВОГО
            ОБОРУДОВАНИЯ. 
          </p>
        </li>
        <li className={cls.item}>
          <div className={cls.wrapperIcon}>
            <Icon Src={IconTick} className={cls.icon} />
          </div>
          <p className={cls.text}>
            МЫ ЗАНИМАЕМ ЛИДИРУЮЩИЕ ПОЗИЦИИ БОЛЕЕ 12 ЛЕТ НА РЫНКЕ.  ТОЛЬКО
            КАЧЕСТВЕННОЕ СПОРТИВНОЕ ОБОРУДОВАНИЕ ПО КОНКУРЕНТОСПОСОБНЫМ ЦЕНАМ.
          </p>
        </li>
        <li className={cls.item}>
          <div className={cls.wrapperIcon}>
            <Icon Src={IconCertificate} className={cls.icon} />
          </div>
          <p className={cls.text}>
            КОПИИ СЕРТИФИКАТОВ ВЫДАЮТСЯ ПО ФАКТУ ЗАКЛЮЧЕНИЯ ДОГОВОРА .
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
    </div>
  );
};

export default memo(AboutPage);
