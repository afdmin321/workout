import { FC, memo } from 'react';
import cls from './Map.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { YMaps, Placemark, Map as Ymap } from '@pbe/react-yandex-maps';

interface Props {
  className?: string;
}
const Map: FC<Props> = (props: Props) => {
  const { className, ...otherProps } = props;
  const coordinates: number[] = [47.250008, 38.891213];
  const zoom: number = 15;
  return (
    <YMaps
      query={{ apikey: '1a0bad84-f0db-4d00-9405-ab27524963e2' }}
    >
      <Ymap
        width={'100%'}
        height={'100%'}
        defaultState={{ center: coordinates, zoom }}
      >
        <Placemark width={'100%'} height={'100%'} geometry={coordinates} />
      </Ymap>
    </YMaps>
  );
};

export default memo(Map);
