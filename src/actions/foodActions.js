import fetch        from 'cross-fetch';
import URL          from "../config";

export function loadFoodItems(cityId) {
    return dispatch => {

        dispatch(fetchFoodItems());

        fetch(URL + `/cities/?city=${cityId}`)

            .then(result => result.json())
            .then(result => {

                result.loaded = true;

                dispatch(reciveFoodItems(result));
            })
            .catch(() => {
                dispatch(rejectFoodItems({loaded: true, foodPlaces: []}));
            });
    };
}


export const fetchFoodItems    = () => dispatch => {

    dispatch({
        type:       'FETCH_FOOTITEMS_START',
        payload:    {}

    });
};

export const reciveFoodItems    = (item) => dispatch => {

    dispatch({
        type:       'FETCH_FOOTITEMS_DONE',
        payload:    item

    });
};

export const rejectFoodItems    = (item) => dispatch => {

    dispatch({
        type:       'FETCH_FOOTITEMS_REJECTED',
        payload:    item
    });
};

export const openCard           = (item) => dispatch => {

    dispatch({
        type:       'SHOW_CARD',
        payload:    item
    });
};

export const showForm         = (item) => dispatch => {

    dispatch({
        type:       'SHOW_REVIEW_FORM',
        payload:    {openedReviewForm: true}
    });
};
export const requestItems       = (item) => dispatch => {

    dispatch({
        //console:console.log(item),
        type:       'REQUEST_ITEMS',
        payload:    item
    });
};