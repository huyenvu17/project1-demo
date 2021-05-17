import React, {Component, Fragment} from 'react'
import Loader from "react-loader-spinner";
import { connect } from 'react-redux';
import { Input, Space, Modal, Button, Layout, Dropdown, Menu, Image, Divider  } from 'antd';
class Modal extends Component {
    constructor(props){
        super(props);
        this.state = {
            isModalVisible: false
        }
    }
    handleCancel = () =>{
        this.setState({isModalVisible: false})
    }

    render() {
        const {isLoading} = this.props;
        return (
            <Fragment>
                <Modal title="Basic Modal" visible={this.state.isModalVisible} onCancel={() => this.handleCancel()}>
                  <p>Some contents...</p>
                  <p>Some contents...</p>
                  <p>Some contents...</p>
                </Modal>
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    isLoading: state.loadingReducer.isLoading
})

export default connect(null, null)(Modal)


