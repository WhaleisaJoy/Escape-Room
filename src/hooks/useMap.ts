import { useEffect, useState } from 'react';
import L from 'leaflet';
import { Location } from '../const';

const useMap = (mapRef: React.MutableRefObject<HTMLElement | null>) => {
  const [map, setMap] = useState<L.Map | null>(null);

  useEffect(() => {
    if (mapRef.current !== null && map === null) {
      const instance = L.map(mapRef.current, {
        center: [Location.Latitude, Location.Longitude],
        zoom: Location.Zoom,
      });

      L.tileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        },
      ).addTo(instance);

      setMap(instance);
    }
  }, [map, mapRef]);

  return map;
};

export default useMap;
