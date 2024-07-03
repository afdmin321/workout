import { FC, memo } from 'react';
import cls from './SecondaryItems.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { getNavbarSecondaryItems } from 'widgets/Navbar/model/selectors/getNavbarItems';
import { AppLink } from 'shared/ui/AppLink/AppLink';

interface Props {
  className?: string;
}
const SecondaryItems: FC<Props> = (props: Props) => {
  const { className, ...otherProps } = props;
  return (
    <nav className={cls.navSecondary} {...otherProps}>
      <ul className={classNames(cls.list, {}, [className])}>
        {getNavbarSecondaryItems.map((item) => {
          return (
            <li className={cls.item} key={item.path}>
              <AppLink to={item.path} className={cls.link}>
                {item.text}
              </AppLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default memo(SecondaryItems);
