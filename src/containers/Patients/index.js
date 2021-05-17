import React, { Component, useState, useEffect } from 'react'
import { Table, Modal, Button, Tag, Space, Layout, Menu  } from 'antd';
import { connect, useDispatch, useSelector } from 'react-redux';
import * as dashboardActions from '../../redux/actions/dashboard.actions';
import * as loadingActions from '../../redux/actions/loading.actions';
import * as dashboardServices from '../../services/dashboard.services';
import AddNewPatient from './AddNewPatient';
import { EditOutlined, DeleteOutlined, MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined, 
  PlusOutlined,
  PlusSquareOutlined
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;

class Patients extends Component {
  mounted = true;
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        {
          title: 'No.',
          dataIndex: 'id',
          key: 'id',
          render: text => <a>{text}</a>,
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
          title: 'Type',
          dataIndex: 'type',
          key: 'type',
          // render: (text, record) => (
          //   <Space size="middle">
          //     <a>Invite {record.name}</a>
          //     <a>Delete</a>
          //   </Space>
          // ),
        },
        {
          title: 'Weight',
          dataIndex: 'weight',
          key: 'weight',
        },
        {
          render: (text, record) => (
            <Space size="middle">
              {/* <a>Invite {record.name}</a>
              <a>Delete</a> */}
              <a><EditOutlined /></a>
              <a><DeleteOutlined /></a>
            </Space>
          ),
        }
      ],
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
    onFetchList();
  }
  onShowModal = () => {
    this.setState({isModalVisible: true})
}
handleCancel = () =>{
  this.setState({isModalVisible: false})
}
  render() {
    const {listData} = this.props;
    return (
      <div>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
          
          <Button type="primary" onClick={this.showModal}>
          <PlusSquareOutlined />Add New Patient
        </Button>
        <Modal title="Basic Modal" visible={this.state.isModalVisible} onCancel={() => this.handleCancel()}>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
          <Table columns={this.state.columns} dataSource={listData} rowKey={listItem => listItem.id}/>
          </Content>
          <AddNewPatient />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  listData: state.dashboardReducer.listData
})
const mapDispatchToProps = dispatch => ({
  onFetchList: () => dispatch(dashboardActions.fetchList())
})
export default connect(mapStateToProps,mapDispatchToProps)(Patients)
