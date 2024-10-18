import { memo } from 'react';
import cls from './Navbar.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Connect } from 'widgets/Connect';
import SearchProduct from 'features/SearchProduct/ui/SearchProduct';
import SecondaryItems from './SecondaryItems/SecondaryItems';
import PrimaryItems from './PrimaryItems/PrimaryItems';
import LinkBasket from 'shared/ui/LinkBasket/LinkBasket';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'app/providers/router/routeConfig/routeConfig';
import IconLogo from 'shared/assets/icons/logo.png';
import ButtonLogout from 'shared/ui/ButtonLogout/ButtonLogout';
import EditAllPrice from 'features/EditAllPrice/ui/EditAllPrice';

const Navbar = () => {
  return (
    <header className={cls.header}>
      <div className={cls.wrapperSecondary}>
        <div
          className={classNames(cls.wrapper, {}, [
            cls.widthWrapperSecondary,
            'width-wrapper',
          ])}
        >
          <SearchProduct className={cls.search} />
          <Connect />
          <SecondaryItems
            className={classNames(cls.list, {}, [cls.listSecondary])}
          />
          <EditAllPrice />
          <ButtonLogout />
        </div>
      </div>
      <div className={cls.wrapperPrimary}>
        <div
          className={classNames(cls.wrapper, {}, [
            cls.widthWrapperPrimary,
            'width-wrapper',
          ])}
        >
          <AppLink to={RoutePath.main} className={cls.logoLink}>
            <h1 className={cls.title}>
              <img src={IconLogo} alt="Логотип" className={cls.logoImg} />
              воркаут.рф
            </h1>
          </AppLink>
          <PrimaryItems className={classNames(cls.list, {}, [cls.listPrimary])}>
            <LinkBasket />
          </PrimaryItems>
        </div>
      </div>
    </header>
  );
};
export default memo(Navbar);
