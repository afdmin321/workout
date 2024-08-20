import { FC, ReactNode, memo } from 'react';
import cls from './PrimaryItems.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';

import {
  getNavbarPrimaryItems,
  getNavbarBasket,
} from 'widgets/Navbar/model/selectors/getNavbarItems';

interface Props {
  className?: string;
  children?: ReactNode;
}
const PrimaryItems: FC<Props> = (props: Props) => {
  const { className, children, ...otherProps } = props;
  return (
    <nav className={cls.navPrimary} {...otherProps}>
      <ul className={classNames(cls.list, {}, [className])}>
        {getNavbarPrimaryItems.map((item) => {
          return (
            <li className={cls.item} key={item.path}>
              <AppLink to={item.path} className={cls.link}>
                {item.text}
              </AppLink>
            </li>
          );
        })}
      </ul>
      {children && children}
    </nav>
  );
};

export default memo(PrimaryItems);
