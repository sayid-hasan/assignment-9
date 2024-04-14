import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return (
      <>
        <div className="flex justify-center">
          <span className="loading loading-spinner text-success"></span>
        </div>
      </>
    );
  }
  if (user) {
    return children;
  }
  return (
    <>
      <Navigate to="/"></Navigate>
    </>
  );
};
PrivateRoutes.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoutes;
