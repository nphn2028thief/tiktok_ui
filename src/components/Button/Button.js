import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    primary = false,
    outline = false,
    rounded = false,
    text = false,
    icon,
    disable = false,
    small = false,
    large = false,
    children,
    className,
    onClick,
    ...passProps
}) {
    let Component = 'button';
    const _props = {
        onClick,
        ...passProps,
    };

    if (disable) {
        Object.keys(_props).forEach((key) => {
            if (key.startsWith('on') && typeof _props[key] === 'function') {
                delete _props[key];
            }
        });
    }

    if (to) {
        _props.to = to;
        Component = Link;
    } else if (href) {
        _props.href = href;
        Component = 'a';
    }

    const classes = cx('wrapper', {
        [className]: className,
        primary,
        outline,
        rounded,
        text,
        disable,
        small,
        large,
    });

    return (
        <Component className={classes} {..._props}>
            {icon && <span className={cx('icon')}>{icon}</span>}
            <span className={cx('title')}>{children}</span>
        </Component>
    );
}

Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    text: PropTypes.bool,
    rounded: PropTypes.bool,
    disable: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    icon: PropTypes.node,
    onClick: PropTypes.func,
};

export default Button;
