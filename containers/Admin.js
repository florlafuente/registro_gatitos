
import React from 'react'
import RestClient from '../utils/RestClient'
import { Admin, Resource, Delete } from 'admin-on-rest'
import { PostList, PostCreate, PostEdit, PostShow, PostIcon } from '../components/PostList'
import Menu from '../components/Menu'


export default () => (
    <Admin title='Gatites perdides' menu={Menu} restClient={RestClient}>
       <Resource name='cats' list={PostList} create={PostCreate} edit={PostEdit} show={PostShow} icon={PostIcon} remove={Delete} />
    </Admin>
)
