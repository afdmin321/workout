export enum CategoryName {
  WORKOUT = 'workout',
  TRAINER = 'trainer',
}
export enum CategoryId {
  WORKOUT = '43abe61a-0a60-4ec8-b2f7-095b30022bba',
  TRAINER = 'ea932f25-e407-4598-a288-adb991d631a6',
}
export interface Category {
  id: string;
  name: string;
  disabled: boolean;
}
