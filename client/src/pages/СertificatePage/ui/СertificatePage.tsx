import { FC, memo } from 'react';
import cls from './СertificatePage.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { getCertificateList } from '../model/selectors/getCertificateList';
import CertificateItem from './CertificateItem/CertificateItem';

interface Props {
  className?: string;
}
const СertificatePage: FC<Props> = (props: Props) => {
  const { className, ...otherProps } = props;
  const certificates = getCertificateList;
  return (
    <ul
      className={classNames(cls.СertificatePage, {}, [className])}
      {...otherProps}
    >
      {certificates.map((item) => {
        return <CertificateItem src={item.src} text={item.text} />;
      })}
    </ul>
  );
};

export default memo(СertificatePage);
