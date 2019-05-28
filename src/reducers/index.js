import { combineReducers }  from 'redux';
import { routerReducer }    from 'react-router-redux';

import currentLocation      from './home';
import foodCities           from './food';
import showCard             from './showCard';

export default combineReducers ({
    router:
        routerReducer,
        currentLocation,
        foodCities,
        showCard
})