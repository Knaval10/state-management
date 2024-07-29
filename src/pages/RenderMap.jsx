import React from "react";
import Mapbox from "../components/Mapbox";

const RenderMap = () => {
  const chandragiri_style = import.meta.env.VITE_MAPBOX_STYLE;
  return (
    <div>
      <Mapbox
        mapbox_style={chandragiri_style}
        currentCenter={[27.6903, 85.2205]}
      />
    </div>
  );
};

export default RenderMap;
