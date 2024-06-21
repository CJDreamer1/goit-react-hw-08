import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import css from "./RegistrationForm.module.css";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Username is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(7, "Password must be at least 7 characters")
    .required("Password is required"),
});

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values))
      // в unwrap можна вивести помилку в iziToast в alert
      .unwrap()
      .catch(() => {
        alert("Registration Error!");
      });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form autoComplete="off" className={css.form}>
        <div className="form-field">
          <label>
            Username
            <Field type="text" name="name"></Field>
          </label>
        </div>
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
            <ErrorMessage
              name="password"
              component="div"
              style={{ color: "red" }}
            />
          </label>
        </div>
        <button type="submit" className={css.logInBtn}>
          Register
        </button>
      </Form>
    </Formik>
  );
}
