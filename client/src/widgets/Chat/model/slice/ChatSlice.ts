import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ChatMessage, ChatType } from '../types/ChatType';
import dayjs from 'dayjs';

const initialState: ChatType = {
  messages: [],
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setMessageText: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
    setMessageName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setMessageId: (state, action: PayloadAction<string>) => {
      state.id = action.payload;
    },
    setMessageDate: (state, action: PayloadAction<string>) => {
      state.date = action.payload;
    },
    setMessageAdmin: (state, action: PayloadAction<boolean>) => {
      state.admin = action.payload;
    },
    setStartAdmineMessage: (state) => {
      const adminMessage: ChatMessage = {
        admin: true,
        text: `Сейчас все операторы заняты! Вы можете
         написать нам в месседжеры или на 
        почту, там ваше сообщение не потеряется 
        мы обязательно ответим в ближайшее время 
        или заполнитe форму ниже мы вам перезвоним и 
        ответим на все ваши вопросы`,
        date: dayjs().format('DD.MM.YY HH:mm'),
        id: 'start',
        name: 'Робот',
      };
      state.messages.push(adminMessage);
    },
    clearMessage: (state) => {
      state.admin = false;
      state.date = undefined;
      state.id = undefined;
      state.text = undefined;
    },
    setMessage: (state, action: PayloadAction<ChatMessage>) => {
      state.messages.push(action.payload);
    },
  },
});
export const { actions: chatSliceAction, reducer: chatSliceReducer } =
  chatSlice;
