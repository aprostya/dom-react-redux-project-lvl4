export const Button = (props) => {
  return (
    <button
      type="submit"
      className="w-full p-3 mt-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded shadow"
    >
      {props.text}
    </button>
  );
};
