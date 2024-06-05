import PropTypes from "prop-types";

import useCounter from "../hooks/useConter";

import "./Login.css";

const Login = ({ name, email,handleSubmit, handleNameChange, handleEmailChange, disabled }) => {  
  console.log ('isdisable:', disabled)    
  
  const [counter, handleCounter] = useCounter();

  return (
    <div className="login text-center">
      <button onClick={handleCounter}>
        AddCounter
      </button>
      <p>The value of counter is now {counter} </p>
      <div className="rounded-lg bg-blue-100 w-fit px-20 py-10 mx-auto mt-[20px] flex flex-col gap-y-[10px]">
        <p className="text-xl text-blue-800 font-semibold">Login</p>
        <p>
          Do not have an account?
          <span className="ml-1 underline text-blue-800">Register</span>
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