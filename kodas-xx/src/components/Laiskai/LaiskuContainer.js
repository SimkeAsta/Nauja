import React, { Component } from 'react';
import LaiskuList from './LaiskuList';
import axios from 'axios';
import { Link } from 'react-router-dom';

class LaiskuContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { laiskai: [] };
    }

    componentDidMount() {
        axios.get("http://localhost:8081/api/laiskai")
            .then((response) => {
                console.log(response)
                this.setState({ laiskai: response.data });
            })
            .catch((error) => {
                console.log(error);
            })
    }

    handleDeleteClick = (event, id) => {
        axios.delete("http://localhost:8081/api/laiskai/", this.props.id)
            .then((response) => {
                console.log("letter has been deleted");
            })
            .catch((error) => {
                console.log(error);
            })
        event.preventDefault();
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <LaiskuList
                        laiskai={this.state.laiskai}
                        onDeleteClick={this.handleDeleteClick}
                    />
                </div>
                <div className="row">
                    <Link to="/laiskai/add"><button type="button" className="btn btn-light" onClick={this.props.onAddNew}>Prideti nauja laiska</button></Link>
                </div>
            </div>
        );
    }
};

export default LaiskuContainer;