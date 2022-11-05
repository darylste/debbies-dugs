import { Formik } from 'formik';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

import Button from '../../atoms/Button/Button.component';
import { initialValues, submitForm, validateForm } from './utils';

import styles from './EmailForm.module.scss';
import Spacer from '../../atoms/Spcaer/Spacer.component';

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
          // eslint-disable-next-line quotes
          toast.success('Message submitted!');
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
        <form onSubmit={handleSubmit} className={styles.form}>
          <Toaster />
          {hasError && <p>There was a problem submitting your message!</p>}
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor='firstName'>
              First name
            </label>
            <input
              className={styles.input}
              id='firstName'
              name='firstName'
              type='text'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.firstName}
            />
            {errors.firstName && touched.firstName && (
              <p className={styles.error}>{errors.firstName}</p>
            )}
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor='lastName'>
              Last name
            </label>
            <input
              className={styles.input}
              id='lastName'
              name='lastName'
              type='text'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.lastName}
            />
            {errors.lastName && touched.lastName && (
              <p className={styles.error}>{errors.lastName}</p>
            )}
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor='lastName'>
              Contact number
            </label>
            <input
              className={styles.input}
              id='contactNumber'
              name='contactNumber'
              type='text'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.contactNumber}
            />
            {errors.contactNumber && touched.contactNumber && (
              <p className={styles.error}>{errors.contactNumber}</p>
            )}
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor='lastName'>
              Subject
            </label>
            <input
              className={styles.input}
              id='subject'
              name='subject'
              type='text'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.subject}
            />
            {errors.subject && touched.subject && (
              <p className={styles.error}>{errors.subject}</p>
            )}
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor='lastName'>
              Message
            </label>
            <input
              className={styles.input}
              id='message'
              name='message'
              type='text'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.message}
            />
            {errors.message && touched.message && (
              <p className={styles.error}>{errors.message}</p>
            )}
          </div>
          <Spacer bottom='md' />
          <Button
            varient='form'
            disabled={isSubmitting || !isValid}
            type='submit'
            text={isSubmitting ? 'Submitting...' : 'Submit'}
          />
        </form>
      )}
    </Formik>
  );
};
