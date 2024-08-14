export interface User {
  id: string;
  username: string;
  token: string;
}

export interface UserSchema {
  authData?: User;
  _inited: boolean;
}
