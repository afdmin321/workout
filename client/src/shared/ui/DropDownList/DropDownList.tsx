import {
  FC,
  memo,
  ReactNode,
  useCallback,
  useMemo,
  useRef,
  useState,
} from 'react';
import cls from './DropDownList.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from '../Button/Button';


export interface DropDownListOption<T extends string> {
  id: T;
  text: string;
}
interface Props<T extends string> {
  className?: string;
  children?: ReactNode;
  options: DropDownListOption<T>[];
  value: T | null;
  setValue: (value: T) => void;
}

const DropDownList = <T extends string>(props: Props<T>) => {
  const { className, setValue, value, options, children, ...otherProps } =
    props;
  const [collapsed, setCollapsed] = useState(false);
  const optionList = useRef(null);


  const toggleListOption = () => {
    setCollapsed((prev) => !prev);
  };
  const onChange = (el: DropDownListOption<T>) => {
    setValue(el.id);
    toggleListOption();
  };

  return (
    <div
      className={classNames(cls.DropDownList, {}, [className])}
      {...otherProps}
    >
      <Button onClick={toggleListOption}>{children}</Button>
      {collapsed && (
        <ul className={cls.list} ref={optionList}>
          {options.map((el) => {
            return (
              <li
                onClick={() => {
                  onChange(el);
                }}
                key={el.id}
                className={classNames(
                  cls.item,
                  { [cls.active]: Boolean(el.id === value) },
                  [],
                )}
              >
                {el.text}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default DropDownList;
