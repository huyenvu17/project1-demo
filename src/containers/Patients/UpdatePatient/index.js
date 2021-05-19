import React, { Component } from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';
import { reduxForm, formValueSelector  } from 'redux-form';
import UpdatePatientForm from './UpdatePatientForm';
import * as patientActions from '../../../redux/actions/patients.actions';
class UpdatePatientContainer extends Component {

  onSubmitUpdatePatientForm = values => {
    console.log(values)
    this.props.onUpdatePatient(values)
  }

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props
    return (
      <UpdatePatientForm
        onSubmit={handleSubmit(this.onSubmitUpdatePatientForm)}
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
  onUpdatePatient: (formData) => dispatch(patientActions.updatePatient(formData))
})

const selector = formValueSelector('updatePatient')
const updatePatientForm = reduxForm({
  form: 'updatePatient',
  destroyOnUnmount: false,
  enableReinitialize: true
})(UpdatePatientContainer)



const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);
export default compose(withConnect)(updatePatientForm);