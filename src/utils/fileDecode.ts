import * as dayjs from 'dayjs';
import { writeFileSync } from 'fs';
import { resolve } from 'path';

class FileDecode {
  imageDecode(img: string): string {
    const currentDate = dayjs().unix();
    const nameImage = `${currentDate + Math.round(Math.random() * 100)}.jpg`;
    const buffer = Buffer.from(img.split(',')[1], 'base64');
    const path = resolve(
      __dirname,
      '../',
      '../',
      'client',
      'dist',
      'images',
      nameImage,
    );
    writeFileSync(path, buffer);
    return '../images/' + nameImage;
  }
}
export default new FileDecode();
