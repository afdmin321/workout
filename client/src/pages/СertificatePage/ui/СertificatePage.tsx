import { FC, memo, useCallback } from 'react';
import cls from './СertificatePage.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { getCertificateList } from '../model/selectors/getCertificateList';
import CertificateItem from './CertificateItem/CertificateItem';
import { useDispatch } from 'react-redux';
import { PopupImageAction } from 'widgets/PopupImage';
import { Helmet } from 'react-helmet';

interface Props {
  className?: string;
}
const СertificatePage: FC<Props> = (props: Props) => {
  const { className, ...otherProps } = props;
  const certificates = getCertificateList;
  const dispatch = useDispatch();
  const onHandlerClickItem = useCallback(
    (value: string) => {
      dispatch(PopupImageAction.setImages(certificates as []));
      dispatch(PopupImageAction.setCurrentImgSrc(value));
      dispatch(PopupImageAction.setPopupImageVisible(true));
    },
    [dispatch],
  );
  return (
    <ul
      className={classNames(cls.СertificatePage, {}, [className])}
      {...otherProps}
    >
      <Helmet>
        <title>{`Воркаут.рф, производитель спортивного оборудования. Наши Сертификаты!`}</title>
        <meta
          property="og:title"
          content={`Воркаут.рф, производитель спортивного оборудования. Наши Сертификаты!`}
        />
        <meta
          property="og:description"
          content={`Воркаут.рф Наши Сертификаты! телефон: 8-800-201-77-73; Доставка по России транспортными компаниями!`}
        />
        <meta
          name="description"
          content={`Воркаут.рф Наши Сертификаты! телефон: 8-800-201-77-73; Доставка по России транспортными компаниями!`}
        />
        <meta
          name="keywords"
          content={`воркаут,воркауты,воркаут рф,купить воркауты,заказать воркауты,спотривеое оборудование,уличные спортивные площадки,спорт комплекс, +телефон`}
        />
      </Helmet>
      {certificates.map((item) => {
        return (
          <CertificateItem
            src={item.src}
            onHandler={onHandlerClickItem}
            text={item.text}
            key={item.text}
          />
        );
      })}
    </ul>
  );
};

export default memo(СertificatePage);
