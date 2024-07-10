import { FC, memo } from 'react';
import cls from './Chat.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Input } from 'shared/ui/Input/Input';
import IconArrow from 'shared/assets/icons/arrow.svg';
import IconClip from 'shared/assets/icons/paperclip.svg';
import { Icon } from 'shared/ui/Icon/Icon';
import { Button, typeButton } from 'shared/ui/Button/Button';
interface Props {
  className?: string;
}
const Chat: FC<Props> = (props: Props) => {
  const { className, ...otherProps } = props;
  return (
    <div className={classNames(cls.Chat, {}, [className])} {...otherProps}>
      <div className={cls.text}>Напишите нам сообщение</div>
      <div className={cls.wrapperMessage}></div>
      <form className={cls.form}>
        <Input
          classNameLabel={cls.label}
          className={cls.input}
          placeholder="Введите текст"
        />
        <Button type={typeButton.SUBMITE} className={cls.submite}>
          <Icon Src={IconArrow} className={cls.icon} />
        </Button>
        <Button className={cls.buttomClip}>
          <Icon Src={IconClip} className={cls.iconClip} />
        </Button>
      </form>
    </div>
  );
};

export default memo(Chat);
