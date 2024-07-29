import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;
// const mapbox_style = import.meta.env.VITE_MAPBOX_STYLE;
const Mapbox = ({ mapbox_style, currentCenter }) => {
  console.log("token", mapbox_style);
  const mapContainerRef = useRef(null);
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: mapbox_style,
      center: currentCenter, // starting position [lng, lat]
      zoom: 2,
      minZoom: 5,
      maxZoom: 22,
    });

    // Add navigation controls to the map
    map.addControl(new mapboxgl.NavigationControl(), "top-right");

    // Clean up on unmount
    return () => map.remove();
  }, []);

  return (
    <div ref={mapContainerRef} style={{ width: "100vw", height: "100vh" }} />
  );
};

export default Mapbox;
