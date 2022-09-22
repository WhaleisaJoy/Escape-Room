import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../../hooks/useMap';
import { useEffect, useRef } from 'react';
import { Location } from '../../../const';

const MARKER_URL = 'img/icon-location.svg';

const Map = (): JSX.Element => {
  const mapRef = useRef(null);
  const map = useMap(mapRef);

  const defaultMarker = L.icon({
    iconUrl: MARKER_URL,
    iconSize: [27, 39],
    iconAnchor: [13, 39],
  });

  useEffect(() => {
    if (map) {
      map.flyTo(L.latLng(Location.Latitude, Location.Longitude), Location.Zoom);

      L.marker([Location.Latitude, Location.Longitude], {
        icon: defaultMarker,
      }).addTo(map);
    }
  }, [map, defaultMarker]);

  return <section style={{ width: '100%' }} ref={mapRef}></section>;
};

export default Map;
