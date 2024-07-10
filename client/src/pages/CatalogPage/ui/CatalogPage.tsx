import { FC, memo } from 'react';
import cls from './CatalogPage.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

interface Props {
     className?: string;
  }
const CatalogPage: FC<Props> = (props: Props) => {
 const { className, ...otherProps } = props;
  return (
    <div className={classNames(cls.CatalogPage, {}, [className])} {...otherProps}>
        
    </div>
  )
};

export default memo(CatalogPage);
