import React from 'react'
import fetch from 'isomorphic-unfetch'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table'



/**
 * A simple table demonstrating the hierarchy of the `Table` component and its sub-components.
 */
export default class extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      cats : []
    }
  }

  componentDidMount () {
    fetch('api/cats')
      .then( r => r.json() )
      .then( data => {
        console.log(data)
        this.setState({ cats: data })
    })
  }

  render() {
    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>ID</TableHeaderColumn>
            <TableHeaderColumn>Name</TableHeaderColumn>
            <TableHeaderColumn>Created At</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
        {this.state.cats.map((cat,i)=> {
          return (
            <TableRow key={i}>
              <TableRowColumn>{cat._id}</TableRowColumn>
              <TableRowColumn>{cat.name}</TableRowColumn>
              <TableRowColumn>{cat.createdAt}</TableRowColumn>
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
    )
  }
}
  
