import { string } from "prop-types";
import { forwardRef } from "react";

export const Datepicker = forwardRef(function Datepicker(
  { label, ...rest },
  ref
) {
  return (
    <>
      {!!label && <label htmlFor={rest?.name}>{label}</label>}
      <br />
      <input
        {...rest}
        type="date"
        name={rest?.name}
        id={rest?.name}
        ref={ref}
      />
    </>
  );
});

Datepicker.propTypes = {
  label: string,
};
