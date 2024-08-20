import { FC, memo } from 'react';
import cls from './LoaderSmall.module.scss';


interface Props {
  className?: string;
}
const LoaderSmall: FC<Props> = (props: Props) => {
  const { className, ...otherProps } = props;
  return (
    <div className={cls.LoaderSmall}>
      <div className={cls.loader}></div>
    </div>
  );
};

export default memo(LoaderSmall);
