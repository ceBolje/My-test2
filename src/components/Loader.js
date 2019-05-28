import React from 'react';
import { connect } from 'react-redux';


const Loader = ({ text }) => (

    <div id="loader">{ text }<div className="loader"></div></div>
);

const mapStateToProps = (state, ownProps) => ({
    title: ownProps.text
});

export default connect(mapStateToProps)(Loader);

