import { Formik } from 'formik';
import { useState } from 'react';
import { initialValues, submitForm, validateForm } from './utils';

export interface IFormValues {
  firstName?: string;
  lastName?: string;
  contactNumber?: string;
  subject?: string;
  message?: string;
}

export const EmailForm = () => {
  const [hasError, setHasError] = useState(false);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={async (values, { setSubmitting }) => {
        setHasError(false);
        setSubmitting(true);
        try {
          await submitForm(values);
          console.log('Email sent');
        } catch (error) {
          setHasError(true);
        } finally {
          setSubmitting(false);
        }
      }}
      validate={validateForm}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        isSubmitting,
        isValid,
        touched,
        errors,
      }) => (
        <form onSubmit={handleSubmit}>
          {hasError && <p>There was a problem submitting your message!</p>}
          <div>
            <label htmlFor='firstName'>First name</label>
            <input
              id='firstName'
              name='firstName'
              type='text'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.firstName}
            />
            {errors.firstName && touched.firstName && <p>{errors.firstName}</p>}
          </div>
          <div>
            <label htmlFor='lastName'>Last name</label>
            <input
              id='lastName'
              name='lastName'
              type='text'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.lastName}
            />
            {errors.lastName && touched.lastName && <p>{errors.lastName}</p>}
          </div>
          <div>
            <label htmlFor='lastName'>Contact number</label>
            <input
              id='contactNumber'
              name='contactNumber'
              type='text'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.contactNumber}
            />
            {errors.contactNumber && touched.contactNumber && (
              <p>{errors.contactNumber}</p>
            )}
          </div>
          <div>
            <label htmlFor='lastName'>Subject</label>
            <input
              id='subject'
              name='subject'
              type='text'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.subject}
            />
            {errors.subject && touched.subject && <p>{errors.subject}</p>}
          </div>
          <div>
            <label htmlFor='lastName'>Message</label>
            <input
              id='message'
              name='message'
              type='text'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.message}
            />
            {errors.message && touched.message && <p>{errors.message}</p>}
          </div>
          <button disabled={isSubmitting || !isValid} type='submit'>
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      )}
    </Formik>
  );
};
