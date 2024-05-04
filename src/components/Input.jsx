import { string, oneOf } from "prop-types";
import { forwardRef } from "react";

export const Input = forwardRef(function Input({ label, type, ...rest }, ref) {
  if (type === "number") {
    return (
      <>
        {!!label && <label htmlFor={rest?.name}>{label}</label>}
        <br />
        <input {...rest} type="number" id={rest?.name} ref={ref} />
      </>
    );
  }

  return (
    <>
      {!!label && <label htmlFor={rest?.name}>{label}</label>}
      <br />
      <input {...rest} id={rest?.name} ref={ref} />
    </>
  );
});

Input.propTypes = {
  label: string,
  type: oneOf(["number", "text"]),
};
