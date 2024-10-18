import { FC, memo, useCallback, useState } from 'react';
import cls from './EditAllPrice.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton, typeButton } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { fetchEditAllPrice } from '../model/fetchEditAllPrice';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';

interface Props {
  className?: string;
}
const EditAllPrice: FC<Props> = (props: Props) => {
  const { className, ...otherProps } = props;
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState('');
  const valueValid = /^[.0-9]*$/;
  const dispatch = useAppDispatch();
  const toogleForm = useCallback(() => {
    setVisible((prev) => !prev);
  }, [visible]);
  const setInputValue = (value: string) => {
    if (valueValid.test(value)) {
      setValue(value);
    }
  };
  const auth = useSelector(getUserAuthData);
  const content = auth?.token ? (
    <div
      className={classNames(cls.EditAllPrice, {}, [className])}
      {...otherProps}
    >
      <Button
        className={cls.buttonEdit}
        type={typeButton.BUTTON}
        onClick={toogleForm}
      >
        Изменить весь &#8381;
      </Button>
      {visible && (
        <div>
          <p>
            Цена умножится на ваше значение, пример: 1.15 цена увеличится на 15%
            или 0.36 цена уменьшится за 36%
          </p>
          <form
            onSubmit={(evt) => {
              evt.preventDefault();
              if (valueValid.test(value) && !isNaN(Number(value))) {
                dispatch(fetchEditAllPrice(Number(value)));
              }
            }}
          >
            <Input value={value} onChange={setInputValue} />
            <Button theme={ThemeButton.SECONDARY} type={typeButton.SUBMITE}>
              Изменить прайс
            </Button>
          </form>
        </div>
      )}
    </div>
  ) : null;
  return content;
};

export default memo(EditAllPrice);
