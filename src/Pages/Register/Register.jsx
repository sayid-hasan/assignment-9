import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { updateProfile } from "firebase/auth";
import auth from "../../Firebase/firebase.config";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [showPass, setShowPass] = useState(false);
  //const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const email = data.email;
    const username = data.username;
    const password = data.password;
    const photourl = data.photourl;

    // creating user

    createUser(email, password)
      .then((res) => {
        console.log(res.user);
        toast.success("Registeres successfully");
        //navigate("/login");
      })
      .catch((err) => {
        console.log(err);
        toast.error("user already exist");
        // navigate("/login");
      });

    // updating user name and profile url
  };
  useEffect(() => {
    const subscription = watch((data) => {
      // console.log(data);
    });
    return () => {
      subscription.unsubscribe();
    };
  }, [watch]);
  return (
    <div className=" mx-auto max-w-xl ">
      <div className="max-w-xl">
        <div className="w-full   my-5 bg-[#71b100] bg-opacity-5 p-8 space-y-3 rounded-xl dark:bg-gray-50 dark:text-gray-800">
          <h1 className="text-2xl font-bold text-center">Sign Up</h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate=""
            action=""
            className="space-y-6"
          >
            {/* name */}

            <div className="space-y-1 text-sm">
              <label htmlFor="name" className="block dark:text-gray-600">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                {...register("userName", {
                  required: true,
                  pattern: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
                })}
                placeholder="Name"
                className="w-full px-4 py-3 rounded-md focus:border-[#71b100] dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              />

              <span className="font-semibold text-red-600">
                {errors.userName?.type === "required" && "Name is required"}
                {errors.userName?.type === "pattern" &&
                  "Please enter a valid name"}
              </span>
            </div>

            {/* photo Url */}
            <div className="space-y-1 text-sm">
              <label htmlFor="photourl" className="block dark:text-gray-600">
                Photo URL
              </label>
              <input
                type="text"
                name="photourl"
                id="photourl"
                {...register("photourl", {
                  pattern: /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/,
                })}
                placeholder="photo URL"
                className="w-full px-4 py-3 rounded-md focus:border-[#71b100] dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              />

              <span className="font-semibold text-red-600">
                {errors.photourl?.type === "pattern" &&
                  "Please enter a valid URL"}
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
                className="w-full px-4 py-3 rounded-md focus:border-[#71b100] dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
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
                  className="w-full px-4 py-3 rounded-md focus:border-[#71b100]  dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
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
            <button className="block w-full p-3 text-center rounded-lg bg-[#71b100]  text-white font-bold  dark:text-gray-50 dark:bg-violet-600">
              Register
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
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Register;
