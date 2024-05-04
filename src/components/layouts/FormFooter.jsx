import { node } from "prop-types";

export const FormFooter = ({ children }) => (
  <div style={{ marginTop: 20 }}>{children}</div>
);

FormFooter.propTypes = {
  children: node.isRequired,
};
