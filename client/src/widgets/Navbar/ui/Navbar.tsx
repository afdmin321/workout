import { memo, useState } from 'react';
import cls from './Navbar.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Connect } from 'widgets/Connect';
import {
  getNavbarSecondaryItems,
  getNavbarPrimaryItems,
  getNavbarBasket,
} from '../model/selectors/getNavbarItems';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { Icon } from 'shared/ui/Icon/Icon';
import Search from 'widgets/Search/ui/Search';
import SecondaryItems from './SecondaryItems/SecondaryItems';
import PrimaryItems from './PrimaryItems/PrimaryItems';

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
          <Search className={cls.search} />
          <Connect />
          <SecondaryItems className={classNames(cls.list, {},[cls.listSecondary])}/>
        </div>
      </div>
      <div className={cls.wrapperPrimary}>
        <div
          className={classNames(cls.wrapper, {}, [
            cls.widthWrapperPrimary,
            'width-wrapper',
          ])}
        >
          <h1 className={cls.title}>workout</h1>
          <PrimaryItems className={classNames(cls.list, {},[cls.listPrimary])}>
            <AppLink to={getNavbarBasket.path} className={cls.linkBasket}>
              {<Icon className={cls.icon} Src={getNavbarBasket.icon} />}
            </AppLink>
          </PrimaryItems>
        </div>
      </div>
    </header>
  );
};
export default memo(Navbar);
