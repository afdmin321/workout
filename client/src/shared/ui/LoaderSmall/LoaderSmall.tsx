import { FC, memo } from 'react';
import './LoaderSmall.scss';
import { classNames } from 'shared/lib/classNames/classNames';

interface Props {
  className?: string;
}
const LoaderSmall: FC<Props> = (props: Props) => {
  const { className, ...otherProps } = props;
  return (
    <div className='asdf'>
      <div className="loader"></div>
    </div>
  );
};

export default memo(LoaderSmall);
