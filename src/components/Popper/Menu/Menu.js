import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
import Header from './Header';
import styles from './Menu.module.scss';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Menu({ children, items = [], hideOnClick = false, onChange }) {
    const [history, setHistory] = useState([{ data: items }]);
    // Lấy ra phần tử cuối
    const current = history[history.length - 1];

    const renderItems = () => {
        return current.data.map((item) => {
            const isParent = !!item.children;

            return (
                <MenuItem
                    key={item.id}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            // Push những cái mới vào sau cái cũ
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };

    const handleBack = () => {
        setHistory((prev) => prev.slice(0, prev.length - 1));
    };

    const renderResult = (attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
            <PopperWrapper className={cx('menu-popper')}>
                {
                    // Khi có trang 2, 3 thì click vào hiện ra
                    history.length > 1 && <Header title={current.title} onBack={handleBack} />
                }
                <div className={cx('menu-body')}>{renderItems()}</div>
            </PopperWrapper>
        </div>
    );

    const handleResetMenu = () => {
        setHistory((prev) => prev.slice(0, 1));
    };

    return (
        <Tippy
            interactive
            delay={[0, 500]}
            offset={[10, 10]}
            hideOnClick={hideOnClick}
            placement="bottom-end"
            render={renderResult}
            /*
                Khi hover click vào trang 2, 3, 4 đi chăng nữa thì khi thả ra
                vẫn sẽ quay về trang đầu tiên
            */
            onHide={handleResetMenu}
        >
            {children}
        </Tippy>
    );
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    hideOnClick: PropTypes.bool,
    onChange: PropTypes.func,
};

export default Menu;
