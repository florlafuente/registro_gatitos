import React from 'react'
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
const TableExampleSimple = ( {data} ) => (
  <Table>
    {console.log(data)}
    <TableHeader>
      <TableRow>
        <TableHeaderColumn>ID</TableHeaderColumn>
        <TableHeaderColumn>Name</TableHeaderColumn>
        <TableHeaderColumn>Created At</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody>
      {data.map((d,i)=> {
        return (
        <TableRow key={i}>
          <TableRowColumn>{d._id}</TableRowColumn>
          <TableRowColumn>{d.name}</TableRowColumn>
          <TableRowColumn>{d.createdAt}</TableRowColumn>
      </TableRow>
      )
      })}
    </TableBody>
  </Table>
);

export default TableExampleSimple