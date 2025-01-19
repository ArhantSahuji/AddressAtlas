import React, { useEffect, useRef } from 'react';

const MapComponent = ({ lat, lng }) => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    const MAPMYINDIA_API_KEY = import.meta.env.VITE_APP_MAPMYINDIA_API_KEY;

    if (!MAPMYINDIA_API_KEY) {
      console.error("MapmyIndia API key is missing!");
      return;
    }

    // Initialize the map after the script loads
    const initializeMap = () => {
      if (window.L) {
        const map = new window.L.Map(mapContainerRef.current, {
          center: [lat, lng],
          zoom: 10,
        });

        // Add tile layer
        window.L.tileLayer(
          `https://apis.mapmyindia.com/advancedmaps/v1/${MAPMYINDIA_API_KEY}/tile/{z}/{x}/{y}.png`, {
            attribution: 'MapmyIndia ©',
            maxZoom: 18,
          }
        ).addTo(map);

        // Add marker
        window.L.marker([lat, lng]).addTo(map).bindPopup("Location").openPopup();
      } else {
        console.error("Leaflet library not loaded.");
      }
    };

    // Dynamically load MapmyIndia SDK script
    const script = document.createElement('script');
    script.src = `https://apis.mapmyindia.com/advancedmaps/v1/${MAPMYINDIA_API_KEY}/map_load.js`;
    script.async = true;
    script.onload = initializeMap;
    script.onerror = () => console.error("Failed to load MapmyIndia SDK.");

    document.body.appendChild(script);

    // Cleanup script and map on unmount
    return () => {
      if (mapContainerRef.current) {
        mapContainerRef.current.innerHTML = '';
      }
      document.body.removeChild(script);
    };
  }, [lat, lng]);

  return <div ref={mapContainerRef} style={{ height: '400px', width: '800px' }} />;
};

export default MapComponent;
