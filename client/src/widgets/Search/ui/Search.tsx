import { FC, memo, useState } from 'react';
import cls from './Search.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Icon } from 'shared/ui/Icon/Icon';
import IconSearch from 'shared/assets/icons/search.svg';
import { Button, ThemeButton, typeButton } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import useMountTransition from 'shared/lib/hooks/useMountTransition/useMountTransition';
interface Props {
  className?: string;
}
const Search: FC<Props> = (props: Props) => {
  const { className, ...otherProps } = props;
  const [search, setSeacrch] = useState(false);

  const hasTransitionedIn = useMountTransition(search, 100);

  const onToggleSearch = () => {
    setSeacrch((prev) => !prev);
  };

  return (
    <div className={classNames(cls.Search, {}, [className])} {...otherProps}>
      {!search ? (
        <Button
          className={cls.buttonSearch}
          theme={ThemeButton.CLEAR}
          onClick={onToggleSearch}
        >
          <Icon className={cls.iconSearch} Src={IconSearch} />
        </Button>
      ) : (
        (hasTransitionedIn || search) && (
          <form className={cls.form}>
            <Input
              className={classNames(
                cls.input,
                { [cls.in]: hasTransitionedIn, [cls.visible]: search },
                [],
              )}
              classNameLabel={cls.label}
              autoFocus={true}
            />
            <Button
              className={cls.buttonSubmite}
              theme={ThemeButton.CLEAR}
              type={typeButton.SUBMITE}
            >
              <Icon className={cls.iconSubmite} Src={IconSearch} />
            </Button>
            <Button className={cls.buttonExit} onClick={onToggleSearch}>
              &#10006;
            </Button>
          </form>
        )
      )}
    </div>
  );
};

export default memo(Search);
