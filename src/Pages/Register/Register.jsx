import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet";

const Register = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const { email, username, password, image } = data;

    // console.log(email, username, password, image);
    const from = "/";
    // creating user
    createUser(email, password)
      .then((res) => {
        toast.success("registered successfully");
        navigate(from);
        updateUserProfile(username, image)
          .then(res.user.reload())
          .catch((err) => console.log(err));
      })
      .catch(() => {
        toast.error("user exist already");
      });
  };
  useEffect(() => {
    const subscription = watch(() => {
      // console.log(data);
    });
    return () => {
      subscription.unsubscribe();
    };
  }, [watch]);
  return (
    <div className=" mx-auto max-w-xl ">
      <Helmet>
        <title>Register</title>
      </Helmet>
      <div className="max-w-xl">
        <div className="w-full   my-5 bg-[#05A081] bg-opacity-5 p-8 space-y-3 rounded-xl dark:bg-gray-50 dark:text-gray-800">
          <h1 className="text-2xl font-bold text-center">Sign Up</h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate=""
            action=""
            className="space-y-6"
          >
            {/* name */}

            <div className="space-y-1 text-sm">
              <label htmlFor="username" className="block dark:text-gray-600">
                Name
              </label>
              <input
                type="text"
                name="username"
                id="username"
                {...register("username", {
                  required: true,
                  pattern: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
                })}
                placeholder="Name"
                className="w-full px-4 py-3 rounded-md focus:border-[#05A081] dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              />

              <span className="font-semibold text-red-600">
                {errors.username?.type === "required" && "Name is required"}
                {errors.username?.type === "pattern" &&
                  "Please enter a valid name"}
              </span>
            </div>

            {/* photo Url */}
            <div className="space-y-1 text-sm">
              <label htmlFor="image" className="block dark:text-gray-600">
                Photo URL
              </label>
              <input
                type="text"
                name="image"
                id="image"
                {...register("image", {
                  pattern: /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/,
                })}
                placeholder="photo URL"
                className="w-full px-4 py-3 rounded-md focus:border-[#05A081] dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              />

              <span className="font-semibold text-red-600">
                {errors.image?.type === "pattern" && "Please enter a valid URL"}
              </span>
            </div>

            {/* email */}
            <div className="space-y-1 text-sm">
              <label htmlFor="email" className="block dark:text-gray-600">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                {...register("email", {
                  required: true,
                  pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                })}
                placeholder="Email"
                className="w-full px-4 py-3 rounded-md focus:border-[#05A081] dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              />

              <span className="font-semibold text-red-600">
                {errors.email?.type === "required" && "Email is required"}
                {errors.email?.type === "pattern" &&
                  "Please enter a valid email address"}
              </span>
            </div>
            {/* password */}
            <div className="space-y-1 text-sm">
              <label htmlFor="password" className="block dark:text-gray-600">
                Password
              </label>
              <div className="flex items-center relative">
                <input
                  type={showPass ? "text" : "password"}
                  name="password"
                  id="password"
                  {...register("password", {
                    required: true,
                    pattern: /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
                  })}
                  placeholder="Password"
                  className="w-full px-4 py-3 rounded-md focus:border-[#05A081]  dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                />
                <div
                  className="absolute right-0 -translate-x-3 "
                  onClick={() => setShowPass(!showPass)}
                >
                  {showPass ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                </div>
              </div>
              <span className="font-semibold text-red-600">
                {errors.password?.type === "required" && "Password is required"}
                {errors.password?.type === "pattern" &&
                  "Password must have at least one uppercase letter, one lowercase letter, and be at least 6 characters long"}
              </span>
            </div>
            <button className="block w-full p-3 text-center rounded-lg bg-[#05A081]  text-white font-bold  dark:text-gray-50 dark:bg-violet-600">
              Register
            </button>
          </form>

          <p className="text-xs text-center sm:px-6 dark:text-gray-600">
            already have an account?
            <Link
              to="/login"
              className="underline dark:text-gray-800 mx-3 text-[#05A081] font-semibold"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
      {/* <ToastContainer></ToastContainer> */}
    </div>
  );
};

export default Register;
