import { FC, memo } from 'react';
import cls from './LinkBasket.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { getNavbarBasket } from 'widgets/Navbar/model/selectors/getNavbarItems';
import { AppLink } from '../AppLink/AppLink';
import { Icon } from '../Icon/Icon';
import { useSelector } from 'react-redux';
import { getBasketData } from 'entities/Basket/model/selectors/getBasket';

interface Props {
  className?: string;
}
const LinkBasket: FC<Props> = (props: Props) => {
  const { className, ...otherProps } = props;
  const basketList = useSelector(getBasketData);
  return (
    <div
      className={classNames(cls.LinkBasket, {}, [className])}
      {...otherProps}
    >
      <AppLink
        to={getNavbarBasket.path}
        aria-label="корзина товаров"
        className={cls.linkBasket}
      >
        {
          <>
            <Icon className={cls.icon} Src={getNavbarBasket.icon} />
            {basketList.length ? (
              <div className={cls.quantityProducts}>{basketList.length}</div>
            ) : (
              ''
            )}
          </>
        }
      </AppLink>
    </div>
  );
};

export default memo(LinkBasket);
