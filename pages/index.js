import React from 'react'
import ReactDOM from 'react-dom'
import fetch from 'isomorphic-unfetch'
import Head from 'next/head'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import NavBar from '../components/NavBar'
import Table from '../components/Table'
import {cyan200, green500, green700} from 'material-ui/styles/colors'


const muiTheme = getMuiTheme({
  palette: {
    primary1Color: cyan200
  }
})

const Index = ( ) => (
  <div>
    <Head>
      <title>Missing Cats Register</title>
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <link href='static/global.css' rel='stylesheet' type='text/css' />
    </Head>
    <MuiThemeProvider muiTheme={muiTheme}>
      <NavBar />
      <Table />
    </MuiThemeProvider>
  </div>
)


export default Index