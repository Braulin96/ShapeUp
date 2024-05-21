import PropTypes from "prop-types";

import "./Login.css";

const Login = ({ name, email,handleSubmit, handleNameChange, handleEmailChange, disabled }) => {  
  console.log ('isdisable:', disabled)     
  return (
    <div className="login text-center">
      <div className="rounded-lg bg-blue-100 w-fit px-20 py-10 mx-auto mt-[20px] flex flex-col gap-y-[10px]">
        <p className="text-xl text-blue-800 font-semibold">Login</p>
        <p>
          Already have an account?
          <span className="ml-1 underline text-blue-800">Sign in.</span>
        </p>
        <div className="mt-2">
          <form onSubmit={handleSubmit} className="flex flex-col gap-y-4">
            <input
              name="name"
              placeholder="Insert your name"
              value={name}
              onChange={handleNameChange}
              className="border-blue-500 border-2 p-1 rounded-lg w-full overflow-hidden text-ellipsis"
            />
            <input
              name="email"
              placeholder="Insert your email"
              value={email}
              onChange={handleEmailChange}
              className="border-blue-500 border-2 p-1 rounded-lg w-full overflow-hidden text-ellipsis"
            />
            <button
              type="submit"
              className={`rounded-full bg-blue-800 text-white font-bold w-full py-1.5 transition-all duration-1000 ${disabled ? 'bg-opacity-30' : 'bg-opacity-100'}`}
              disabled={disabled}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  handleNameChange: PropTypes.func,
  handleEmailChange: PropTypes.func,
  disabled: PropTypes.bool.isRequired,
};

export default Login;