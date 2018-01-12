import React from 'react';
import { List, Edit, Create, Datagrid, ReferenceField, TextField, EditButton, DisabledInput, LongTextInput, ReferenceInput, SelectInput, SimpleForm, TextInput, DeleteButton } from 'admin-on-rest'

export const PostList = (props) => (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="createdAt" />
        <EditButton />
        <DeleteButton />
      </Datagrid>
    </List>
);


const PostTitle = ({ record }) => {
    return <span>Cat {record ? `"${record.name}"` : ''}</span>;
};

export const PostEdit = (props) => (
    <Edit title={<PostTitle />} {...props}>
        <SimpleForm>
            <DisabledInput label="Id" source="_id" />
            <TextInput label="Name" source="name" />
            <DisabledInput label="Created At" source="createdAt" />
        </SimpleForm>
    </Edit>
);

export const PostCreate = (props) => (
    <Create {...props}>
        <SimpleForm redirect="list">
            <TextInput source="name" />
        </SimpleForm>
    </Create>
);