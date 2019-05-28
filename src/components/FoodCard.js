import React, { Component }     from 'react';
import { connect }              from 'react-redux';
import { Link }                 from 'react-router-dom';

import { showForm }     from '../actions/foodActions';

import Map              from '../components/Map';
import ReviewForm       from '../components/ReviewForm';



//const props             = this.props;
//const FoodCard          = ({ item, url }) => (
class FoodCard extends Component {



    showReviewForm(props) {

        if (props.openedReviewForm) {
            return <ReviewForm />
        }
    };

    render () {
        const props = this.props;

        return (
        <div className="card-body">
            <h5 className="card-title">{props.item.name}</h5>
            <h6 className="card-subtitle mb2 text-muted">
                <i className="fas fa-location-arrow mr1"> </i> {props.item.adres}</h6>
            <div className="mt1"><Map /></div>

            <p className="mt2 card-text">{props.item.short}</p>
            <Link className="card-link" title="" to={props.url + '/' + props.item.id}>Read more...</Link>
            <a className="card-link" onClick={() => props.onShowReviewForm(props.item.id)}>Add review</a>
            <Link className="card-link" title="" to={'/'}>All Reviews ({props.item.review})</Link>
            { this.showReviewForm(props.item)  }
        </div>);

    }
}

// const mapStateToProps = (state, ownProps) => ({
//     //console:            console.log(state),
//     item:               state.showCard,
//     url:                state.router.location.pathname
// });
//
// export default connect(mapStateToProps)(FoodCard);

export default connect(
    (state, ownProps) => ({

        //console:     console.log(state, ownProps),
        item:               state.showCard,
        url:                state.router.location.pathname
    }),
    dispatch => ({

        onShowReviewForm: (cityId) => {
            console.log(cityId);
            dispatch(showForm(cityId));
        }
    }),
)(FoodCard);
