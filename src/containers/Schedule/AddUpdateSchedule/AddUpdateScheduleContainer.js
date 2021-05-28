import React, { Component } from 'react'
import AddUpdateScheduleForm from './AddUpdateScheduleForm';
import { connect } from 'react-redux';
import { reduxForm, reset } from 'redux-form';
import * as scheduleActions from '../../../redux/actions/schedule.actions';
class AddUpdateScheduleContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            isUpdate: false
        }
    }
    handleAddSchedule = (schedule) => {
        const {propItems} = this.props.options;
        let scheduleCalendarRef = propItems;
        console.log('schedule', schedule);
        let calendarApi = scheduleCalendarRef.getApi();
        calendarApi.addEvent(schedule);
      }
    render() {
        const { handleSubmit, pristine, reset, submitting, isUpdate } = this.props;
        
        return (
            <AddUpdateScheduleForm
                onSubmit={handleSubmit(this.handleAddSchedule)}
                pristine={pristine}
                submitting={submitting}
                reset={reset}
                isUpdate={isUpdate}
            />
        )
    }
}

const addUpdateScheduleForm = reduxForm({
    form: 'addUpdateScheduleForm',
    enableReinitialize: true,
    keepDirtyOnReinitialize: false,
    destroyOnUnmount: true
})(AddUpdateScheduleContainer);

const mapStateToProps = state => ({
    options: state.modalReducer.options,
});
const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(addUpdateScheduleForm);
