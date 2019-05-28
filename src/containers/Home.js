import React, { Component }     from 'react';
import { connect }              from 'react-redux';
// import { Link }                 from 'react-router-dom';

import {    getLocation,
            getInputLocation
       }                        from '../actions/homeActions';

import Menu                     from '../components/main/Menu';
import Footer                   from '../components/main/Footer';
import Title                    from '../components/Title';
import Description              from '../components/Description';
import Loader                   from '../components/Loader';
import DataList                 from '../components/DataList';
import ResultLinks              from '../components/ResultLinks';



class Home extends Component {

     componentWillMount() {
         this.timer = null;
     }

    showHome(props) {

        if (props.location) {
            return <ResultLinks city={props.city} />;
        }
    };

    showImage(props) {

        if (!props.location) {
            return <div className="homeBG"></div>
        }
    };

    loader(props) {

        if (props.loader) {
            return <Loader text='Detecting place...' />;
        }
    };

    showLocationTools(props) {

        var options = '';
        if(props.finded) {
            options = <DataList cases={ props.finded } elid={ 'cities' } />;
        }

        return <div className="text-center location-form">
                   <div onClick={() => props.onGetLocation()} className="btn btn-brand-light mt3 mb1">
                        Get  MyLocation
                    </div>
                    <div className="text-brand-light">or</div>
                    <input name="city"
                           list="cities"
                           className="location-form__input"
                           placeholder="Enter your city"
                           onChange={(e) => props.onInputLocation(e,props.finded)}
                    />
                    {options}

                </div>;
    };



    render() {

        const props     = this.props;

        return (<div className="my-container">
            <div className="container">
                <Menu />
                <Title title={'Intresting places and good foods near your location'}/>

                {this.loader(props)}
                {this.showImage(props)}
                {this.showHome(props)}
                {this.showLocationTools(props)}

                <Description />
                <Footer />

            </div>
        </div>);
    };
}

    export default connect(
(state, ownProps) => ({

    location:     state.currentLocation.location,
    loader:       state.currentLocation.loader,
    city:         state.currentLocation.city,
    finded:       state.currentLocation.finded

}),
dispatch => ({

    onGetLocation: () => {
        dispatch(getLocation());
    },
    onInputLocation: (e, finded) => {

        clearTimeout(this.timer);

        var val         = e.target.value;

        this.timer      = setTimeout(() => {
            dispatch(getInputLocation(val, finded))
        },
        600);
    }
}),
)(Home);
