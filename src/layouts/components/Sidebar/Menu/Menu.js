import PropTypes from 'prop-types';

function Menu({ className, children }) {
    return <nav className={className}>{children}</nav>;
}

Menu.propTypes = { children: PropTypes.node.isRequired };

export default Menu;
