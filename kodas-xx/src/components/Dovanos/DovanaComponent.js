import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const styles = {
    card: { width: '18rem' },
    image: { height: '200px' }
}

class DovanaComponent extends Component {
    render() {
        return (
            <div className="card" style={styles.card} >
                <img src={this.props.image} className="card-img-top" alt={this.props.title} style={styles.image} />
                <div className="card-body">
                    <h5 className="card-title">{this.props.title}</h5>
                    <p className="card-text">{this.props.description}</p>
                    <p className="card-text">{this.props.kidsPresent} Dovana skirta vaikams</p>
                    <Link to={`/dovanos/${this.props.title}`}><button className="btn btn-warning" onClick={this.props.onDetailsClick}>Perziureti</button></Link>
                </div>
            </div>
        );
    }
}

DovanaComponent.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string,
    description: PropTypes.string,
    kidsPresent: PropTypes.bool,
    onDetailsClick: PropTypes.func.isRequired
}

export default DovanaComponent;