import React, { Component } from 'react'
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import AddNewPatientForm from './AddNewPatientForm';
import * as patientActions from '../../../redux/actions/patients.actions';
class AddNewPatientContainer extends Component {

  onSubmitAddNewPatientForm = values => {
    console.log(values)
    this.props.onAddNewPatient(values)
  }

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props
    return (
      <AddNewPatientForm
        onSubmit={handleSubmit(this.onSubmitAddNewPatientForm)}
        pristine={pristine}
        submitting={submitting}
        reset={reset}
      />
    )
  }
}



const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
  onAddNewPatient: (formData) => dispatch(patientActions.addNewPatient(formData))
})

const addNewPatientForm = reduxForm({
  form: 'signup',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
})(AddNewPatientContainer)


export default connect(mapStateToProps, mapDispatchToProps)(addNewPatientForm);