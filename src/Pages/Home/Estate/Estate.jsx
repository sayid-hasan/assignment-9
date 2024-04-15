import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Estate = ({ estate }) => {
  const {
    image,
    estate_title,
    segment_name,
    description,
    status,
    price,
    view_property_button,
    facilities,
    id,
  } = estate;
  //console.log(estate);
  return (
    <div>
      <div className="bg-white border  border-[#05A081] border-opacity-20 p-6 rounded-md shadow-md  text-black space-y-5">
        <img
          src={image}
          alt=""
          className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <span className="block text-xs font-medium tracking-widest uppercase text-violet-400">
            Quisque
          </span>
          <h2 className="text-xl font-semibold tracking-wide">
            Nam maximus purus
          </h2>
        </div>
        <p className="text-black">
          Mauris et lorem at elit tristique dignissim et ullamcorper elit. In
          sed feugiat mi. Etiam ut lacinia dui.
        </p>

        <div>
          <Link
            to={`/${id}`}
            className="self-center px-8 py-3 font-semibold rounded bg-[#05A081] text-white"
          >
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
};

Estate.propTypes = {
  estate: PropTypes.object,
};

export default Estate;
