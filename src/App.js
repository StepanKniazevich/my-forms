import './App.css';
import React from 'react'
import * as yup from 'yup'
import { Formik } from 'formik'


function App() {



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
      >
        {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
          <div className={"form"}>
            <form>
              <input
                className={'input'}
                type={"text"}
                name={"name"}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
              {touched.name && errors.name && <p className={"error"}>{'Помилка'}</p>}
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
