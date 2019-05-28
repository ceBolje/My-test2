const initialState =
{
    loaded: false
};

export default function cityFoodPlaces(state = initialState, action) {

    if(action.type === 'ADD_TRACK') {

        return [
            ...state, action.payload
        ];
    } else if(action.type === 'REQUEST_ITEMS') {

        console.log(state);

        // example
        // {
        // ...state,
        //     myPosts: {
        // ...state.myPosts,
        //         isPending: true
        // }
        // }

        return {
                ...state,
                foodPlaces: [
                ...state.foodPlaces,
                    ...action.payload
                ]
        };


    } else if(action.type === 'FETCH_FOOTITEMS_DONE') {

       //console.log( ...state, action.payload);
       return  {...state, ...action.payload};

    } else if(action.type === 'FETCH_FOOTITEMS_REJECTED') {

        //console.log( ...state, action.payload);
        return  {...state, ...action.payload};
        
    }  else if(action.type === 'SHOW_CARD') {

        //console.log( ...state, action.payload);
        return  {...state, ...action.payload};
    }


    return state;
}