import './App.css';
import React from 'react'
import * as yup from 'yup'
import { Formik } from 'formik'


function App() {

  const validationsSchema = yup.object().shape({

    name: yup.string().typeError("Error, should be line ").required(),

    secondName: yup.string().typeError("Error, should be line ").required(),

    password: yup.string()
      .min(8, 'too short password')
      .max(16, 'too long password')
      .required()
      .matches(/[0-9]/, 'Password can only contain number.'),

    confirmPassword: yup.string()
      .min(8, 'too short password')
      .max(16, 'too long password')
      .required()
      .matches(/[0-9]/, 'Password can only contain number.')
      .oneOf([yup.ref('password'), null], 'Passwords must match'),

    email: yup.string()
      .email('Invalid email').required('Required')

  })



  return (
    <div className="App">
      <Formik
        initialValues={{
          name: '',
          secondName: '',
          password: '',
          confirmPassword: '',
          email: '',
          confirmEmail: ''
        }}
        validateOnBlur
        onSubmit={(values) => { console.log(values) }}
        validationSchema={validationsSchema}
      >
        {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
          <div className={"form"}>
            <form>
              <label htmlFor={"name"}>{"Login: "}</label><br />
              <input
                className={'input'}
                type={"text"}
                name={"name"}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
              {touched.name && errors.name && <span className="error">{' *введіть щось'}</span>} <br />

              <label htmlFor={"email"}>{"Email: "}</label><br />
              <input
                className={'input'}
                type={"email"}
                name={"email"}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {touched.email && errors.email && <span className="error">{errors.email}</span>}
              <br />
              <label htmlFor={"password"}>{"Password: "}</label><br />
              <input
                className={'input'}
                type={"password"}
                name={"password"}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              {touched.password && errors.password && <span className="error">{errors.password}</span>}<br />
              <label htmlFor={"confirmPassword"}>{"Confirm password: "}</label><br />
              <input
                className={'input'}
                type={"password"}
                name={"confirmPassword"}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.confirmPassword}
              />
              {touched.confirmPassword && errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
              <br />
              <button
                disabled={!isValid && !dirty}
                onClick={handleSubmit}
                type={'submit'}>Відправити</button>
            </form>
          </div>
        )}
      </Formik>

    </div>
  );
}

export default App;
