import React from 'react';
import PropTypes from 'prop-types';
import LaiskoComponent from './LaiskoComponent';

var LaiskuList = (props) => {
    var laiskas = props.laiskai.map((laiskas, index) => {
        // console.log(product.id)
        return (
            <LaiskoComponent
                key={index}
                id={laiskas.id}
                name={laiskas.name}
                surname={laiskas.surname}
                city={laiskas.city}
                country={laiskas.country}
                street={laiskas.street}
                houseNumber={laiskas.houseNumber}
                onDeleteClick={(event) => props.onDeleteClick(event, laiskas.name)}
            />
        );
    });
    return (<div className="row">{laiskas}</div>);
};

LaiskuList.propTypes = {
    laiskai: PropTypes.array.isRequired,
    onDeleteClick: PropTypes.func.isRequired,
};

export default LaiskuList;
