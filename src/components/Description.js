import React            from 'react';
import { connect }      from 'react-redux';

const defaultText       =   'What is Lorem Ipsum. Lorem Ipsum is simply dummy text ' +
                            'of the printing and typesetting industry. Lorem Ipsum has ' +
                            'been the industry`s standard dummy text ever since the 1500s, ' +
                            'when an unknown printer took a galley of type and scrambled it ' +
                            'to make a type specimen book.';

const Description = ({  title }) => (

    <p className="mt4 card-text text-justify">{title}</p>
);

const mapStateToProps = (state, ownProps) => ({

    title: ownProps.text || defaultText
});

export default connect(mapStateToProps)(Description);

