import React, { Component } from 'react';
import DovanuList from './DovanuList';
import axios from 'axios';

class DovanuListContainer extends Component {
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

    handleDetailsClick = (event, id) => {
        console.log(id)
        event.preventDefault();
        this.props.history.push(`/` + id); // gal ir cia details pagal title turetu rodyt, o ne pagal id?
    }


    render() {
        return (
            <div className="container">
                <div className="row">
                    <DovanuList
                        dovanos={this.state.dovanos}
                        onDetailsClick={this.handleDetailsClick}
                    />
                </div>
            </div>
        );
    }
};

export default DovanuListContainer;