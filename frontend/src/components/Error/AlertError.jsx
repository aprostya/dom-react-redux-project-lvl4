const Alert = (props) => {
  const {
    error: {message},
  } = props;

  return (
    <div
      className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-4"
      role="alert"
    >
      <strong className="font-bold">{message}</strong>
      <span className="block"> Please, try to login again later</span>
    </div>
  );
};

export default Alert;
