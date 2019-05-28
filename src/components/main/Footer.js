import React from 'react';
import { connect } from 'react-redux';


const Footer = ({ data }) => (

    <div className="row footer-line">
        <div className="col-6">Cheap.com © 2018</div>
        <div className="col-6 text-right">by Pacific</div>
    </div>
);

const mapStateToProps = (state, ownProps) => ({

    data: ownProps.data
});

export default connect(mapStateToProps)(Footer);

