export default function FormInput({
  id,
  type,
  placeholder,
  onChange,
  // defaultValue,
}) {
  return (
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      // required
      // defaultValue={defaultValue}
      onChange={onChange}
      className="form-control"
    />
  );
}
