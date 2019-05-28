import fetch    from 'cross-fetch';
import URL      from './../config';

export function getLocation() {
    return dispatch => {

        dispatch(startGetLocation());

        new Promise((resolve, reject) => {

            var startPos;
            var geoOptions = {
                maximumAge:     5 * 60 * 1000,
                timeout:        4 * 1000
            };

            var geoSuccess = function (position) {
                startPos = position;
                
                fetch(
                    URL + '/cities/?position=' + startPos.coords.latitude

                ).then(
                    result => result.json()
                    
                ).then(result => {

                        dispatch(doneGetLocation({
                            location:   true,
                            loader:     false,
                            lat:        startPos.coords.latitude,
                            lon:        startPos.coords.longitude,
                            city:       result
                        }));

                        //console.log(result);
                })
                    .catch(() => {
                        console.log('__Error');
                });

                
            };
            var geoError = function (error) {

                if(error){
                    reject(); console.log('Error occurred. Error code: ' + error.code);

                    //   0: unknown error
                    //   1: permission denied
                    //   2: position unavailable
                    //   3: timed out
                }
            };
            navigator.geolocation.getCurrentPosition(geoSuccess, geoError,geoOptions);

    }).catch(() => {

                console.log('Error');
        });
    };
}


export const startGetLocation    = () => dispatch => {

    dispatch({
        type:       'GET_LOCATION_START',
        payload:    {
            loader: true
        }
    });
};

export const doneGetLocation     = (item) => dispatch => {

    dispatch({
        type:       'GET_LOCATION_DONE',
        payload:    item
    });
};


export const rejectGetLocation   = (item) => dispatch => {

    dispatch({
       // console:console.log(item),
        type:       'GET_LOCATION_REJECTED',
        payload:    item
    });
};


export function getInputLocation(searchCity, finded) {
    return dispatch => {

        dispatch(startGetInputLocation());
        
        
        if(searchCity === '') {

            dispatch(doneGetInputLocation({
                location: false,
                loader: false,
                finded: null
            }));

        } else if(searchCity.search(',') !== -1) {


            let city = finded.filter(item => item.city + ', ' + item.country === searchCity);

            fetch(
                URL + '/cities/?city=' + city[0].cityId

            ).then(
                result => result.json()

            ).then(result => {

                dispatch(doneGetLocation({
                    location:   true,
                    loader:     false,
                    city:       result
                }));
            }).catch(() => {
                console.log('__Error');
            });


        } else {

            fetch(

                URL + '/cities/?searchCity=' + searchCity

            ).then(

                result => result.json()

            ).then(result => {

                dispatch(doneGetInputLocation({
                    location:   false,
                    loader:     false,
                    finded:     result
                }));
            }).catch(() => {
                console.log('__Error');
            });
        }
    };
}


export const startGetInputLocation    = (input) => dispatch => {

    dispatch({
        log:console.log(input),
        type:       'GET_INPUT_CITY_START',
        payload:    {
            loader: true
        }

    });
};

export const doneGetInputLocation     = (item) => dispatch => {

    dispatch({
        type:       'GET_INPUT_CITY_DONE',
        payload:    item
    });
};