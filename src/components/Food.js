import React            from 'react';
import Menu             from './main/Menu';
import Footer           from './main/Footer';
import FoodList         from '../containers/FoodList';

import { connect }      from 'react-redux';

const Food = props => (

    <div className="my-container">
        <div className="container">
            <Menu />
            <FoodList   cityId={props.cityId} />
            <Footer />
          </div>
    </div>
);

const mapStateToProps = (state, ownProps) => ({
    cityId:             state.currentLocation.city ? state.currentLocation.city.cityId : 'kyiv',
});

export default connect(mapStateToProps)(Food);



