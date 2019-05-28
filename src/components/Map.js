import React            from 'react';
import { connect }      from 'react-redux';
import GoogleMapReact   from 'google-map-react';
import { Link }         from 'react-router-dom';


const Marker            = ({lat, lng, text, url}) =>
    <div>
        <Link className="marker" title={text} to={url}> </Link>
    </div>;


const Map = ({ place, url }) => (

    <div style={{ height: '150px', width: '100%' }}>
        <GoogleMapReact
            bootstrapURLKeys    = {{ key: 'AIzaSyA-5ukMKykbR0Duoca0R4PjHIG-waGpe7E' }}
            defaultCenter       = {[place.maplat, place.maplng]}
            defaultZoom         = {16}
        >
            <Marker
                lat             = {place.maplat}
                lng             = {place.maplng}
                text            = {place.name + place.adres}
                url             = {url + '/' + place.id}
            />

        </GoogleMapReact>
    </div>
);

const mapStateToProps = (state, ownProps) => ({

    //comsole:console.log(state.router.location.pathname),
    place:  state.showCard,
    url:    state.router.location.pathname
});

export default connect(mapStateToProps)(Map);

