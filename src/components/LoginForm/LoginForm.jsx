import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import css from "./LoginForm.module.css";

export default function LoginForm() {
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    dispatch(logIn(values))
      .unwrap()
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form autoComplete="off" className={css.form}>
        <div className="form-field">
          <label>
            Email
            <Field type="email" name="email"></Field>
          </label>
        </div>
        <div className="form-field">
          <label>
            Password
            <Field type="password" name="password"></Field>
          </label>
        </div>
        <button type="submit" className={css.logInBtn}>
          Log in
        </button>
      </Form>
    </Formik>
  );
}
