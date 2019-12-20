import React from 'react';
import PropTypes from 'prop-types';
import DovanosAdminComponent from './AdminDovanosKomponentas';

var DovanosAdminList = (props) => {
    var dovana = props.dovanos.map((dovana, index) => {
        // console.log(product.id)
        return (
            <DovanosAdminComponent
                key={index}
                id={dovana.id}
                image={dovana.image}
                title={dovana.title}
                description={dovana.description}
                kidsPresent={dovana.kidsPresent}
            // onCheckDetails={(event) => props.onCheckDetails(event, dovana.title)}
            />
        );
    });
    return (<div className="row">{dovana}</div>);
};

DovanosAdminList.propTypes = {
    dovanos: PropTypes.array.isRequired,
    // onCheckDetails: PropTypes.func.isRequired,
};

export default DovanosAdminList;
