import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form/immutable'
import { Table, Modal, Button, Tag, Space, Layout, Menu } from 'antd';

export default class Clients extends Component {

  render() {
    return (
      <Layout.Content
        className="content"
      >
        <h1 className="content__header">Clients</h1>
      </Layout.Content>
    )
  }
}
