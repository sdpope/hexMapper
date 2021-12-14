

import React from 'react';
import { GoogleMap, useJsApiLoader, Polygon, Data } from '@react-google-maps/api';
import boundaryTest2 from "./boundaryTest2.json";


//console.log(boundaryTest2);
//console.log(boundaryTest2.coordinates[0]);


const boundaryToPolygon = (polygon) => {
  let output = [];
  //console.log(polygon);
  polygon[0].forEach((line) => {
    //console.log(line);
    const newLine = {lng: Number(line[0]), lat: Number(line[1])};
    output = [...output, newLine];
  })
  return output;
}

//console.log(boundaryToPolygon(boundaryTest2.coordinates[9]));

const testBoundaryConvert = boundaryToPolygon(boundaryTest2.coordinates[9]);
console.log("test boundary conversion", testBoundaryConvert[0].lat);

const containerStyle = {
  width: '800px',
  height: '800px'
};

const center = {
  lat: testBoundaryConvert[0].lat,
  lng: testBoundaryConvert[0].lng,
};

const MapTest = () => {

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCYbhWzRG9LbRB4NMwyr_3qyKmfpnXJEnE"
  })




  const triangleCoords = [
    { lat: 25.774, lng: -80.19 },
    { lat: 18.466, lng: -66.118 },
    { lat: 32.321, lng: -64.757 },
    { lat: 25.774, lng: -80.19 },
  ];

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map);
 
    
  }, [])

  const onDataLoad = data => {
    console.log('data: ', data)
  }

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])



  
  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }

      {boundaryTest2.coordinates.map((polygon) => {
        const newPolygon = boundaryToPolygon(polygon);
        //console.log("new polygon: ", newPolygon);
        //console.log(newPolygon[0]);

        return (<Polygon 
          path={newPolygon}
          options={{
            fillColor: "yellow",
            fillOpacity: 0.4,
            strokeColor: "#d35400",
            strokeOpacity: 0.8,
            strokeWeight: 3
        }} />

        );

      })}



        <Polygon 
        path={triangleCoords}
        options={{
                fillColor: "yellow",
                fillOpacity: 0.4,
                strokeColor: "#d35400",
                strokeOpacity: 0.8,
                strokeWeight: 3
            }} />
        <></>
      </GoogleMap>
  ) : <></>
}

export default MapTest;