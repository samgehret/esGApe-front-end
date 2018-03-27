import React, { Component } from 'react';

class NewRestaurantForm extends Component {
    render() {
        // need a way to determine which user created the post
        return (
            <div>
                <form >
                    <label>Name</label>
                    <input onChange={this.props.handleNewRestaurantInput} type="text" name="newRestaurantName" />
                    <label>Address</label>
                    <input onChange={this.props.handleNewRestaurantInput} type="text" name="newRestaurantAddress" />
                    <label>Website</label>
                    <input onChange={this.props.handleNewRestaurantInput} type="text" name="newRestaurantWebsite" />
                    <label>Description</label>
                    <input onChange={this.props.handleNewRestaurantInput} type="text" name="newRestaurantDescription" />
                    <label>Distance</label>
                    <input onChange={this.props.handleNewRestaurantInput} type="text" name="newRestaurantDistance" />
                    <label>Food Type</label>
                    <input onChange={this.props.handleNewRestaurantInput} type="text" name="newRestaurantfoodType" />
                    <label>Price</label>
                    <input onChange={this.props.handleNewRestaurantInput} type="text" name="newRestaurantlunchPrice" />
                    <input onChange={this.props.handleNewRestaurantInput} value="submit" type="submit" />
                </form>
            </div>
        );
    }
}

export default NewRestaurantForm;