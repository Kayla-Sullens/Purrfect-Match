import { useState } from "react";
import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import { LOGIN } from "../utils/mutations";
import Auth from "../utils/auth";

const Login = () => {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <section className="section_main sign_in">
      <div className="container my-1">
        <div className="form_main">
          <form onSubmit={handleFormSubmit}>
            <h2>Login</h2>
            <div className="form_group">
              <input
                placeholder="Enter Your Email"
                name="email"
                type="email"
                id="email"
                onChange={handleChange}
              />
            </div>
            <div className="form_group">
              <input
                placeholder="Enter Your Password"
                name="password"
                type="password"
                id="pwd"
                onChange={handleChange}
              />
            </div>
            <div className="forget_pass">
              <Link to="#">Forgot Password →</Link>
            </div>
            {error ? (
              <div>
                <p className="error-text">The provided credentials are incorrect</p>
              </div>
            ) : null}
            <div className="submit_btn">
              <button type="submit">Submit</button>
            </div>
            <Link to="/signup">Go to Signup →</Link>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
