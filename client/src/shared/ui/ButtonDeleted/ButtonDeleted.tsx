import { FC, memo, useState } from 'react';
import cls from './ButtonDeleted.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonProps } from '../Button/Button';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { Portal } from '../Portal/Portal';
import LoaderSmall from '../LoaderSmall/LoaderSmall';
type ButtonEvent = React.MouseEvent<HTMLButtonElement>;
interface Props extends ButtonProps {
  className?: string;
  isLoading?: boolean;
  onHandler: (evt: ButtonEvent) => void;
}
const ButtonDeleted: FC<Props> = (props: Props) => {
  const { className, isLoading, onHandler, ...otherProps } = props;
  const auth = useSelector(getUserAuthData);
  const [togglePopup, setTogglePopup] = useState(false);
  const onToggle = (evt: ButtonEvent) => {
    evt.stopPropagation();
    setTogglePopup((prev) => !prev);
  };
  const content = auth?.token ? (
    <>
      <Button
        onClick={onToggle}
        className={classNames(cls.ButtonDeleted, {}, [
          'buttonAdmin',
          className,
        ])}
        {...otherProps}
      >
        &#128465;
      </Button>
      {togglePopup && (
        <Portal>
          <div className={cls.popoupDeleted}>
            <h3>Вы точно хотите удалмить </h3>
            <div className={cls.wrapperButton}>
              {!isLoading ? (
                <>
                  <Button
                    className={cls.button}
                    onClick={(evt) => {
                      onHandler(evt);
                      onToggle(evt);
                    }}
                  >
                    ДА
                  </Button>
                  <Button className={cls.button} onClick={onToggle}>
                    НЕТ
                  </Button>{' '}
                </>
              ) : (
                <LoaderSmall />
              )}
            </div>
          </div>
        </Portal>
      )}
    </>
  ) : null;

  return content;
};

export default memo(ButtonDeleted);
