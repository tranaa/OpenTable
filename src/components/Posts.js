import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';
import Pagination from "./Pagination";

class Posts extends Component {
    render() {
        const { restaurants } = this.props.posts;
        let postItems = <tbody><tr><td><p>Search for something</p></td></tr></tbody> 
        if(restaurants) {
            let temp = restaurants.map(restaurant => {
                return (
                    <tr className="Post" key={restaurant.id}>
                        <td>
                            <h3>{restaurant.name}</h3>
                            <p>{'$'.repeat(restaurant.price)}</p>
                            <p>{restaurant.address}</p>
                        </td>
                    </tr>
                    
                )
            });
            postItems = 
                <Pagination
                    items={temp}
                />
        }
        return (
            <table className="Posts">
                {postItems}
            </table>
        )
    }
}

Posts.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    newPost: PropTypes.object
}

const mapStateToProps = state => ({
    posts: state.posts.items,
    newPost: state.posts.item
});

export default connect( mapStateToProps, { fetchPosts } )( Posts );