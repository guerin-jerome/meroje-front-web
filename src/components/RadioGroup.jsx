import { string, bool, shape, oneOfType, arrayOf } from "prop-types";
import { forwardRef } from "react";

export const RadioGroup = forwardRef(function RadioGroup(
  { name, legend, options, ...rest },
  ref
) {
  return (
    <fieldset>
      {!!legend && <legend>{legend}</legend>}
      {options.map(({ key, label, value }) => (
        <div key={key}>
          <input
            type="radio"
            id={name}
            name={name}
            value={value}
            {...rest}
            ref={ref}
          />
          <label htmlFor={name}>{label}</label>
        </div>
      ))}
    </fieldset>
  );
});

RadioGroup.propTypes = {
  name: string.isRequired,
  legend: string,
  options: arrayOf(
    shape({
      key: string.isRequired,
      label: string.isRequired,
      value: oneOfType([string.isRequired, bool.isRequired]),
    })
  ),
};
