import React, { Component } from 'react';
import LaiskuList from './LaiskuList';
import axios from 'axios';

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
            </div>
        );
    }
};

export default LaiskuContainer;