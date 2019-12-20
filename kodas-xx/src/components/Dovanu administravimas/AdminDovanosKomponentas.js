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
                            {/* <td><Link to={`/admin/${this.props.id}`}><button type="button" className="btn btn-light" onClick={this.props.onCheckDetails}>Check And update</button></Link></td> */}
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
    // onCheckDetails: PropTypes.func.isRequired
}

export default DovanosAdminComponent;