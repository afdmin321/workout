import { Certificate } from 'crypto';
import { CANCELLED } from 'dns';

export const useSpacePrice = (price: number): string => {
  const priceStr: string = String(price);
  switch (priceStr.length) {
    case 4:
      return priceStr.slice(0, 1) + ' ' + priceStr.slice(1);
    case 5:
      return priceStr.slice(0, 2) + ' ' + priceStr.slice(2);
    case 6:
      return priceStr.slice(0, 3) + ' ' + priceStr.slice(3);
    case 7:
      return (
        priceStr.slice(0, 1) +
        ' ' +
        priceStr.slice(1, 4) +
        ' ' +
        priceStr.slice(4)
      );
    case 8:
      return (
        priceStr.slice(0, 2) +
        ' ' +
        priceStr.slice(2, 5) +
        ' ' +
        priceStr.slice(5)
      );
    case 9:
      return (
        priceStr.slice(0, 3) +
        ' ' +
        priceStr.slice(3, 6) +
        ' ' +
        priceStr.slice(6)
      );
    case 10:
      return (
        priceStr.slice(0, 1) +
        ' ' +
        priceStr.slice(1, 4) +
        ' ' +
        priceStr.slice(4, 7) +
        ' ' +
        priceStr.slice(7)
      );
    default:
      return priceStr;
  }
};
