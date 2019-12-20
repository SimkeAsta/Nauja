import React, { Component } from 'react';
import axios from 'axios';
import AddNewDovanaFormComponent from './AddNewDovanaComponent';

class AddNewDovanaContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dovana: {
                title: '',
                image: '',
                description: '',
                kidsPresent: '',
            }
        };
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSave = (event) => {
        let duomenys = {
            title: this.state.title,
            description: this.state.description,
            image: this.state.image,
            kidsPresent: this.state.kidsPresent,
        }
        axios
            .post("http://localhost:8081/api/dovanos", duomenys)
            .then((response) => {
                console.log("post ok");
                // axios
                //     .get("http://localhost:8080/")
                //     .then((response) => {
                //         this.setState({
                //             product: response.data
                //         });
                //     })
                //     .catch((error) => {
                //         console.log(error);
                //     })
            })
            .catch((error) => {
                console.log(error);
            })
        event.preventDefault();
    }

    render() {
        return (
            <AddNewDovanaFormComponent
                dovana={this.state.dovana}
                onChange={this.handleChange}
                onSave={this.handleSave} />
        )
    }
}

export default AddNewDovanaContainer;