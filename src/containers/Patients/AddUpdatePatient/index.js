import React, { Component } from 'react'
import { connect } from 'react-redux';
import { reduxForm, reset } from 'redux-form';
import AddUpdatePatientForm from './AddUpdatePatientForm';
import * as patientsActions from '../../../redux/actions/patients.actions';

class AddUpdatePatientContainer extends Component {

  onHandleSubmitPatientForm = (values) => {
    console.log(values)
    const { isUpdate, patientId } = this.props;
    if(!isUpdate){
      this.props.onAddNewPatient(values)
    }
    else {
      console.log('this.props.patientId)', isUpdate)
      let updatePatientValues = {isUpdate, ...values }
      this.props.onUpdatePatient(updatePatientValues)
    }
  }


  componentDidMount() {
    const {propItems} = this.props.options;
    const {isUpdate} = this.props;
    if(isUpdate && propItems != null){
      this.props.onFetchPatientDetail(propItems)
    }

  }

  componentDidUpdate(prevProps) {
    const {propItems} = this.props.options;
    const {isUpdate} = this.props;
    //console.log(propItems)
    //console.log('componentDidUpdate1', prevProps.options.propItems, propItems)
    if(prevProps.options.propItems !== propItems ) {
      if(isUpdate && propItems != null) {
        this.props.onFetchPatientDetail(propItems)
      }
    }
  }

  render() {
    const { handleSubmit, pristine, reset, submitting, isUpdate } = this.props
    //console.log('AddUpdatePatientContainer', this.props.patient[0])
    return (
      <AddUpdatePatientForm
        onSubmit={handleSubmit(this.onHandleSubmitPatientForm)}
        pristine={pristine}
        submitting={submitting}
        reset={reset}
        isUpdate={isUpdate}
      />
    )
  }
}


const addUpdatePatientForm = reduxForm({
  form: 'addUpdatePatientForm',
  enableReinitialize: true,
  keepDirtyOnReinitialize : true,
  destroyOnUnmount: true
})(AddUpdatePatientContainer)


const mapStateToProps = state => {
  const patientItem = state.patientsReducer.patient[0];
  return {
    options: state.modalReducer.options,
    patientId: state.patientsReducer.patientId,
    patient: state.patientsReducer.patient,
    initialValues: state.patientsReducer.isUpdate ? patientItem : {},
    isUpdate: state.patientsReducer.isUpdate
  } 
}

const mapDispatchToProps = dispatch => ({
  onAddNewPatient: (formData) => dispatch(patientsActions.addNewPatient(formData)),
  onUpdatePatient: (formData) => dispatch(patientsActions.updatePatient(formData)),
  onFetchPatientDetail: (patientId) => dispatch(patientsActions.fetchPatientDetail(patientId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(addUpdatePatientForm);