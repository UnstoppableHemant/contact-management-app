import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import axios from 'axios';
import 'leaflet/dist/leaflet.css';
import { GetCountryWiseeCases } from '../../utils/apiPath';

const Map = () => {
  const [countryData, setCountryData] = useState([]);
  const res = GetCountryWiseeCases();
  const customIcon = L.icon({
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    tooltipAnchor: [16, -28],
  });

  useEffect(() => {
    // axios.get('https://disease.sh/v3/covid-19/countries')
    //   .then(response => {
        setCountryData(res);
    //   })
    //   .catch(error => {
    //     console.error('Error fetching country data:', error);
    //   });
  }, [res]);

  console.log(res);

  return (
    <div className='text-center mb-10'>
      <h2 className='text-xl font-bold underline underline-offset-4 mb-2'>COVID-19 Geographical Data</h2>
    <MapContainer center={[20, 0]} zoom={2} style={{ height: '100vh', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {countryData.map(country => (
        <Marker
          key={country.country}
          position={[country.countryInfo.lat, country.countryInfo.long]}
          icon={customIcon}
        >
          <Popup>
            <div>
              <h2>{country.country}</h2>
              <p>Active Cases: {country.active}</p>
              <p>Recovered: {country.recovered}</p>
              <p>Deaths: {country.deaths}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
    </div>
  );
};

export default Map;
