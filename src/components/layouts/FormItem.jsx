import { node } from "prop-types";

export const FormItem = ({ children }) => (
  <div style={{ margin: 10, marginLeft: 0 }}>{children}</div>
);

FormItem.propTypes = {
  children: node.isRequired,
};
