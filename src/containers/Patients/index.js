import React, { Component, useState, useEffect } from 'react'
import { Table, Tag, Space, Layout, Menu  } from 'antd';
import { connect, useDispatch, useSelector } from 'react-redux';
import * as dashboardActions from '../../redux/actions/dashboard.actions';
import * as loadingActions from '../../redux/actions/loading.actions';
import * as dashboardServices from '../../services/dashboard.services';
import { EditOutlined, DeleteOutlined, MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,  } from '@ant-design/icons';

const { Header, Sider, Content } = Layout;
// function Dashboard() {
//   const dispatch = useDispatch();
//   const [columns, setColumns] = useState([
//     {
//       title: 'Name',
//       dataIndex: 'name',
//       key: 'name',
//       render: text => <a>{text}</a>,
//     },
//     {
//       title: 'Age',
//       dataIndex: 'age',
//       key: 'age',
//     },
//     {
//       title: 'Address',
//       dataIndex: 'address',
//       key: 'address',
//     },
//     {
//       title: 'Action',
//       key: 'action',
//       render: (text, record) => (
//         <Space size="middle">
//           <a>Invite {record.name}</a>
//           <a>Delete</a>
//         </Space>
//       ),
//     },
//   ]);
//   const [data, setData] = useState([
//     {
//       key: '1',
//       name: 'John Brown',
//       age: 32,
//       address: 'New York No. 1 Lake Park',
//     },
//     {
//       key: '2',
//       name: 'Jim Green',
//       age: 42,
//       address: 'London No. 1 Lake Park',
//     },
//     {
//       key: '3',
//       name: 'Joe Black',
//       age: 32,
//       address: 'Sidney No. 1 Lake Park',
//     },
//   ]);
//   const [list, setList] = useState([]);
//   const fetchDataPosts = async () => {
//     dispatch(dashboardActions.fetchList());
//     console.log("Every post has been, getted", list);
//   };
//   useEffect(()=>{
//     //let mounted = true;
//     // dashboardServices.getDashboardList().then(res=>{
//     //   console.log(res)
//     //   if(mounted){
//     //     setList(res)
//     //   }
//     // });
//     //dispatch(dashboardActions.fetchList())
//     fetchDataPosts()
//     //return () => mounted = false;
//   },[])
  
//   return (
//     <div>
      
//       <Table columns={columns} dataSource={data} />
//     </div>
//   )
// }
// const mapStateToProps = state => ({
//     //listData: state.dashboardreducer.listData,
// });
// export default connect(
//   mapStateToProps,
//   null
// )(Dashboard);

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
    }
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

  render() {
    console.log('listData',this.props.listData)
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
          <Table columns={this.state.columns} dataSource={listData} rowKey={listItem => listItem.id}/>
          </Content>
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
