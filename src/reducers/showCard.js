const initialState  = '';

export default function showCard(state = initialState, action) {
    if(action.type === 'SHOW_CARD') {
        return action.payload;
    }


    if(action.type === 'SHOW_REVIEW_FORM') {
        console.log('review');
        return {
            ...state, ...action.payload
        };
    }


    return state;
}
