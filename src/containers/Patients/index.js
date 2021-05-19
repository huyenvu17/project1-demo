import React, { Component, useState, useEffect } from 'react'
import { Table, Modal, Button, Tag, Space, Layout, Menu } from 'antd';
import { connect, useDispatch, useSelector } from 'react-redux';
import * as patientsActions from '../../redux/actions/patients.actions';
import * as loadingActions from '../../redux/actions/loading.actions';
import * as notificationActions from '../../redux/actions/notification.actions';
import * as notificationConst from '../../redux/constants/notification.const';
import * as modalActions from '../../redux/actions/modal.actions';
import * as modalConst from '../../redux/constants/modal.const';
import AddNewPatient from './AddNewPatient';
import {
  EditOutlined, DeleteOutlined, MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  PlusOutlined,
  UserAddOutlined,
  PlusSquareOutlined
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
    this.props.onShowModalAddNewPatient(
      <AddNewPatient
        
      />)
  }
  handleCancel = () => {
    this.setState({ isModalVisible: false })
  }
  handleEditPatient = (patientID) => {
    console.log(patientID)
  }
  handleDeletePatient = (patientID) => {
    console.log(patientID)
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
            <a id={record.id} onClick={() => this.handleDeletePatient(record.id)}><DeleteOutlined /></a>
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
          <Table columns={columns} dataSource={listData} rowKey={listItem => listItem.id} className="table"/>
        </Content>
    )
  }
}

const mapStateToProps = state => ({
  listData: state.patientsReducer.listData
})
const mapDispatchToProps = dispatch => ({
  onFetchList: () => dispatch(patientsActions.fetchList()),
  onShowModalAddNewPatient: (component) => dispatch(modalActions.showModal(component))
})
export default connect(mapStateToProps, mapDispatchToProps)(Patients)
