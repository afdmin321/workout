import { RoutePath } from 'app/providers/router/routeConfig/routeConfig';
import { NavbarItemsType } from '../types/navbar';
import IconBasket from 'shared/assets/icons/cart.svg';
export const getNavbarBasket = {
  path: RoutePath.basket,
  icon: IconBasket,
};
export const getNavbarPrimaryItems: NavbarItemsType[] = [
  { path: RoutePath.main, text: 'ГЛАВНАЯ' },
  { path: RoutePath.products, text: 'КАТАЛОГ' },
  { path: RoutePath.about, text: 'О НАС' },
  { path: RoutePath.contact, text: 'КОНТАКТЫ' },
];
export const getNavbarSecondaryItems: NavbarItemsType[] = [
  { path: RoutePath.guarantees, text: 'ГАРАНТИИ' },
  { path: RoutePath.certificates, text: 'СЕРТИФИКАТЫ' },
  { path: RoutePath.faq, text: 'FAQ' },
];
