import { StateSchema } from 'app/providers/StoreProvider';

export const getChatMessages = (state: StateSchema) => state.chat.messages;
export const getChatMessageText = (state: StateSchema) => state.chat.text ?? '';
export const getChatMessageId = (state: StateSchema) => state.chat.id;
export const getChatMessageDate = (state: StateSchema) => state.chat.date;
export const getChatMessageAdmin = (state: StateSchema) => state.chat.admin;
export const getChatMessageName = (state: StateSchema) => state.chat.name;
