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
                    <input placeholder="Search By Name" name="name" onChange={this.onChange} type="text" value={this.state.title} aria-label="Search By Name" />
                    <input placeholder="Search By City" name="city" onChange={this.onChange} type="text" value={this.state.city} aria-label="Search By City" />
                    <input placeholder="Search By Address" name="address" onChange={this.onChange} type="text" value={this.state.address} aria-label="Search By Address" />
                    <button type="submit" name="search" className="search" aria-label="Search for results">Search</button>
                </form>
            </div>
        )
    }
}

SearchForm.propTypes = {
    fetchRestaurants: PropTypes.func.isRequired,
    updateFilters: PropTypes.func.isRequired
}

export default connect(null, {fetchRestaurants, updateFilters})(SearchForm);