import { Injectable, LoggerService } from '@nestjs/common';
import * as fs from 'fs';
import * as dayjs from 'dayjs';
@Injectable()
export class Logger implements LoggerService {
  log(message: any, ...optionalParams: any[]) {
    console.log(message);
  }

  fatal(message: any, ...optionalParams: any[]) {
    const mess = `${dayjs().format('DD.MM.YY HH:mm')} ${JSON.stringify(message)}\n`;
    const dirPath = `${__dirname}../../../logs`;
    try {
      fs.mkdirSync(dirPath, { recursive: true });
      fs.writeFileSync(`${dirPath}/Fatal.txt`, mess, {
        flag: 'a+',
      });
    } catch (err) {
      console.log(err);
    }
  }

  error(message: any, ...optionalParams: any[]) {
    const mess = `${dayjs().format('DD.MM.YY HH:mm')} ${JSON.stringify(message)}\n`;
    const dirPath = `${__dirname}../../../logs`;

    try {
      fs.mkdirSync(dirPath, { recursive: true });
      fs.writeFileSync(`${dirPath}/Error.txt`, mess, {
        flag: 'a+',
      });
    } catch (err) {
      console.log(err);
    }
  }

  warn(message: any, ...optionalParams: any[]) {
    const mess = `${dayjs().format('DD.MM.YY HH:mm')} ${JSON.stringify(message)}\n`;
    const dirPath = `${__dirname}../../../logs`;
    try {
      fs.mkdirSync(dirPath, { recursive: true });
      fs.writeFileSync(`${dirPath}/Warn.txt`, mess, {
        flag: 'a+',
      });
    } catch (err) {
      console.log(err);
    }
  }
}
