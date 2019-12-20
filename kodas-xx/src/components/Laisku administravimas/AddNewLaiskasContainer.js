import React, { Component } from 'react';
import axios from 'axios';
import AddNewLaiskasComponent from './AddNewLaiskasComponent';

class AddNewLaiskasContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            laiskas: {
                name: '',
                surname: '',
                city: '',
                country: '',
                street: '',
                houseNumber: '',
            }
        };
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSave = (event) => {
        let duomenys = {
            name: this.state.name,
            surname: this.state.surname,
            city: this.state.city,
            country: this.state.country,
            street: this.state.street,
            houseNumber: this.state.houseNumber,
        }
        axios
            .post("http://localhost:8081/api/laiskai", duomenys)
            .then((response) => {
                console.log("post ok");
            })
            .catch((error) => {
                console.log(error);
            })
        event.preventDefault();
    }

    render() {
        return (
            <AddNewLaiskasComponent
                dovana={this.state.dovana}
                onChange={this.handleChange}
                onSave={this.handleSave} />
        )
    }
}

export default AddNewLaiskasContainer;