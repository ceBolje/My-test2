import React            from 'react';
import { connect }      from 'react-redux';


const DataList          = ({ cases, elid }) => (

    <datalist id={ elid }>
            <option value={ cases[0].city + ', ' + cases[0].country } />
            <option value={ cases[1].city + ', ' + cases[1].country } />
      </datalist>
);

const mapStateToProps   = (state, ownProps) => ({});
export default connect(mapStateToProps)(DataList);

