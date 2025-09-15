const ErrorMessage = ({ items }) => {
  return <>{items.length === 0 && <h3>Still Hungry</h3>}</>;
};

export default ErrorMessage;
