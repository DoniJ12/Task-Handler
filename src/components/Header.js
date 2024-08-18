import PropTypes from "prop-types";
import Button from "./Button";
const Header = ({ title, onAdd, showAdd }) => {
  return (
    <div>
      <h1 className="header">{title}</h1>
      <Button
        color={showAdd ? "Red" : "green"}
        text={showAdd ? "Close" : "Add"}
        onClick={onAdd}
      />
    </div>
  );
};

Header.defaultProps = {
  title: "Task Handler",
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
