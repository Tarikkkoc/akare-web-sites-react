import React from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
} from "react-google-maps";

function Map() {
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 40.99830303175591, lng: 28.72293807429095 }} // İstenilen koordinatları buraya girin
    >
      <Marker position={{ lat: 40.99830303175591, lng: 28.72293807429095 }} />{" "}
      // İstenilen koordinatları buraya girin
    </GoogleMap>
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

const GoogleMaps = () => {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyChXyt_sGb33lX616iEA_m6F_vvoYeSAzA`}
        loadingElement={<div style={{ height: "100%" }} />}
        containerElement={<div style={{ height: "100%" }} />}
        mapElement={<div style={{ height: "100%" }} />}
      />
    </div>
  );
};

export default GoogleMaps;
