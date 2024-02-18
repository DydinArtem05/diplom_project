import React from 'react'
import styles from '../../styles/AuthForms.module.css';
import { Field, reduxForm } from 'redux-form';
import main from '../../styles/App.module.css';
import { requiredField, minFieldLength, maxFieldLength, mailRequired } from '../../utils/validators/validation';
import { Input } from '../../common/FormControls/FormControls';

let Login = props => {
  const { handleSubmit } = props
  return (
    <div className={styles.auth}>
      <div className={main.wrapper}>
        <div className={styles.authForm}>
          <form onSubmit={handleSubmit}>
            <h2 className={styles.authForm_Name}>Login</h2>
            <div className={styles.formPart}>
              <label htmlFor="firstName">Email:</label>
              <Field name="email" component={Input} type="text" validate={[requiredField, mailRequired, maxFieldLength(30)]} />
            </div>
            <div className={styles.formPart}>
              <label htmlFor="lastName">Password: </label>
              <Field name="password" component={Input} type="text" validate={[requiredField, minFieldLength(8), maxFieldLength(30)]} />
            </div>
            <div className={styles.formPart}>
              <label htmlFor="email">Remember Me</label>
              <Field name="remember" component={Input} type="checkbox" />
            </div>
            <button type="submit" className={styles.formSubmitBtn}>Submit</button>
            <div className={styles.suggestionBlock}>
              Don't have an account? <a href="/register">Register</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

Login = reduxForm({
  form: 'login'
})(Login)

export default Login;