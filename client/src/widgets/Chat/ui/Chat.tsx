import { FC, memo, useCallback, useRef } from 'react';
import cls from './Chat.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Input } from 'shared/ui/Input/Input';
import IconArrow from 'shared/assets/icons/arrow.svg';
import IconClip from 'shared/assets/icons/paperclip.svg';
import { Icon } from 'shared/ui/Icon/Icon';
import { Button, typeButton } from 'shared/ui/Button/Button';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import {
  getChatMessageAdmin,
  getChatMessageName,
  getChatMessages,
  getChatMessageText,
} from '../model/selectors/ChatSelectors';
import { chatSliceAction } from '../model/slice/ChatSlice';
import { ChatMessage } from '../model/types/ChatType';
import LinkMail from 'shared/ui/LinkEmail/LinkMail';
import LinkTg from 'shared/ui/LinkTg/LinkTg';
import LinkWh from 'shared/ui/LinkWh/LinkWh';
import FormCall, { ThemeForm } from 'features/FormCall/ui/FormCall';
import dayjs from 'dayjs';
interface Props {
  className?: string;
}
const Chat: FC<Props> = (props: Props) => {
  const { className, ...otherProps } = props;
  const dispatch = useAppDispatch();
  const messages = useSelector(getChatMessages);
  const text = useSelector(getChatMessageText);
  const admin = useSelector(getChatMessageAdmin);
  const name = useSelector(getChatMessageName);
  const onChangeText = useCallback(
    (value: string) => {
      dispatch(chatSliceAction.setMessageText(value));
    },
    [dispatch, text],
  );

  const onSubmit = useCallback(() => {
    if (!text?.length) {
      return;
    }
    const message: ChatMessage = {
      admin,
      text,
      id: String(messages.length),
      date: dayjs().format('DD.MM.YY HH:mm'),
      name,
    };
    dispatch(chatSliceAction.setMessage(message));
    dispatch(chatSliceAction.clearMessage());
    if (!messages.length) {
      setTimeout(() => dispatch(chatSliceAction.setStartAdmineMessage()), 500);
    }

    setTimeout(() => scrollToBottom(), 0);
  }, [dispatch, messages, text, name]);
  const messagesEndRef = useRef<null | HTMLDivElement>(null);
  const scrollToBottom = () => {
    if (!messagesEndRef.current) return;
    const scrollHeight = messagesEndRef.current.scrollHeight;
    const height = messagesEndRef.current.clientHeight;
    const maxScrollTop = scrollHeight - height;
    messagesEndRef.current.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
  };

  return (
    <div className={classNames(cls.Chat, {}, [className])} {...otherProps}>
      <div className={cls.text}>Напишите нам сообщение</div>
      <div className={cls.wrapperMessage} ref={messagesEndRef}>
        {messages.length
          ? messages.map((message) => {
              return (
                <div
                  id={message.id}
                  key={message.id}
                  className={classNames(
                    cls.message,
                    { [cls.admin]: message.admin },
                    [],
                  )}
                >
                  {message.name && (
                    <div className={cls.messageName}>{message.name}</div>
                  )}
                  <div className={cls.messageText}>{message.text}</div>

                  {message.id === 'start' ? (
                    <>
                      <div className={cls.connectWrapper}>
                        <LinkTg />
                        <LinkWh />
                        <LinkMail />
                      </div>
                      <div className={cls.messageDate}>{message.date}</div>
                      <FormCall theme={ThemeForm.CHAT} />
                    </>
                  ) : (
                    <div className={cls.messageDate}>{message.date}</div>
                  )}
                </div>
              );
            })
          : ''}
        <div></div>
      </div>
      <form
        className={cls.form}
        onSubmit={(evt) => {
          evt.preventDefault();
          onSubmit();
        }}
      >
        <Input
          classNameLabel={cls.label}
          className={cls.input}
          aria-label='поле для ввода текста сообщений'
          placeholder="Введите текст"
          value={text}
          onChange={onChangeText}
        />
        <Button aria-label='кнопка отправки сообщения' type={typeButton.SUBMITE} className={cls.submite}>
          <Icon Src={IconArrow} className={cls.icon} />
        </Button>
        <Button aria-label='кнопка для прикрепления файла' className={cls.buttomClip}>
          <Icon Src={IconClip} className={cls.iconClip} />
        </Button>
      </form>
    </div>
  );
};

export default memo(Chat);
