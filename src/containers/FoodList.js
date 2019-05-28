import React, { Component }     from 'react';
import { connect }              from 'react-redux';
//import { Link }       from 'react-router-dom';
import { openCard,
         loadFoodItems} from '../actions/foodActions';


import FoodCard         from '../components/FoodCard';
import Title            from '../components/Title';
import Loader           from '../components/Loader';


class FoodsList extends Component {


    showCard(id) {
        return this.props.showCard === id ? <FoodCard /> : '';
    }

    showTitle(props) {

        if(props.country) {
            return <Title title={'Top-10 Cheapest food plases in '  + props.city + ', ' + props.country  } />;
        }
    }

    showButtonMore(props) {

        if(props.loaded) {
            return (<div className="row content-line mt2">
                <div className="col content-line__showmore">
                    <button type="button"
                            onClick={() => this.props.onGetMoreItems(props.city.cityId, props.loaded)}
                            className="btn btn-outline-secondary mt2"
                    >       Show more
                    </button>
                </div>
            </div>);
        }
    }

    showButtonNew(props) {

        if(props.loaded) {
            return (<div className="row content-line mt2">
                <div className="col content-line__showmore">
                    <a  title="Add new item"
                        onClick={() => this.props.onLoadFoodItems(props.city.cityId)}
                        className="mb2"
                        >
                        <i className="far fa-plus-square"></i>
                    </a>
                </div>
            </div>);
        }
    }

    showList(props) {

        //initial loading
        if (!props.loaded) {
            props.onLoadFoodItems(props.cityId);
            return <Loader text="Loading ..." />;
        }

        
        let city        = props.city.foodPlaces;

        return city.map((item, i) => {

            return <div key={item.id} className="card">
                        <div className="card-header content-line__item-wrapper">
                            <a onClick={() => props.onOpenCard(item)}
                               className="btn-link content-line__item-title">
                                {i+1}. {item.name}, from ${item.minPrice}
                            </a>
                            <a className="content-line__item-share">
                                <i className="fas fa-location-arrow mr1"> </i>
                                {item.likes}
                            </a>
                        </div>
                        <div>
                            { this.showCard(item.id) }
                        </div>
                    </div>
        })
    }

    render() {

        const props = this.props;

        return (
            <div className="list">
                {this.showTitle(props.city)}

                {this.showButtonNew(props)}

                {this.showList(props)}

                {this.showButtonMore(props)}

            </div>

        );
    }
}

export default connect(
    (state, ownProps) => ({

        //console:     console.log(state, ownProps),
        showCard:       state.showCard.id,
        city:           state.foodCities,
        loaded:         state.foodCities.loaded
    }),
    dispatch => ({

        onLoadFoodItems: (cityId) => {

            dispatch(loadFoodItems(cityId));
        },
        onOpenCard: (item) => {

            dispatch(openCard(item));
        },
        onGetMoreItems: (item) => {

            dispatch(loadFoodItems(item));
        }
    }),
)(FoodsList);