import React from 'react';
import { GoogleMap, useJsApiLoader, Polygon, Data } from '@react-google-maps/api';
import DistrictPolygon from './DistrictPolygon';
import { boundaryToPolygon } from './editor/utilities';
import { MapEditorContext } from '../MapEditorContext';

import { googleMapsApiKey } from '../gmapsAPI';



const containerStyle = {
  width: '800px',
  height: '800px'
};

const center = {
  lat: 56.1304,
  lng: -106.3468,
};

const MapTest = () => {

  const {selectedGeoDistrict, setSelectedGeoDisticted, districtsGeo, setDistrictsGeo, representElecteds, editorPanel, setEditorPanel} = React.useContext(MapEditorContext);

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: googleMapsApiKey
  })

  setEditorPanel("geomap");

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map);
 
    
  }, [])


  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])


  
  return isLoaded && districtsGeo !== null ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={{
          lat: 56.1304,
          lng: -106.3468,
        }}
        zoom={3}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
      
      {districtsGeo !== null &&
        districtsGeo.map((district) => {
          //console.log("rendering district polygon,", district.name);
          /* const districtRep = representElecteds.filter((elected) => {
            return district.name === elected.district_name;
          })[0]; */

          return (
            <DistrictPolygon 
            key={`${district.name}Polygon`} 
            districtShape={district.simple_shape} 
            districtName={district.name}
            />
          );
        })

      }
    

      </GoogleMap>
  ) : <>Loading boundary shapes</>
}

export default MapTest;