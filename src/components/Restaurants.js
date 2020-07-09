import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Restaurant from "./Restaurant";
import PaginationButtons from './PaginationButtons';

class Restaurants extends Component {
    componentDidUpdate(){
        window.scrollTo(0, 0);
    }

    render() {
        const { restaurants } = this.props.posts;
        if(restaurants) {
            let postItems = restaurants.map(restaurant => {
                return (
                    <Restaurant restaurant={restaurant} key={restaurant.id} />
                )
            });
            return (
                <div className="Restaurants">
                    <table>
                        <tbody>
                            {postItems}
                        </tbody>
                    </table>
                    <PaginationButtons />
                </div> 
            )
        } else {
            return (
                <div className="Restaurants">
                    <table>
                        <tbody>
                            <tr><td><p>Search for food</p></td></tr>
                        </tbody>
                    </table>
                </div> 
            )
        } 
    }
}

Restaurants.propTypes = {
    posts: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    posts: state.posts.items,
});

export default connect( mapStateToProps, {} )( Restaurants );