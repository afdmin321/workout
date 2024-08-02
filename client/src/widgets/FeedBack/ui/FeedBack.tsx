import { FC, memo, useState } from 'react';
import cls from './FeedBack.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import IconChat from 'shared/assets/icons/message.svg';
import IconCall from 'shared/assets/icons/phone.svg';
import FormCall, { ThemeForm } from 'features/FormCall/ui/FormCall';
import { Chat } from 'widgets/Chat';

interface Props {
  className?: string;
}
const FeedBack: FC<Props> = (props: Props) => {
  const [call, setCall] = useState(false);
  const [chat, setChat] = useState(false);

  const onHandlerCall = () => {
    setCall((prev) => !prev);

    if (chat) {
      onHandlerChat();
    }
  };
  const onHandlerChat = () => {
    setChat((prev) => !prev);
    if (call) {
      onHandlerCall();
    }
  };
  const { className, ...otherProps } = props;
  return (
    <div
      className={classNames(cls.FeedBack, {}, [className, 'width-wrapper'])}
      {...otherProps}
    >
      <div className={classNames(cls.wrapper, { [cls.f]: call }, [])}>
        <div className={classNames(cls.buttons, {}, [])}>
          {!call ? (
            <Button
              className={classNames(cls.button, {}, [cls.buttonCall])}
              onClick={onHandlerCall}
            >
              <Icon Src={IconCall} className={cls.icon} />
            </Button>
          ) : (
            <Button
              className={classNames(cls.button, {}, [cls.buttonBack])}
              onClick={onHandlerCall}
            >
              <span className={cls.icon}>&#10006;</span>
            </Button>
          )}
          {!chat ? (
            <Button
              className={classNames(cls.button, {}, [cls.buttonChat])}
              onClick={onHandlerChat}
            >
              <Icon Src={IconChat} className={cls.icon} />
            </Button>
          ) : (
            <Button
              className={classNames(cls.button, {}, [cls.buttonBack])}
              onClick={onHandlerChat}
            >
              <span className={cls.icon}>&#10006;</span>
            </Button>
          )}
        </div>
        <div
          className={classNames(cls.wrapperCall, { [cls.active]: call }, [])}
        >
          <div className={cls.text}>Мы перезвоним в буднии дни с 8-17</div>
          <FormCall className={cls.form} theme={ThemeForm.CALL} />
        </div>

        <div
          className={classNames(cls.wrapperChat, { [cls.active]: chat }, [])}
        >
          <Chat />
        </div>
      </div>
    </div>
  );
};

export default memo(FeedBack);
