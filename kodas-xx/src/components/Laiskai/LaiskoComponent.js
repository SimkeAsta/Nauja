import React, { Component } from 'react';
import PropTypes from 'prop-types';

const styles = {
    card: { width: '18rem' },
    image: { height: '200px' }
}

class LaiskoComponent extends Component {
    render() {
        return (
            <div className="card" style={styles.card}>
                <div className="card-body">
                    <h5 className="card-title">Laisko Pavadinimas</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{this.props.name} {this.props.surname}</h6>
                    <h5 className="card-title">Adresas</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{this.props.houseNumber} {this.props.street}</h6>
                    <h6 className="card-subtitle mb-2 text-muted">{this.props.city}</h6>
                    <h6 className="card-subtitle mb-2 text-muted">{this.props.country}</h6>
                    <button className="btn btn-warning" onClick={this.props.onDeleteClick}>Istrinti laiska</button>
                </div>
            </div>
        );
    }
}



LaiskoComponent.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    surname: PropTypes.string,
    country: PropTypes.string,
    city: PropTypes.string,
    street: PropTypes.string,
    houseNumber: PropTypes.number,
    onDeleteClick: PropTypes.func.isRequired
}

export default LaiskoComponent;