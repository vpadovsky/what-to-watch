import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const MainPage = (props) => {
    return <h1>Hello, {props.name}</h1>
};

MainPage.defaultProps = {
    name : 'Anon'
};

MainPage.propTypes = {
    name: PropTypes.string
};

export default MainPage;