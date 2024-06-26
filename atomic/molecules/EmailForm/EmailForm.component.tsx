import { Formik } from 'formik';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import cn from 'classnames';

import Button from '../../atoms/Button/Button.component';
import { initialValues, submitForm, validateForm } from './utils';

import styles from './EmailForm.module.scss';
import Spacer from '../../atoms/Spcaer/Spacer.component';
import { useRouter } from 'next/router';

export interface IFormValues {
  firstName?: string;
  lastName?: string;
  contactNumber?: string;
  emailAddress?: string;
  message?: string;
}

export const EmailForm = () => {
  const [hasError, setHasError] = useState(false);
  const router = useRouter();

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        setHasError(false);
        setSubmitting(true);
        try {
          await submitForm(values);
          // eslint-disable-next-line quotes
          toast.success('Message submitted!');
          resetForm();
          router.push('/submitted');
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
          {hasError && (
            <p className={styles.error}>
              There was a problem submitting your message! Please try again.
            </p>
          )}
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
            <label className={styles.label} htmlFor='contactNumber'>
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
            <label className={styles.label} htmlFor='emailAddress'>
              Email Address
            </label>
            <input
              className={styles.input}
              id='emailAddress'
              name='emailAddress'
              type='text'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.emailAddress}
            />
            {errors.emailAddress && touched.emailAddress && (
              <p className={styles.error}>{errors.emailAddress}</p>
            )}
          </div>
          <div className={cn(styles.formGroup, styles.grow)}>
            <label className={styles.label} htmlFor='message'>
              Message
            </label>
            <textarea
              className={`${styles.input} ${styles.textarea}`}
              id='message'
              name='message'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.message}
              rows={7}
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
