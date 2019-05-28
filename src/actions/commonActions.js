export const showSpiner        = (item) => dispatch => {

    dispatch({
        type:       'SHOW_SPINER',
        payload:    item
    });
};

export const hideSpiner        = (item) => dispatch => {

    dispatch({
        type:       'HIDE_SPINER',
        payload:    item
    });
};