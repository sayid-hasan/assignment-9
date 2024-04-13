import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const [showPass, setShowPass] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    // formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  useEffect(() => {
    const subscription = watch((data) => {
      console.log(data);
    });
    return () => {
      subscription.unsubscribe();
    };
  }, [watch]);
  return (
    <div className="flex items-center flex-col ">
      <div>
        <div className="w-full max-w-md my-5 bg-[#71b100] bg-opacity-5 p-8 space-y-3 rounded-xl dark:bg-gray-50 dark:text-gray-800">
          <h1 className="text-2xl font-bold text-center">Sign Up</h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate=""
            action=""
            className="space-y-6"
          >
            <div className="space-y-1 text-sm">
              <label htmlFor="email" className="block dark:text-gray-600">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                {...register("email", { required: true })}
                placeholder="Email"
                className="w-full px-4 py-3 rounded-md focus:border-[#71b100] dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              />
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="password" className="block dark:text-gray-600">
                Password
              </label>
              <div className="flex items-center relative">
                <input
                  type={showPass ? "text" : "password"}
                  name="password"
                  id="password"
                  {...register("password", { required: true })}
                  placeholder="Password"
                  className="w-full px-4 py-3 rounded-md focus:border-[#71b100]  dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                />
                <div
                  className="absolute right-0 -translate-x-3 "
                  onClick={() => setShowPass(!showPass)}
                >
                  {showPass ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                </div>
              </div>
            </div>
            <button className="block w-full p-3 text-center rounded-lg bg-[#71b100]  text-white font-bold  dark:text-gray-50 dark:bg-violet-600">
              Sign in
            </button>
          </form>

          <p className="text-xs text-center sm:px-6 dark:text-gray-600">
            already have an account?
            <Link
              to="/login"
              className="underline dark:text-gray-800 mx-3 text-[#71b100] font-semibold"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
