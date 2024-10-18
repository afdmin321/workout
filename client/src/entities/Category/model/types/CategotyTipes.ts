export enum CategoryName {
  WORKOUT = 'workout',
  TRAINER = 'trainer',
}
export enum CategoryId {
  WORKOUT = 'f9a5a94a-d47d-4a1a-aad7-b0287e2d5bde',
  TRAINER = 'd7bcde33-5586-42d6-b940-58129a6a33ee',
}
export interface Category {
  id: string;
  name: string;
  disabled: boolean;
}
