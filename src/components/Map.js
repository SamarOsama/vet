import React, { useCallback, useContext, useEffect, useState } from 'react'

import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';



const center = {
    lat: 30.10,
    lng: 31.37
};

function Map(props) {
    const google = new google.maps.Map;
    useEffect(() => {
        getCurrentLocation()
    }, [])
    const [center, setCenter] = useState({
        lat: 29.9538,
        lng: 31.5370
    });
    const [Map, setMap] = useState();
    useEffect(() => {
        window.initMap = () => {
            new google.maps.Map(document.getElementById('map'), {
                center: { lat: -34.397, lng: 150.644 },
                zoom: 8,
            });
        };
    }, []);


    const containerStyle = {
        width: '100%',
        height: '115%',

    };

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyCN3fe6hJjK4FjOAX5Hqn_GYEOhqW77JF4",
    })

    const getCurrentLocation = async () => {
        await navigator.geolocation.getCurrentPosition(function (position) {
            console.log("Latitude is :", position.coords.latitude);
            console.log("Longitude is :", position.coords.longitude);
            setCenter({

                lat: parseFloat(`${position.coords.latitude}`),
                lng: parseFloat(`${position.coords.latitude}`),
            })

        });
    }

    const defaultMapOptions = {
        fullscreenControl: false,
        disableDefaultUI: true,
    };

    const onLoad = useCallback(function callback(map) {

        const boundsTwo = new window.google.maps.LatLngBounds(center);
        map.fitBounds(boundsTwo);

        setMap(map)
    }, [])

    const onUnmount = useCallback(function callback(map) {
        setMap(null)
    }, [])

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, error);
    } else {
        console.log("Geolocation not supported");
    }

    function success(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
    }

    function error() {
        console.log("Unable to retrieve your location");
    }
    return (
        <>
            {isLoaded ?? <>
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={12}
                    onUnmount={onUnmount}
                    options={defaultMapOptions}
                    onLoad={onLoad}

                >
                    {/* <Marker> */}



                    {/* <Marker position={{ lat: parseFloat(), lng: parseFloat(station.loc.long) }} icon={charger} />






                </Marker> */}
                </GoogleMap>
                <div style={{
                    position: 'fixed',
                    top: '0',
                    right: '0',
                    zIndex: '1006',
                }}>


                </div>
            </>}
        </>
    )
}


export default Map