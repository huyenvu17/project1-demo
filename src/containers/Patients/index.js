import React, { Component, useState, useEffect } from 'react'
import { Table, Modal, Button, Tag, Space, Layout, Menu } from 'antd';
import { connect, useDispatch, useSelector } from 'react-redux';
import * as patientsActions from '../../redux/actions/patients.actions';
import * as loadingActions from '../../redux/actions/loading.actions';
import * as notificationActions from '../../redux/actions/notification.actions';
import * as notificationConst from '../../redux/constants/notification.const';
import * as modalActions from '../../redux/actions/modal.actions';
import * as modalConst from '../../redux/constants/modal.const';
import AddUpdatePatientContainer from './AddUpdatePatient';
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
    this.showAddPatientModal = this.onShowAddPatientModal.bind(this);
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  componentDidMount() {
    const { onFetchList } = this.props
    onFetchList();
  }

  componentWillUnmount(){
    this.props.resetPatientForm();
  }
  
  onShowAddPatientModal = () => {
    this.props.resetPatientForm();
    this.props.onShowModalAddUpdatePatient(AddUpdatePatientContainer);
  }

  handleCancel = () => {
    this.setState({ isModalVisible: false })
  }
  
  handleEditPatient = (patientId) => {
    let isEdit = true;
    this.props.initUpdatePatientForm(isEdit);
    this.props.onShowModalAddUpdatePatient(AddUpdatePatientContainer, patientId);
  }

  renderConfirmDeleteContent = (patient) => {
    return (
      <div className="delete-confirm-content">
        <h3 className="delete-confirm-title">Are you sure to delete the following patient?</h3>
        <div className="delete-confirm-items">
          <p><span>Name:</span> {patient.name}</p>
          <p><span>Species:</span> {patient.species}</p>
          <p><span>Birth date:</span> {patient.dob}</p>
          <p><span>Breed:</span> {patient.breed}</p>
          <p><span>Sex:</span> {patient.sex}</p>
          <p><span>Coat color:</span> {patient.coatColor}</p>
          <p><span>Weight:</span> {patient.weight}</p>
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
    Modal.confirm({
      title: 'Confirm',
      icon: <ExclamationCircleOutlined />,
      content: this.renderConfirmDeleteContent(patient),
      okText: 'OK',
      cancelText: 'Cancel',
      width: 550,
      className: 'modal-confirm-wrapper',
      onOk: () => this.dispatchDeletePatient(patient)
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
        <Button onClick={this.showAddPatientModal} className="btn-green"><UserAddOutlined /> Add New Patient</Button>
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
  onShowModalAddUpdatePatient: (component, props) => dispatch(modalActions.showModal(component, props)),
  onDeletePatient: (patientId) => dispatch(patientsActions.deletePatient(patientId)),
  initUpdatePatientForm: (isEdit) => dispatch(patientsActions.initUpdatePatientForm(isEdit)), 
  resetPatientForm: () => dispatch(patientsActions.resetPatientForm())
})
export default connect(mapStateToProps, mapDispatchToProps)(Patients)
