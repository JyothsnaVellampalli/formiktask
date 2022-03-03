import React from 'react';

import { useFormik } from 'formik';
import * as Yup from 'yup';

const Yupformik = () => {

    const formik = useFormik({
      initialValues: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
      },
      validationSchema: Yup.object({
        firstName: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
        lastName: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
        email: Yup.string().email('Invalid email address').required('Required'),
        phone: Yup.string().max(10,"Must be 10 digits").required('Required'),
      }),
      onSubmit: values => {
        alert(JSON.stringify(values, null, 2));
      },
    });
    return <>
        <h2> Using Yup</h2>

      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
        />
        {formik.touched.firstName && formik.errors.firstName ? (
          <div style={{color:"red", fontSize:"large"}}>{formik.errors.firstName}</div>
        ) : null}
        <br></br>
        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lastName}
        />
        {formik.touched.lastName && formik.errors.lastName ? (
          <div style={{color:"red", fontSize:"large"}}>{formik.errors.lastName}</div>
        ) : null}
        <br></br>
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div style={{color:"red", fontSize:"large"}}>{formik.errors.email}</div>
        ) : null}
        <br></br>

        <label htmlFor="phone">Phone</label>
        <input
          id="phone"
          name="phone"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.phone}
        />
        {formik.touched.phone && formik.errors.phone ? (
          <div style={{color:"red", fontSize:"large"}}>{formik.errors.phone}</div>
        ) : null}
        <br></br>
        <button type="submit">Submit</button>
      </form>
      </>
  };

export default Yupformik;
