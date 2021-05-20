import React, { Component } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Modal, Button, Tag, Space, Layout, Menu } from 'antd';


const finalSpaceCharacters = [
  {
    id: 'awaiting',
    name: 'awaiting',
    thumb: 'sss'
  },
  {
    id: 'checkedin',
    name: 'awaiting',
    thumb: 'sss'
  },
  {
    id: 'checkedin',
    name: 'awaiting',
    thumb: 'sss'
  },
]
export default class Flow extends Component {
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
        <h1 className="content__header">Flow</h1>
        {/* <DragDropContext>
          <Droppable droppableId="characters">
          </Droppable>
        </DragDropContext> */}
      </Layout.Content>
    )
  }
}
