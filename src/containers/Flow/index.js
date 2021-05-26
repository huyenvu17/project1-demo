import React, { Component,Fragment } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Modal, Button, Tag, Space, Layout, Menu, Row, Col, Input, Divider } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import PatientIcon from '../../assets/images/icons/patient-icon.svg';
import CalendarIcon from '../../assets/images/icons/calendar-icon.svg';
import DoctorIcon from '../../assets/images/icons/doctor-icon.svg';
class Ticket extends Component {
  
  render() {
    const ticketInfo = this.props.ticket;
    const ticketType = ticketInfo.type;
    let ticketTypeStyle = '';
    switch(ticketType){
      case 0:
        ticketTypeStyle = 'new';
        break;
      case 1:
        ticketTypeStyle = 'emergency';
        break;
      default:
        break;
    }
    return (
      <Draggable
        draggableId={ticketInfo.id}
        index={this.props.index}
      >
        {(provided, snapshot) => (
          <div
            className="taskbox"
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <div className={`taskbox__type ${ticketTypeStyle}`}>
                {ticketTypeStyle}
            </div>
            <div className="taskbox__info">
              <div className="taskbox__client">{ticketInfo.client}</div>
              <div className="taskbox__item">
                <span className="item__image"><img src={PatientIcon}/></span>
                <span className="item__title">{ticketInfo.patient}</span>
              </div>
              <div className="taskbox__item">
                <span className="item__image"><img src={CalendarIcon}/></span>
                <span className="item__title">{ticketInfo.appointmentDate}</span>
              </div>
              <div className="taskbox__item">
                <span className="item__image"><img src={DoctorIcon}/></span>
                <span className="item__title">{ticketInfo.doctor}</span>
              </div>
              <div className="taskbox__note">{ticketInfo.note}</div>
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
class Stage extends Component {
  render() {
    const taskCount = this.props.tickets.length;
    console.log(taskCount)
    const taskCountBadgeStyle = taskCount == 0 ? 'empty' : '';
    return (
      <Fragment>
        <div className="taskboard__stage">
        <div className="stage__header">
          <h3 className="header__title">{this.props.stage.title}</h3>
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
        <Droppable droppableId={this.props.stage.id} type="ticket">
          {(provided, snapshot) => (
            <div
              className={`stage__content ${snapshot.isDraggingOver ? 'is-dragging' : 'is-stable'}`}
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {this.props.tickets.map((ticket, index) => (
                <Ticket key={ticket.id} ticket={ticket} index={index} />
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
      tickets: {
        'ticket-1': { id: 'ticket-1', client: 'Kaylee Tucker', patient: 'vitamin', appointmentDate: '29/05/2021', doctor: 'Franklin Moreno', note: 'General health check', type: 0 },
        'ticket-2': { id: 'ticket-2', client: 'Cory Little', patient: 'shiba', appointmentDate: '28/05/2021', doctor: 'Luke Prescott', note: 'Breathing issues', type: 1 },
        'ticket-3': { id: 'ticket-3', client: 'Eileen Lewis', patient: 'finny', appointmentDate: '20/05/2021', doctor: 'Andrew Price', note: 'Swelling or redness in the ear canal', type: 0 },
        'ticket-4': { id: 'ticket-4', client: 'Layla Ramirez', patient: 'kiti', appointmentDate: '10/04/2021', doctor: 'Douglas Holmes', note: 'Diarrhea (usually bloody)', type: 1 }
      },
      stages: {
        'awaiting': {
          id: 'awaiting',
          title: 'Awaiting',
          ticketItems: ['ticket-1', 'ticket-2']
        },
        'checkedin': {
          id: 'checkedin',
          title: 'Checked In',
          ticketItems: ['ticket-4']
        },
        'inprogressed': {
          id: 'inprogressed',
          title: 'In Progressed',
          ticketItems: ['ticket-3']
        },
        'hospitalized': {
          id: 'hospitalized',
          title: 'Hospitalized',
          ticketItems: []
        },
        'checkingout': {
          id: 'checkingout',
          title: 'Checking Out',
          ticketItems: []
        }
      },
      stageOrder: ['awaiting', 'checkedin', 'inprogressed','hospitalized', 'checkingout']
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

    const start = this.state.stages[source.droppableId]
    const finish = this.state.stages[destination.droppableId]

    if (start === finish) {
      const updatedTicketItems = Array.from(start.ticketItems)
      updatedTicketItems.splice(source.index, 1)
      updatedTicketItems.splice(destination.index, 0, draggableId)
      const newStage = {
        ...start,
        ticketItems: updatedTicketItems
      }
      const updatedFlow = {
        ...this.state,
        stages: {
          ...this.state.stages,
          [newStage.id]: newStage
        }
      }
      this.setState(updatedFlow);
      return
    }

    const ticketItemsStart = Array.from(start.ticketItems)
    ticketItemsStart.splice(source.index, 1)
    const newStart = {
      ...start,
      ticketItems: ticketItemsStart
    }

    const ticketItemsFinish = Array.from(finish.ticketItems)
    ticketItemsFinish.splice(destination.index, 0, draggableId)
    const newFinish = {
      ...finish,
      ticketItems: ticketItemsFinish
    }

    const updatedFlow = {
      ...this.state,
      stages: {
        ...this.state.stages,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish
      }
    }
    this.setState(updatedFlow);
  }

  render() {
    return (
      <Layout.Content
        className="content flow"
      >
        <h1 className="content__header">Flow</h1>
        <DragDropContext onDragEnd={this.onDragEnd}>
          <div  className="flow__taskboard">
            {this.state.stageOrder.map(stageId => {
              const stage = this.state.stages[stageId];
              const tickets = stage.ticketItems.map(ticketId => this.state.tickets[ticketId]);
              return (
                <Stage key={stage.id} stage={stage} tickets={tickets} />
              )
            })}
          </div>
      </DragDropContext>
      </Layout.Content>
    )
  }
}
