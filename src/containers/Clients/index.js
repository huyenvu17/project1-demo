import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form/immutable'
import { Table, Modal, Button, Tag, Space, Layout, Menu } from 'antd';

export default class Clients extends Component {

  render() {
    return (
      <Layout.Content
        className="content"
        style={{
          margin: '24px 16px',
          padding: 24,
          minHeight: 280,
        }}
      >
        <h1 className="content__header">Clients</h1>
      </Layout.Content>
    )
  }
}
