import React, { Component } from 'react'
import { Table, Tag, Space } from 'antd';
import { connect } from 'react-redux';
import * as dashboardActions from '../../redux/actions/dashboard.actions';
class Dashboard extends Component {
    mounted = true;
    constructor(props){
        super(props);
        this.state = {
            columns: [
                {
                  title: 'Name',
                  dataIndex: 'name',
                  key: 'name',
                  render: text => <a>{text}</a>,
                },
                {
                  title: 'Age',
                  dataIndex: 'age',
                  key: 'age',
                },
                {
                  title: 'Address',
                  dataIndex: 'address',
                  key: 'address',
                },
                {
                  title: 'Action',
                  key: 'action',
                  render: (text, record) => (
                    <Space size="middle">
                      <a>Invite {record.name}</a>
                      <a>Delete</a>
                    </Space>
                  ),
                },
              ],
            data: [
                {
                  key: '1',
                  name: 'John Brown',
                  age: 32,
                  address: 'New York No. 1 Lake Park',
                },
                {
                  key: '2',
                  name: 'Jim Green',
                  age: 42,
                  address: 'London No. 1 Lake Park',
                },
                {
                  key: '3',
                  name: 'Joe Black',
                  age: 32,
                  address: 'Sidney No. 1 Lake Park',
                },
              ]
        }
    }

    conmponentDidMount(){
      this.props.onFetchList();
    }
    componentWillMount() {
      //this.props.dispatch(dashboardActions.fetchListService());
      //this.props.onFetchList();
      this.mounted = false;
    }
    render() {
      console.log(this.props.listData)
        return (
            <div>
                <Table columns={this.state.columns} dataSource={this.state.data} />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    listData: state.dashboardReducer.listData
})
const mapDispatchToProps = dispatch => ({
  onFetchList : () => dispatch(dashboardActions.fetchList())
})
export default connect(mapStateToProps,mapDispatchToProps)(Dashboard)