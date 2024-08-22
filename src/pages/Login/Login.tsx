import "./Login.scss";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  // Function to handle the API call
  function callLoginApi(values:any) {
    console.log("Form values: ", values);
    
    // Mock success response
    const isSuccess = true; 

    if (isSuccess) {
      navigate("/"); 
    } else {
      navigate ("/LandingPage");
    }
  }

 
  const schema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .min(8, "Too Short! Should be at least 8 characters")
      .required("Required"),
  });

  const initialValues = {
    email: "",
    password: "",
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Welcome Back to Nirmukta</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={callLoginApi}
        validationSchema={schema}
        validateOnMount
      >
        {({
          touched,
          errors,
          isValid,
          dirty,
          resetForm,
        }) => (
          <Form className="login-form">
            <div className="form-group">
              <Field
                id="email"
                name="email"
                type="email"
                placeholder="Email Address"
                className="form-input"
              />
              {touched.email && errors.email && (
                <div className="error-message">{errors.email}</div>
              )}
            </div>
            <div className="form-group">
              <Field
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                className="form-input"
              />
              {touched.password && errors.password && (
                <div className="error-message">{errors.password}</div>
              )}
            </div>
            <div className="button-group">
              <button
                type="submit"
                disabled={!(dirty && isValid)}
                className="login-button"
              >
                Login
              </button>
              <button
                type="button"
                onClick={() => resetForm()}
                className="reset-button"
              >
                Reset
              </button>
            </div>
            <div className="extra-links">
              <Link to="/forgot-password" className="forgot-password">
                Forgot Password?
              </Link>
              <Link to="/sign-up" className="sign-up">
                Create an Account
              </Link>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Login;
