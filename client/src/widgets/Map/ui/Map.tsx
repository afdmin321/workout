import { FC, memo } from 'react';
import cls from './Map.module.scss';
import { YMaps, Placemark, Map as Ymap } from '@pbe/react-yandex-maps';

interface Props {
  className?: string;
}
const Map: FC<Props> = (props: Props) => {
  const { className } = props;
  const coordinates: number[] = [47.250008, 38.891213];
  const zoom: number = 15;
  return (
    <div className={cls.Map}>
      <YMaps query={{ apikey: '1a0bad84-f0db-4d00-9405-ab27524963e2' }}>
        <Ymap
          className={cls.map}
          width={'100%'}
          defaultState={{ center: coordinates, zoom }}

        >
          <Placemark geometry={coordinates} />
        </Ymap>
      </YMaps>
    </div>
  );
};

export default memo(Map);
