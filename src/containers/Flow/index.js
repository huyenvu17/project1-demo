import React, { Component,Fragment } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Modal, Button, Tag, Space, Layout, Menu, Row, Col, Input, Divider } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import PatientIcon from '../../assets/images/icons/patient-icon.svg';
import CalendarIcon from '../../assets/images/icons/calendar-icon.svg';
import DoctorIcon from '../../assets/images/icons/doctor-icon.svg';
class Task extends Component {
  render() {
    return (
      <Draggable
        draggableId={this.props.task.id}
        index={this.props.index}
      >
        {(provided, snapshot) => (
          <div
            className="taskbox"
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <div className="taskbox__status">
                new
            </div>
            <div className="taskbox__info">
              <div className="taskbox__client">Tom Hilton</div>
              <div className="taskbox__item">
                <span className="item__image"><img src={PatientIcon}/></span>
                <span className="item__title">Bella</span>
              </div>
              <div className="taskbox__item">
                <span className="item__image"><img src={CalendarIcon}/></span>
                <span className="item__title">26/05/2021</span>
              </div>
              <div className="taskbox__item">
                <span className="item__image"><img src={DoctorIcon}/></span>
                <span className="item__title">Dr. Charlie Wilson</span>
              </div>
              <div className="taskbox__note">{this.props.task.content}</div>
            </div>
            <Divider type="horizontal" />
            <div className="taskbox__buttons">
              <Button className="btn-grey">cancel</Button>
              <Button className="btn-green">check in</Button>
            </div>
          </div>
        )}
      </Draggable>
    )
  }
}
class Column extends Component {

  render() {
    const taskCount = this.props.tasks.length;
    console.log(taskCount)
    const taskCountBadgeStyle = taskCount == 0 ? 'empty' : '';
    return (
      <Fragment>
        <div className="taskboard__column">
        <div className="column__header">
          <h3 className="header__title">{this.props.column.title}</h3>
          <div className={`header__taskcount ${taskCountBadgeStyle}`} >{taskCount}</div>
        </div>
        <div>
        {taskCount !== 0 ? (
          <div className="searchbar">
          <Input.Search
            placeholder="Search clients or patients"
            enterButton="Search"
            className="searchbar__input"
            size="large"
            prefix={<SearchOutlined style={{ marginRight: 5 }} />}
            onSearch={() => this.onSearch()}
            suffix={<div></div>}
          />
        </div>
        ): (
          <div className="taskboard__emptytask">None in progressed</div>
        )}
        </div>
        <Droppable droppableId={this.props.column.id} type="ticket">
          {(provided, snapshot) => (
            <div
              className={`column__content ${snapshot.isDraggingOver ? 'is-dragging' : 'is-stable'}`}
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {this.props.tasks.map((task, index) => (
                <Task key={task.id} task={task} index={index} />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
      </Fragment>
    )
  }
}
export default class Flow extends Component {
  constructor(props){
    super(props);
    this.state = {
      tasks: {
        'task-1': { id: 'task-1', content: 'Take out the garbage' },
        'task-2': { id: 'task-2', content: 'Watch my favorite show' },
        'task-3': { id: 'task-3', content: 'Charge my phone' },
        'task-4': { id: 'task-4', content: 'Cook dinner' }
      },
      columns: {
        'awaiting': {
          id: 'awaiting',
          title: 'Awaiting',
          taskIds: ['task-1', 'task-2', 'task-3', 'task-4']
        },
        'checkedin': {
          id: 'checkedin',
          title: 'Checked In',
          taskIds: []
        },
        'inprogressed': {
          id: 'inprogressed',
          title: 'In Progressed',
          taskIds: []
        },
        'hospitalized': {
          id: 'hospitalized',
          title: 'Hospitalized',
          taskIds: []
        },
        'checkingout': {
          id: 'checkingout',
          title: 'Checking Out',
          taskIds: []
        }
      },
      columnOrder: ['awaiting', 'checkedin', 'inprogressed','hospitalized', 'checkingout']
    }
  }
  onDragEnd = result => {
    const { destination, source, draggableId } = result
    if (!destination) {
      return
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return
    }

    const start = this.state.columns[source.droppableId]
    const finish = this.state.columns[destination.droppableId]

    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds)
      newTaskIds.splice(source.index, 1)
      newTaskIds.splice(destination.index, 0, draggableId)
      const newColumn = {
        ...start,
        taskIds: newTaskIds
      }
      const newState = {
        ...this.state,
        columns: {
          ...this.state.columns,
          [newColumn.id]: newColumn
        }
      }
      this.setState(newState);
      return
    }

    // Moving tasks among lists
    const startTaskIds = Array.from(start.taskIds)
    startTaskIds.splice(source.index, 1)
    const newStart = {
      ...start,
      taskIds: startTaskIds
    }

    const finishTaskIds = Array.from(finish.taskIds)
    finishTaskIds.splice(destination.index, 0, draggableId)
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds
    }

    const newState = {
      ...this.state,
      columns: {
        ...this.state.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish
      }
    }
    this.setState(newState);
  }

  render() {
    return (
      <Layout.Content
        className="content flow"
      >
        <h1 className="content__header">Flow</h1>
        <DragDropContext onDragEnd={this.onDragEnd}>
          <div  className="flow__taskboard">
            {this.state.columnOrder.map(columnId => {
              const column = this.state.columns[columnId];
              const tasks = column.taskIds.map(taskId => this.state.tasks[taskId]);
              return (
                <Column key={column.id} column={column} tasks={tasks} />
              )
            })}
          </div>
      </DragDropContext>
      </Layout.Content>
    )
  }
}
