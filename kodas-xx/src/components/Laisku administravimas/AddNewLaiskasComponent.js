import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddNewLaiskasComponent extends Component {
    render() {
        console.log(this.props)
        return (
            <div className="container">
                <form onSubmit={this.props.onSave}>
                    <div className="form-row">
                        <div className="col-md-4 mb-3">
                            <label>Vardas</label>
                            <input type="text" name="name" className="form-control" id="validationDefault01" placeholder="Vardas" onChange={this.props.onChange} required />
                        </div>
                        <div className="col-md-4 mb-3">
                            <label>Pavarde</label>
                            <input type="text" name="surname" className="form-control" id="validationDefault01" placeholder="Pavarde" onChange={this.props.onChange} required />
                        </div>
                        <div className="col-md-4 mb-3">
                            <label>Salis</label>
                            <input type="text" name="country" className="form-control" id="validationDefault01" placeholder="Salis" onChange={this.props.onChange} required />
                        </div>
                        <div className="col-md-4 mb-3">
                            <label>Miestas</label>
                            <input type="text" name="city" className="form-control" id="validationDefault01" placeholder="Miestas" onChange={this.props.onChange} required />
                        </div>
                        <div className="col-md-4 mb-3">
                            <label>Gatve</label>
                            <input type="text" name="street" className="form-control" id="validationDefault01" placeholder="Gatve" onChange={this.props.onChange} required />
                        </div>
                        <div className="col-md-4 mb-3">
                            <label>Namo numeris</label>
                            <input type="text" name="houseNumber" className="form-control" id="validationDefault01" placeholder="Namo numeris" onChange={this.props.onChange} required />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="col-md-2 offset-md-4 mb-3">
                            <button className="btn btn-warning" type="submit" value="Submit">Issaugoti</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

AddNewLaiskasComponent.propTypes = {
    onChange: PropTypes.func,
    onSave: PropTypes.func,

};

export default AddNewLaiskasComponent;