import React, { Component } from 'react';

class NewLunchSpotForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newLunchSpotName: '',
            newLunchSpotAddress: '',
            newLunchSpotDescription:'',
            newLunchSpotCuisine:'',
            newLunchSpotDistance:'',
            newLunchSpotPrice:''
            
        }
        this.handleNewLunchSpotInput = this.handleNewLunchSpotInput.bind(this)
    }

    handleNewLunchSpotInput(e) {
        e.preventDefault()
        this.setState({
          [e.target.name]: e.target.value
        })
        // axios.post('http://localhost:3002/lunchspots', )
      }

    render() {
        // need a way to determine which user created the post
        return (
            <div>
                <form >
                    <label>Name</label>
                    <input onChange={this.props.handleNewLunchSpotInput} type="text" name="newLunchSpotName" />
                    <label>Address</label>
                    <input onChange={this.props.handleNewLunchSpotInput} type="text" name="newLunchSpotAddress" />
                    <label>Website</label>
                    <input onChange={this.props.handleNewLunchSpotInput} type="text" name="newLunchSpotWebsite" />
                    <label>Description</label>
                    <input onChange={this.props.handleNewLunchSpotInput} type="text" name="newLunchSpotDescription" />
                    <label>Distance</label>
                    <input onChange={this.props.handleNewLunchSpotInput} type="text" name="newLunchSpotDistance" />
                    <label>Food Type</label>
                    <input onChange={this.props.handleNewLunchSpotInput} type="text" name="newLunchSpotfoodType" />
                    <label>Price</label>
                    <input onChange={this.props.handleNewLunchSpotInput} type="text" name="newLunchSpotlunchPrice" />
                    <input onChange={this.props.handleNewLunchSpotInput} value="submit" type="submit" />
                </form>
            </div>
        );
    }
}

export default NewLunchSpotForm;