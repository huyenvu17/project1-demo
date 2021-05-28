import React, { Component } from 'react'
import { Calendar } from 'antd';
import { Table, Modal, Button, Tag, Space, Layout, Menu, Row, Col } from 'antd';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from "@fullcalendar/interaction";
import { connect } from 'react-redux';
import moment from 'moment';
import * as modalActions from '../../redux/actions/modal.actions';
import AddUpdateScheduleContainer from './AddUpdateSchedule/AddUpdateScheduleContainer';
class Schedule extends Component {
  onPanelChange(value, mode) {
    console.log(value, mode);
  }
  handleScheduleEvent = (selectionInfo) => {
    if(selectionInfo){
      console.log('selected ' + selectionInfo.startStr + ' to ' + selectionInfo.endStr)
    }else{
      console.log("add schedule")
      this.props.onOpenScheduleEventModal(AddUpdateScheduleContainer, this.scheduleCalendarRef);
    }
    
  }
  handleAddSchedule = (schedule) => {
    console.log('eventAdd', schedule);
    let calendarApi = scheduleCalendarRef.current.getApi();
    calendarApi.addEvent(schedule);
  }
  render() {
    return (
      <Layout.Content
        className="content schedule"
      >
        <h1 className="content__header">Schedule</h1>
        <Row style={{height: '100%'}} gutter={16}>
          <Col span={18} >
            <div className="schedule__fullcalendar">
            <FullCalendar
              ref={(ref) => this.scheduleCalendarRef = ref}
              plugins={[timeGridPlugin, interactionPlugin]}
              initialView="timeGridWeek"
              headerToolbar={{
                left: 'prev,next,myCustomButton',
                center: 'title',
                right: 'today,timeGridWeek,timeGridDay'
              }}
              allDaySlot={true}
              editable={true}
              selectable={true}
              selectMirror={true}
              unselectAuto={true}
              dayMaxEvents={true}
              height={'90%'}
              events={[
                { title: 'event 1', date: '2021-05-26' },
                { title: 'event 2', date: '2021-05-27' }
              ]}
              select={
                (selectionInfo) => this.handleScheduleEvent(selectionInfo)
              }
              //dateClick={(info) => console.log(info.dateStr)}
              eventAdd={(addInfo) => this.handleAddSchedule}
              customButtons={
                {
                  myCustomButton: {
                      text: 'Add Schedule',
                      click: () => this.handleScheduleEvent(),
                  },
              }
              }
            />
            </div>
          </Col>
          <Col span={6}>
            <Calendar fullscreen={false} onPanelChange={this.onPanelChange} />
            <div className="schedule__logs">
              <div className="logs__header">Activites Logs</div>
              <div className="logs__wrapper">
                <div className="logs__item"><span className="logs__datetime">[26-05-2020]</span> new event created by ray.watson</div>
                <div className="logs__item"><span className="logs__datetime">[26-05-2020]</span> new event created by ray.watson</div>
                <div className="logs__item"><span className="logs__datetime">[26-05-2020]</span> new event created by ray.watson</div>
                <div className="logs__item"><span className="logs__datetime">[26-05-2020]</span> new event created by ray.watson</div>
              </div>
            </div>
          </Col>
        </Row>
      </Layout.Content>
    )
  }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  onOpenScheduleEventModal: (component, options) => dispatch(modalActions.showModal(component, options))
});

export default connect(mapStateToProps, mapDispatchToProps)(Schedule)