import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Restaurant extends Component {
    render() {
        const { id, name, price, address } = this.props.restaurant;
        return (
            <tr className="Restaurant" key={id}>
                <td>
                    <h3>{name}</h3>
                    <p>{'$'.repeat(price)}</p>
                    <p>{address}</p>
                </td>
            </tr>
        )
    }
}

Restaurant.propTypes = {
    restaurant: PropTypes.object.isRequired
}
