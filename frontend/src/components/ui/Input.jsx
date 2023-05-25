import {useField} from "formik";
import PropTypes from "prop-types";

const Input = ({label, name}) => {
  const [field, meta] = useField(name);

  return (
    <>
      <label
        htmlFor={field}
        type="text"
        className="block mb-2 text-sm font-medium text-gray-600"
      >
        {label}
      </label>
      <input
        className={`block w-full p-3 rounded bg-gray-200 border hover:border-indigo-300 border-2 ${
          meta?.error ? "border-red-600" : "border-transparent"
        }`}
        value={field.value}
        onChange={field.onChange}
        name={name}
      />
      <span className="text-red-500">{meta.error ? meta.error : null}</span>
    </>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
};

export default Input;
