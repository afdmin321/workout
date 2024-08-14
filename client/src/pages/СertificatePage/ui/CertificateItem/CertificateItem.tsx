import { FC, memo } from 'react';
import cls from './CertificateItem.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

interface Props {
  className?: string;
  src: string;
  text: string;
  onHandler: (value: string) => void;
}
const CertificateItem: FC<Props> = (props: Props) => {
  const { className, onHandler, text, src, ...otherProps } = props;

  return (
    <li
      className={classNames(cls.CertificateItem, {}, [className])}
      onClick={() => onHandler(src)}
      {...otherProps}
    >
      <img src={src} alt={text} className={cls.img} />
      <div className={cls.text}>{text}</div>
    </li>
  );
};

export default memo(CertificateItem);
