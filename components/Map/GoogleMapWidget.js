import { Map, Marker, GoogleApiWrapper, InfoWindow } from 'google-maps-react'
import { useState } from 'react'
import mapStyles from './mapStyles.json'
import airbnbIcon from '../../public/images/airbnbIcon.png'
import CardV2 from '../Cards/CardV2'


function CustomMap({ google, data }) {

  const mapLoaded = (mapProps, map) => {
    map.setOptions({
      styles: mapStyles
    })
  }

  const [showInfoWindow, setshowInfoWindow] = useState(false)
  const [activeMarker, setactiveMarker] = useState({})
  const [infoWindowData, setinfoWindowData] = useState({})

  const onMarkerClick = (marker, data) => {
    setshowInfoWindow(true)
    setactiveMarker(marker)
    setinfoWindowData(data)
  }

  const onMapClick = () => {
    setshowInfoWindow(false)
    setactiveMarker({})
  }

  const getCenter = ()=>{
    let maxLng = Math.max(...data.map(o => parseFloat(o.lng)))
    let minLng = Math.min(...data.map(o => parseFloat(o.lng)))
    let maxLat = Math.max(...data.map(o => parseFloat(o.lat)))
    let minLat = Math.min(...data.map(o => parseFloat(o.lat)))

    return { lat: (maxLat + minLat)/2, lng: (maxLng + minLng)/2 }
    
  }

  getCenter()
  return (
    <Map
      google={google}
      containerStyle={{
        position: "static",
        width: "100%",
        height: "100%"
      }}
      style={{
        width: "100%",
        height: "100%"
      }}
      onClick={onMapClick}
      // center={getCenter()}
      initialCenter= {getCenter()}
      zoom={data.length === 1 ? 18 : 11}
      disableDefaultUI={true}
      onReady={(mapProps, map) => mapLoaded(mapProps, map)}

    >
      {data?.map(
        coords => (
          <Marker
            position={{ lat: coords?.lat, lng: coords.lng }}
            onClick={(e)=>onMarkerClick(e, coords)}
            name={coords?.title}
            icon={{
              url: airbnbIcon,
              anchor: new google.maps.Point(16,16),
              scaledSize: new google.maps.Size(24,24)
            }}
          />
        )
      )}

      <InfoWindow
        position={activeMarker.position}
        visible={showInfoWindow}>
        <div style={{width:'300px'}}>
         <CardV2 data={infoWindowData}/>
        </div>
      </InfoWindow>

    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyBePOD_QqU32z1xEsrW5SUESDMXelMJk3U"
})(CustomMap);
