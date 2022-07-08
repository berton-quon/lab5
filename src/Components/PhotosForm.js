import React, { Component } from 'react'
import axios from 'axios'

class PhotosForm extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         id: '',
         photoTitle: ''
      }
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }
    submitHandler = (e) =>{
        e.preventDefault()
        axios.post('https://jsonplaceholder.typicode.com/photos', this.state)
        .then(response => {
            console.log(response)
        })
        .catch(error =>{
            console.log(error)
        })
    }
  render() {
    const {id, photoTitle} = this.state
    return (
      <div>
        <h1>Photos Form</h1>
        <form onSubmit={this.submitHandler}>
            <div>
                ID: <input type="text" name="id" value={id} onChange={this.changeHandler}></input>
            </div>
            <div>
                Title: <input type="text" name="photoTitle" value={photoTitle} onChange={this.changeHandler}></input>
            </div>
            <button type="submit">Submit</button>
        </form>

      </div>
    )
  }
}

export default PhotosForm