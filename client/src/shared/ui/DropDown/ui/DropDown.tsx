import { FC, memo, ReactNode, useState } from 'react';
import cls from './DropDown.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

interface Props {
  className?: string;
  question: string;
  children: ReactNode;
}
const DropDown: FC<Props> = (props: Props) => {
  const { className, children, question, ...otherProps } = props;
  const [collapsed, setColapsed] = useState(false);
  const onClickHandler = () => {
    setColapsed((prev) => !prev);
  };

  return (
    <div
      className={classNames(cls.DropDown, {}, [className])}
      {...otherProps}
      onClick={onClickHandler}
    >
      <div className={classNames(cls.wrapperQuestion, {}, [])}>
        <div className={cls.question}>{question}</div>
        <div
          className={classNames(cls.button, { [cls.active]: collapsed }, [])}
        >
          &#9660;
        </div>
      </div>
      <div
        className={classNames(cls.description, { [cls.active]: collapsed, }, [])}
      >
        {children}
      </div>
    </div>
  );
};

export default memo(DropDown);
