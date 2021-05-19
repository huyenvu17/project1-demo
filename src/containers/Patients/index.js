import React, { Component, useState, useEffect } from 'react'
import { Table, Modal, Button, Tag, Space, Layout, Menu } from 'antd';
import { connect, useDispatch, useSelector } from 'react-redux';
import * as patientsActions from '../../redux/actions/patients.actions';
import * as loadingActions from '../../redux/actions/loading.actions';
import * as notificationActions from '../../redux/actions/notification.actions';
import * as notificationConst from '../../redux/constants/notification.const';
import * as modalActions from '../../redux/actions/modal.actions';
import * as modalConst from '../../redux/constants/modal.const';
import AddNewPatientContainer from './AddNewPatient';
import UpdatePatientContainer from './UpdatePatient';
import {
  EditOutlined, 
  DeleteOutlined, 
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  PlusOutlined,
  UserAddOutlined,
  PlusSquareOutlined,
  ExclamationCircleOutlined
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;

class Patients extends Component {
  mounted = true;
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      collapsed: false,
      isModalVisible: false
    }
    this.showModal = this.onShowModal.bind(this);
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  componentDidMount() {
    const { onFetchList } = this.props
    console.log(this.props)
    onFetchList();
  }
  onShowModal = () => {
    this.props.onShowModalAddNewPatient(AddNewPatientContainer);
  }
  handleCancel = () => {
    this.setState({ isModalVisible: false })
  }
  handleEditPatient = (patientID) => {
    console.log(patientID)
    this.props.onShowModalUpdatePatient(UpdatePatientContainer);
  }
  renderConfirmDeleteContent = (patient) => {
    return (
      <div>
        <h3>Are you sure to delete the following patient?</h3>
        <div>
          <p>Name: {patient.name}</p>
          <p>Species: {patient.species}</p>
          <p>Birth date: {patient.dob}</p>
          <p>Breed: {patient.breed}</p>
          <p>Sex: {patient.sex}</p>
          <p>Coat color: {patient.coatColor}</p>
          <p>Weight: {patient.weight}</p>
        </div>
      </div>
    )
  }
  dispatchDeletePatient = (patient) => {
     const {id} = patient;
      if(id){
        this.props.onDeletePatient(id)
      }
  }
  handleDeletePatient = (patient) => {
    console.log(patient)
    Modal.confirm({
      title: 'Confirm',
      icon: <ExclamationCircleOutlined />,
      content: this.renderConfirmDeleteContent(patient),
      okText: 'OK',
      cancelText: 'Cancel',
      width: 550,
      onOk: () => this.dispatchDeletePatient(patient)
    });
  }
  confirm = () => {
    Modal.confirm({
      title: 'Confirm',
      icon: <ExclamationCircleOutlined />,
      content: 'Bla bla ...',
      okText: 'OK',
      cancelText: 'Cancel',
    });
  }

  render() {
    const { listData } = this.props;
    const columns = [
      {
        title: 'No.',
        dataIndex: 'id',
        key: 'id',
      },
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'DOB',
        dataIndex: 'dob',
        key: 'dob',
      },
      {
        title: 'Sex',
        dataIndex: 'sex',
        key: 'sex',
      },
      {
        title: 'Species',
        dataIndex: 'species',
        key: 'species',
      },
      {
        title: 'Breed',
        dataIndex: 'breed',
        key: 'breed',
      },
      {
        title: 'Weight',
        dataIndex: 'weight',
        key: 'weight',
      },
      {
        title: 'Coat color',
        dataIndex: 'coatColor',
        key: 'coatColor',
      },
      {
        render: (text, record) => (

          <Space size="middle">
            {/* {console.log(record)} */}
            <a id={record.id} onClick={() => this.handleEditPatient(record.id)}><EditOutlined /></a>
            <a id={record.id} onClick={() => this.handleDeletePatient(record)}><DeleteOutlined /></a>
          </Space>
        ),
      }
    ]
    return (
      <Content
        className="content"
        style={{
          margin: '24px 16px',
          padding: 24,
          minHeight: 280,
        }}
      >
        <h1 className="content__header">Patients</h1>
        <Button onClick={this.showModal} className="btn-green"><UserAddOutlined /> Add New Patient</Button>
        <Table columns={columns} dataSource={listData} rowKey={listItem => listItem.id} className="table" />
      </Content>
    )
  }
}

const mapStateToProps = state => ({
  listData: state.patientsReducer.listData
})
const mapDispatchToProps = dispatch => ({
  onFetchList: () => dispatch(patientsActions.fetchList()),
  onShowModalAddNewPatient: (component) => dispatch(modalActions.showModal(component)),
  onShowModalUpdatePatient: (component) => dispatch(modalActions.showModal(component)),
  onDeletePatient: (patientId) => dispatch(patientsActions.deletePatient(patientId))
})
export default connect(mapStateToProps, mapDispatchToProps)(Patients)
