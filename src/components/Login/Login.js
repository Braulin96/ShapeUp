import "./Login.css";

const Login = () => {
  return (
    <div className="login text-center">
      <div className="rounded-lg bg-blue-100 w-fit px-20 py-10 mx-auto mt-[20px] flex flex-col gap-y-[10px]">
        <p className="text-xl text-blue-800 font-semibold">Login</p>
        <a>
          Already have an account?<span className="ml-1 underline text-blue-800">Sign in.</span>
        </a>
      </div>
    </div>
  );
}
export default Login;
