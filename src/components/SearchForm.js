import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchRestaurants, updateFilters } from '../actions/restaurantActions';

class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: '',
            name: '',
            address: '',
            page: 1
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    
    onChange(e) {
        this.setState({[e.target.name]:e.target.value})
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.updateFilters(this.state);
        this.props.fetchRestaurants(this.state);
    }

    render() {
        return (
            <div className="SearchForm">
                <h2>Find me some food</h2>
                <form onSubmit={this.onSubmit}>
                    <label class="lblName" for="name" style={{display:"none"}}>Search By Name</label>
                    <input placeholder="name" name="name" onChange={this.onChange} type="text" value={this.state.title} />
                    <label class="lblCity" for="city" style={{display:"none"}}>Search By City</label>
                    <input placeholder="city" name="city" onChange={this.onChange} type="text" value={this.state.city} />
                    <label class="lblAddress" for="address" style={{display:"none"}}>Search By Address</label>
                    <input placeholder="address" name="address" onChange={this.onChange} type="text" value={this.state.address} />
                    <button type="submit">Search</button>
                </form>
            </div>
        )
    }
}

SearchForm.propTypes = {
    fetchRestaurants: PropTypes.func.isRequired
}

export default connect(null, {fetchRestaurants, updateFilters})(SearchForm);