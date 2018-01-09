import React from 'react'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {cyan200, green500, green700} from 'material-ui/styles/colors'
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import TextField from 'material-ui/TextField'
import CatForm from '../components/CatForm'

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: cyan200
  }
})

const Form = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
  <Card>
    <CardTitle title="Cat Form" subtitle="Submit your lost cat information here." />
    <CatForm />
  </Card>
  </MuiThemeProvider>
);


export default Form