import React from 'react'
import fetch from 'isomorphic-unfetch'
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import TextField from 'material-ui/TextField'

class CatForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      createdAt: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target
    const name = target.name
    this.setState({
      name: target.value,
      createdAt: Date.now()
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    const formData = {
      "name": this.state.name,
      "createdAt": this.state.createdAt
    }
    console.log(formData)
    fetch('/api/cats', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then( r => r.json() )
      .then( data => {
        console.log(data)
    })
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor='name'>
        Name 
        </label>
        <TextField
          hintText={`Cat's name`}
          name='name'
          value={this.state.name}
          onChange={this.handleChange}
        />
        <label htmlFor='createdAt'>
          Created at 
        </label>
        <input 
          name='createdAt' 
          className='date' 
          onChange={this.handleChange} 
          value={this.state.createdAt}
        />
        <CardActions>
          <FlatButton label='Submit' type='submit' />
        </CardActions>
        <style jsx>{`
          .date, label {
            display: none;
          }
        `}</style>
      </form>
    )
  }
}

export default CatForm