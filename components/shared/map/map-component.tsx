"use client";
import React, { FC, useEffect, useState, useRef } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import Spinner from "../spinner/spinner";
import { MAP_KEY } from "@/utils/constants";

interface Location {
  lat: number;
  lng: number;
}

interface IProps {
  location: Location;
  fromContact?: boolean;
}

const MapComponent: FC<IProps> = ({ location, fromContact }) => {
  const [mapZoom, setMapZoom] = useState<number>(10);

  const mapRef = useRef<google.maps.Map | null>(null);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: MAP_KEY!,
  });

  const mapOptions = {
    disableDefaultUI: false,
    mapTypeControl: false,
    zoomControl: false,
    streetViewControl: false,
    fullscreenControl: false,
    keyboardShortcuts: false,
    scrollwheel: false,
    minZoom: 5,
    maxZoom: 40,
  };

  useEffect(() => {
    if (isLoaded && mapRef.current) {
      const bounds = new google.maps.LatLngBounds();
      bounds.extend(new google.maps.LatLng(location?.lat, location?.lng));

      mapRef.current.fitBounds(bounds);
    }
  }, [isLoaded, location]);

  useEffect(() => {
    if (isLoaded && mapRef.current) {
      setMapZoom(12);
      mapRef.current.panTo(location);
    }
  }, [isLoaded, location]);

  return (
    <div
      className={`sm:pb-1/2 relative w-full flex-1 items-center ${fromContact ? "h-[22rem] sm:h-[20.688rem]" : "h-[22rem] sm:h-[34.563rem] midLg:h-full"} `}
    >
      {isLoaded ? (
        <GoogleMap
          id="google-map"
          zoom={mapZoom}
          center={location}
          options={mapOptions}
          onLoad={(map) => {
            mapRef.current = map;
          }}
          mapContainerClassName="absolute top-0 left-0 h-full w-full rounded-2xl"
        >
          <Marker position={location} />
        </GoogleMap>
      ) : (
        <div className="absolute left-0 top-0 flex h-full w-full items-center">
          <Spinner color="text-indigo-blue" />
        </div>
      )}
    </div>
  );
};

export default MapComponent;
