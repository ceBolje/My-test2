const initialState =
{
    location: false
};

export default function cityPlaces(state = initialState, action) {

    if(action.type === 'GET_LOCATION_START') {

        return {
            ...state, ...action.payload
         };

    }

    if(action.type === 'GET_LOCATION_DONE') {

        return {
            ...state, ...action.payload
        };

    }

    if(action.type === 'GET_INPUT_CITY_DONE') {

        return {
            ...state, ...action.payload
        };

    }

    return state;
}