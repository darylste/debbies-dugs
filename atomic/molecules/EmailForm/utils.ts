import { IFormValues } from './EmailForm.component';
import axios from 'axios';

export const initialValues = {
  firstName: '',
  lastName: '',
  contactNumber: '',
  message: '',
};

export const submitForm = async (values: IFormValues) => {
  return await axios.post('/api/sendEmail', values);
};

export const validateForm = (values: IFormValues) => {
  const ukMobileNumberRegEx = /^(\+44\s?7\d{3}|\(?07\d{3}\)?)\s?\d{3}\s?\d{3}$/;

  const errors: IFormValues = {};

  if (!values.firstName) {
    errors.firstName = 'Please enter your first name';
  }

  if (!values.lastName) {
    errors.lastName = 'Please enter your last name';
  }

  if (!values.message) {
    errors.message = 'Please enter a message';
  }

  if (!values.contactNumber) {
    errors.contactNumber = 'Please enter your contact number';
  } else if (!values.contactNumber.match(ukMobileNumberRegEx)) {
    errors.contactNumber = 'Please enter a valid phone number';
  }

  return errors;
};
