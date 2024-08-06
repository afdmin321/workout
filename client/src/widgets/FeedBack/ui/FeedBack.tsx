import { FC, memo, useState } from 'react';
import cls from './FeedBack.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import IconChat from 'shared/assets/icons/message.svg';
import IconCall from 'shared/assets/icons/phone.svg';
import FormCall, { ThemeForm } from 'features/FormCall/ui/FormCall';
import { Chat } from 'widgets/Chat';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { FormCallAction } from 'features/FormCall/model/slice/FormCallSlice';

interface Props {
  className?: string;
}
const FeedBack: FC<Props> = (props: Props) => {
  const [call, setCall] = useState(false);
  const [chat, setChat] = useState(false);
  const dispatch = useAppDispatch();
  const openCallWindow = () => {
    setCall(true);
    if (chat) {
      closedChatWindow()
    }
  };
  const openChatWindow = () => {
    setChat(true);
    if (call) {
      closedCallWindow()
    }
  };
  const closedCallWindow = () => {
    setCall(false);
    dispatch(FormCallAction.resetState());
  };
  const closedChatWindow = () => {
    setChat(false);
    dispatch(FormCallAction.resetState());
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
              onClick={openCallWindow}
            >
              <Icon Src={IconCall} className={cls.icon} />
            </Button>
          ) : (
            <Button
              className={classNames(cls.button, {}, [cls.buttonBack])}
              onClick={closedCallWindow}
            >
              <span className={cls.icon}>&#10006;</span>
            </Button>
          )}
          {!chat ? (
            <Button
              className={classNames(cls.button, {}, [cls.buttonChat])}
              onClick={openChatWindow}
            >
              <Icon Src={IconChat} className={cls.icon} />
            </Button>
          ) : (
            <Button
              className={classNames(cls.button, {}, [cls.buttonBack])}
              onClick={closedChatWindow}
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
