import { Children, FC, memo, ReactNode, useState } from 'react';
import cls from './DropDown.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';

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
    <div className={classNames(cls.DropDown, {}, [className])} {...otherProps}>
      <div className={cls.wrapperQuestion}>
        <div className={cls.question}>{question}</div>
        <Button className={classNames(cls.button, { [cls.active]: collapsed }, [])} onClick={onClickHandler}>
          &#9660;
        </Button>
      </div>
      <p
        className={classNames(cls.description, { [cls.active]: collapsed }, [])}
      >
        {children}
      </p>
    </div>
  );
};

export default memo(DropDown);
