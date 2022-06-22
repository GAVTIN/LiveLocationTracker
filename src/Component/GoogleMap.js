import React, { useEffect } from 'react';
import '../App.css'

function GoogleMap(prop) {
  useEffect(() => {}, [prop]);
  return (
    <div>
      <iframe
        id="iframeId"
        src={`https://maps.google.com/maps?q=${prop.lat},${prop.lon}&hl=es;&output=embed`}
        title="The GeoLocation of Container"
        height="300px"
        width="500px"
      >
        Current Location Of Container
      </iframe>
    </div>
  );
}
export default GoogleMap;
