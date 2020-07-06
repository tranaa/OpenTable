import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchPosts } from '../actions/postActions';

class PostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: '',
            name: '',
            address: '',
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    
    onChange(e) {
        this.setState({[e.target.name]:e.target.value})
    }

    onSubmit(e) {
        e.preventDefault();
        const { city, name } = this.state;
        this.props.fetchPosts(this.state);
    }

    render() {
        return (
            <div className="PostForm">
                <h1>Find me some food</h1>
                <form onSubmit={this.onSubmit}>
                    <input placeholder="name" name="name" onChange={this.onChange} type="text" value={this.state.title} />
                    <input placeholder="city" name="city" onChange={this.onChange} type="text" value={this.state.city} />
                    <input placeholder="address" name="address" onChange={this.onChange} type="text" value={this.state.address} />
                    <button type="submit">Search</button>
                </form>
            </div>
        )
    }
}

PostForm.propTypes = {
    fetchPosts: PropTypes.func.isRequired
}

export default connect(null, {fetchPosts})(PostForm);