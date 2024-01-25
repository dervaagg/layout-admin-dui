import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi";
import { Button } from "antd";
import PropTypes from "prop-types";

const ToggleButton = ({ darkTheme, toggleTheme }) => {
    return (
        <div className="toggle-btn">
            <Button onClick={toggleTheme}>
                {darkTheme ? <HiOutlineSun className="button-sun" /> : <HiOutlineMoon className="button-moon" />}
            </Button>
        </div>
    );
};

ToggleButton.propTypes = {
    darkTheme: PropTypes.bool.isRequired,
    toggleTheme: PropTypes.func.isRequired,
};

export default ToggleButton;
