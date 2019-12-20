import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const styles = {
    card: { width: '18rem' },
    image: { height: '200px' }
}

class DovanosAdminComponent extends Component {
    render() {
        return (
            <div className="container">
                <table className="table">
                    <tbody>
                        <tr>
                            <th scope="row">{this.props.id}</th>
                            <td>{this.props.title}</td>
                            <td>{this.props.image}</td>
                            <td>{this.props.kidsPresent}</td>

                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

DovanosAdminComponent.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string,
    description: PropTypes.string,
    kidsPresent: PropTypes.bool,
}

export default DovanosAdminComponent;