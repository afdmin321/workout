import { FC, memo, useCallback } from 'react';
import cls from './MainPage.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { SwiperPrimary } from 'widgets/SwiperPrimary';
import { SwiperSecondary } from 'widgets/SwiperGallery';
import ButtonEdit from 'shared/ui/ButtonEdit/ButtonEdit';
import ButtonAdd from 'shared/ui/ButtonAdd/ButtonAdd';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'app/providers/router/routeConfig/routeConfig';

interface Props {
  className?: string;
}
const MainPage: FC<Props> = (props: Props) => {
  const { className, ...otherProps } = props;
  const navigate = useNavigate();

  const onHandlerButtonAdd = useCallback(() => {
    navigate(RoutePath.add_slides_gallery);
  }, [navigate]);
  const onHandlerButtonEdit = useCallback(() => {
    navigate(RoutePath.edit_slides_gallery);
  }, [navigate]);
  return (
    <section
      className={classNames(cls.MainPage, {}, [className])}
      {...otherProps}
    >
      <div className={cls.wrapperSwiperPrimary}>
        <SwiperPrimary />
      </div>
      <div className={cls.wrapperTitle}>
        <h4 className={cls.title}>ГАЛЕРЕЯ НАШИХ РАБОТ</h4>
        <ButtonEdit onClick={onHandlerButtonEdit} />
        <ButtonAdd onClick={onHandlerButtonAdd} />
      </div>
      <div className={cls.wrapperSwiperGallery}>
        <SwiperSecondary />
      </div>
    </section>
  );
};

export default memo(MainPage);
