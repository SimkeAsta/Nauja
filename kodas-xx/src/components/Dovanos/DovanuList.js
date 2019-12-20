import React from 'react';
import PropTypes from 'prop-types';
import DovanaComponent from './DovanaComponent';

var DovanuList = (props) => {
    var dovana = props.dovanos.map((dovana, index) => {
        // console.log(product.id)
        return (
            <DovanaComponent
                key={index}
                id={dovana.id}
                title={dovana.title}
                description={dovana.description}
                kidsPresent={dovana.kidsPresent}
                onDetailsClick={(event) => props.onDetailsClick(event, dovana.id)}
            />
        );
    });
    return (<div className="row">{dovana}</div>);
};

DovanuList.propTypes = {
    dovanos: PropTypes.array.isRequired,
    onDetailsClick: PropTypes.func.isRequired,
};

export default DovanuList;
