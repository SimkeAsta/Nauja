import React, { Component } from 'react';
import DovanosAdminList from './DovanosAdminList';
import axios from 'axios';
import { Link } from 'react-router-dom';

class DovanuAdminContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { dovanos: [] };
    }

    componentDidMount() {
        axios.get("http://localhost:8081/api/dovanos")
            .then((response) => {
                console.log(response)
                this.setState({ dovanos: response.data });
            })
            .catch((error) => {
                console.log(error);
            })
    }

    // handleCheckDetails = (event, id) => {
    //     console.log(productId)
    //     event.preventDefault();
    //     this.props.history.push(`/admin/` + productId);
    // }


    render() {
        return (
            <div className="container">
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Pavadinimas</th>
                            <th scope="col">Nuotrauka</th>
                            <th scope="col">Dovana vaikams</th>
                        </tr>
                    </thead>
                </table>
                <DovanosAdminList
                    dovanos={this.state.dovanos}
                // onCheckDetails={this.handleCheckDetails}
                />

                <Link to="/admin/add"><button type="button" className="btn btn-light" onClick={this.props.onAddNew}>Prideti nauja dovana</button></Link>
                <Link to="/"><button type="button" className="btn btn-light" onClick={this.props.onBack}>Grizti i dovanu sarasa</button></Link>
            </div>
        );
    }
};

export default DovanuAdminContainer;