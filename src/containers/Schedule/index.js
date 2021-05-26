import React, { Component } from 'react'
import { Calendar } from 'antd';
import { Table, Modal, Button, Tag, Space, Layout, Menu, Row, Col } from 'antd';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from "@fullcalendar/interaction";
import { connect } from 'react-redux';
class Schedule extends Component {
  onPanelChange(value, mode) {
    console.log(value, mode);
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
              plugins={[timeGridPlugin, interactionPlugin]}
              initialView="timeGridWeek"
              headerToolbar={{
                left: 'prev,next,today',
                center: 'title',
                right: 'timeGridWeek,timeGridDay'
              }}
              allDaySlot={true}
              editable={true}
              selectable={true}
              selectMirror={true}
              dayMaxEvents={true}
              height={'90%'}
              events={[
                { title: 'event 1', date: '2021-05-26' },
                { title: 'event 2', date: '2021-05-27' }
              ]}
              select={
                (selectionInfo) => alert('selected ' + selectionInfo.startStr + ' to ' + selectionInfo.endStr)
              }
              dateClick={(info) => console.log(info.dateStr)}
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

});

export default connect(mapStateToProps, mapDispatchToProps)(Schedule)