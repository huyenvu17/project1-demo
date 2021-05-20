import React, { Component } from 'react'
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import AddUpdateNewPatientForm from './AddUpdateNewPatientForm';
import * as patientActions from '../../../redux/actions/patients.actions';
class AddUpdateNewPatientContainer extends Component {

  onSubmitAddNewPatientForm = values => {
    console.log(values)
    this.props.onAddNewPatient(values)
  }

  componentDidMount() {
    
  }

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props
    console.log('AddUpdateNewPatientContainer', this.props.patient)
    return (
      <AddUpdateNewPatientForm
        onSubmit={handleSubmit(this.onSubmitAddNewPatientForm)}
        pristine={pristine}
        submitting={submitting}
        reset={reset}
      />
    )
  }
}



const mapStateToProps = state => ({
  patientId: state.patientsReducer.patientId,
  initialValues: state.patientsReducer.patient
})

const mapDispatchToProps = dispatch => ({
  onAddNewPatient: (formData) => dispatch(patientActions.addNewPatient(formData)),
})

const addUpdateNewPatientForm = reduxForm({
  form: 'signup',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
})(AddUpdateNewPatientContainer)


export default connect(mapStateToProps, mapDispatchToProps)(addUpdateNewPatientForm);