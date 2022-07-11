import axios from 'axios'
import React, { Component } from 'react'

class PhotosList extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         photos: [],
         error: ''
      }
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/photos')
        .then(response => {
            this.setState({photos: response.data})
        })
        .catch(error =>{
            this.setState({errorMessage: 'Error retrieving data'})
        })
    }
    deleteRow(id, e){
      axios.delete('https://jsonplaceholder.typicode.com/photos/${id}')
      .then(response =>{
        const photos = this.state.photos.filter(photos => photos.id !== id);
        this.setState({photos});
      })
    }
  render() {
    const {photos, errorMessage} = this.state
    return (
      <div><h1>List of Albums</h1>
          <table>
          <tr><th id="idColumn">ID</th><th id="titleColumn">Title</th><th id="thumbnailColumn">Thumbnail</th><th id="deleteColumn">Delete</th></tr>
          </table>
  
            {/* <td> */}
              {
                 photos.map(photos => <table key = {(photos.id)}>
                  <td id="idColumn">{photos.id}</td>
                  <td id="titleColumn">{photos.title}</td>
                  <td id="thumbnailColumn"><img src={photos.thumbnailUrl}></img></td>
                  <td id="deleteColumn"><button onClick ={(e) => this.deleteRow(photos.id, e)}>Delete</button></td>
                  </table>)
              }
            {/* </td>
            <td>
              {
                  photos.map(photos => <div key = {(photos.id)}>{photos.title}</div>)
              }
            </td>
            <td>
              {
                  photos.map(photos => <div key = {(photos.id)}><img src={photos.thumbnailUrl}></img></div>)
              }
            </td>
            <td>
              {
                  photos.map(photos => <div key = {(photos.id)}><button onClick ={(e) => this.deleteRow(photos.id, e)}>Delete</button></div>)
              }
            </td> */}
        {
            errorMessage ? <div>{errorMessage}</div> : null
        }
      </div>
    )
  }
}

export default PhotosList