
import React from 'react'
import { Admin, Resource } from 'admin-on-rest'
import { PostList } from '../components/PostList'
import RestClient from '../utils/RestClient'

export default () => (
    <Admin restClient={RestClient}>
      <Resource name='cats' list={PostList} />
    </Admin>
)
