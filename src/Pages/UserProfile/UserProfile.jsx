import { useContext, useEffect } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import { useForm } from "react-hook-form";
import logo from "../../assets/Images/user.png";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";

const UserProfile = () => {
  const { updateUserProfile, user } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const { username, image } = data;

    //console.log(username, image);
    updateUserProfile(username, image)
      .then(() => {
        toast.success(
          "profile updated succefully,please refreash to see effect"
        );
      })
      .catch((err) => console.log(err));
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
    <div>
      <Helmet>
        <title>Profile</title>
      </Helmet>
      <div className="   max-w-5xl  mx-auto my-8">
        {/* 1 */}
        <div className=" w-full flex   flex-col md:flex-row  items-center   my-5 bg-[#05A081] bg-opacity-5 p-8 space-y-3 rounded-xl dark:bg-gray-50 dark:text-gray-800">
          {/* 1 */}
          <div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate=""
              action=""
              className="space-y-6"
            >
              <h2 className="text-xl font-semibold text-center">
                Update Your Profile
              </h2>
              {/* name */}

              <div className="space-y-1 text-sm">
                <label
                  htmlFor="username"
                  className="block font-semibold text-base text-[#05A081] "
                >
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
                <label
                  htmlFor="image"
                  className="block font-semibold text-base text-[#05A081] "
                >
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
                  {errors.image?.type === "pattern" &&
                    "Please enter a valid URL"}
                </span>
              </div>

              {/* button */}
              <button className="block w-full p-3 text-center rounded-lg bg-[#05A081]  text-white font-bold  dark:text-gray-50 dark:bg-violet-600">
                Update
              </button>
            </form>
          </div>
          {/* 2 */}

          <div className="flex flex-col justify-self-center flex-grow  text-center space-y-3 p-6 dark:bg-gray-50 dark:text-gray-800">
            <div>
              {/* <h2 className="text-xl font-semibold text-center">
                Your Profile
              </h2> */}
            </div>
            <img
              src={user.photoURL || logo}
              alt=""
              className="flex-shrink-0 object-contain h-72 rounded-xl dark:bg-gray-500 aspect-square"
            />
            <div>
              <h2 className="text-xl font-semibold">{user.displayName}</h2>
              <span className="block pb-2 text-sm dark:text-gray-600">
                {user.email}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
