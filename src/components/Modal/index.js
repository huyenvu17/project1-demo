import React, {Component, Fragment} from 'react'
import Loader from "react-loader-spinner";
import { connect } from 'react-redux';
import { Input, Space, Modal, Button, Layout, Dropdown, Menu, Image, Divider  } from 'antd';
import * as modalActions from '../../redux/actions/modal.actions';

class ModalComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            isModalVisible: false
        }
    }
    handleCancel = () =>{
        this.props.onHideModal();
    }
    renderModalContent = (component) => {
        let ComponentItem = component;
        if(ComponentItem) {
            return (
                <Fragment>
                    <ComponentItem />
                </Fragment>
            )
        }else {
            return null
        }
        
    }
    componentDidUpdate(prevProps){
        if(this.props.isVisible !== prevProps.isVisible){
            this.setState({isModalVisible: this.props.isVisible})
        }
    }

    render() {
        const {isVisible, options: {component}} = this.props;
        return (
            <Fragment>
                <Modal 
                    title=" " 
                    footer={null} 
                    visible={this.props.isVisible} 
                    onCancel={() => this.handleCancel()} 
                    className="modal"
                    maskClosable={false}
                    >
                  {this.renderModalContent(component)}
                </Modal>
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    isVisible: state.modalReducer.isVisible,
    options: state.modalReducer.options
})
const mapDispatchToProps = dispatch => ({
    onHideModal: () => dispatch(modalActions.hideModal())
})
export default connect(mapStateToProps, mapDispatchToProps)(ModalComponent)


