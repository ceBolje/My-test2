import React            from 'react';
import { connect }      from 'react-redux';
import { Link }         from 'react-router-dom';


const ReviewForm          = ({ item, url }) => (

    <div className="mt2 border-dashed">
        <h5 className="card-title">Add review</h5>
        <form>
            <div className="form-group">
                <label for="name">Your Name</label>
                <input id="name" type="text" className="form-control" placeholder="Enter name" />
                <small className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label for="review">Your review</label>
                <textarea type="checkbox" className="form-control"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
);

const mapStateToProps = (state, ownProps) => ({
   console:            console.log(state),
    item:               state.showCard,
    url:                state.router.location.pathname
});

export default connect(mapStateToProps)(ReviewForm);

