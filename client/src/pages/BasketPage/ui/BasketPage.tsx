import { FC, memo, useMemo } from 'react';
import cls from './BasketPage.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { BasketList } from 'entities/Basket';
import { useSelector } from 'react-redux';
import { getBasketData } from 'entities/Basket/model/selectors/getBasket';
import FormCall, { ThemeForm } from 'features/FormCall/ui/FormCall';
import { useSpacePrice } from 'shared/lib/hooks/useSpacePrice/useSpacePrice';
import { RoutePath } from 'app/providers/router/routeConfig/routeConfig';
import { AppLink, ThemeLink } from 'shared/ui/AppLink/AppLink';
import { Helmet } from 'react-helmet';

interface Props {
  className?: string;
}

const BasketPage: FC<Props> = (props: Props) => {
  const { className, ...otherProps } = props;
  const products = useSelector(getBasketData);
  const AllPrice = useMemo(() => {
    return products.reduce((akk, el) => {
      if (el.price) {
        return el.price * el.quantity + akk;
      }
      return akk;
    }, 0);
  }, [products]);
  const price = useSpacePrice(AllPrice);

  return (
    <section
      className={classNames(cls.BasketPage, {}, [className])}
      {...otherProps}
    >
      <Helmet>
        <title>{`Воркаут.рф, производитель спортивного оборудования. Корзина Ваших товаров!`}</title>
        <meta
          property="og:title"
          content={`Воркаут.рф, производитель спортивного оборудования. Корзина Ваших товаров!`}
        />
        <meta
          property="og:description"
          content={`Мы производитель спортивного оборудования для воркаут площадок, занимаем лидирующие позиции более 12 лет на рынке! Доставка по России`}
        />
        <meta
          name="description"
          content={`Мы производитель спортивного оборудования для воркаут площадок, занимаем лидирующие позиции более 12 лет на рынке! Доставка по России`}
        />
        <meta
          name="keywords"
          content={`воркаут,воркауты,воркаут рф,купить воркауты,заказать воркауты,спотривеое оборудование,уличные спортивные площадки,спорт комплекс`}
        />
      </Helmet>
      {products.length ? (
        <>
          <FormCall theme={ThemeForm.ORDER} textSubmite="Оформить заказ" id="basket-form-sg">
            <div className={cls.formPriceWrapper}>
              <div className={cls.formPrice}>
                <span>ИТОГО</span>
                <span>{price}&#8381;</span>
              </div>
              <div className={cls.formPrice}>
                <span>СКИДКА</span>
                <span>{useSpacePrice(AllPrice * 0.6)}&#8381;</span>
              </div>
              <div className={cls.formDescription}>
                Оплата товара и расчёт стоимости доставки производится через
                менеджера.
              </div>
            </div>
          </FormCall>
          <BasketList data={products} />
        </>
      ) : (
        <div className={cls.basketNull}>
          <h2 className={cls.title}>
            <div>В корзине ничего нет {':('}</div>
            перейдите в{' '}
            <AppLink to={RoutePath.products} theme={ThemeLink.BLUE}>
              каталог
            </AppLink>{' '}
            ,чтобы добавить товары
          </h2>
        </div>
      )}
    </section>
  );
};

export default memo(BasketPage);
