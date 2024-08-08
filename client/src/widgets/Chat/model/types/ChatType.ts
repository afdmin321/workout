export interface ChatMessage {
  id?: string;
  name?: string;
  text?: string;
  admin?: boolean;
  date?: string;
}

export interface ChatType extends ChatMessage {
  messages: ChatMessage[];
}
