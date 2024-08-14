import { FC, memo } from 'react';
import cls from './SwiperItem.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

interface Props {
  src: string;
  className?: string;
}
const SwiperItem: FC<Props> = (props: Props) => {
  const { className, src, ...otherProps } = props;
  return (
    <div
      className={classNames(cls.SwiperItem, {}, [className])}
      {...otherProps}
    >
      <div style={{maxWidth: "300px", fontSize: "16px"}}>
 
        Закажите эффективные тренажеры для ежедневных уличных тренировок.
        Просмотрите каталог спортивного оборудования и подберите оптимальные
        спортивные тренажеры! Как укрепить здоровье и начать наращивать мышечную
        массу? Достаточно купить спортивные тренажеры. С нами вы оперативно
        оборудуете свою площадку многофункциональными уличными спортивными
        тренажерами!
      </div>

      <img src={src} alt="Картинка из нащих работ" className={cls.img} />
    </div>
  );
};

export default memo(SwiperItem);
