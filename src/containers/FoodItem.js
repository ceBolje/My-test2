import React from 'react';
import { connect } from 'react-redux';

const FoodItem = ({ foodItem }) => <div className="text-capitalize">{foodItem.name}</div>;

const mapStateToProps = (state, ownProps) => {

    let foodItem;
         // let foodItem   = state.tracks.find(track => track.city === ownProps.match.params.city)
         //                 .find(item => item.id === ownProps.match.params.id);
         //let foodItem   = foodCity.find(item => item.id === ownProps.match.params.id);
             foodItem   = foodItem ||
             {
                 name:'Food place not found'
             };
    return {

            foodItem:foodItem
    };
};

export default connect(mapStateToProps)(FoodItem);