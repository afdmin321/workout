import * as dayjs from 'dayjs';
import { writeFileSync } from 'fs';
import { resolve } from 'path';

export const imageDecode = (img: string): string => {
  const currentDate = dayjs().unix();
  const nameImage = `${currentDate}.jpg`;
  const buffer = Buffer.from(img.split(',')[1], 'base64');
  const path = resolve(__dirname, '../', '../', 'images', nameImage);
  writeFileSync(path, buffer);
  return '/images/' + nameImage;
};
