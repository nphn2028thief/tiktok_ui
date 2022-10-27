import { useState, useEffect, useContext } from 'react';
import classNames from 'classnames/bind';

import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from './Menu';
import { HomeIcon, HomeActiveIcon, FollowIcon, FollowActiveIcon, LiveIcon, LiveActiveIcon } from '~/components/Icons';
import SuggestedAccounts from '~/components/SuggestedAccounts';
import * as userService from '~/services/userService';
import * as meService from '~/services/meService';
import config from '~/config';
import Button from '~/components/Button';
import { StoreContext } from '~/store';
import Discover from '~/components/Discover';
import Footer from './Footer';

const cx = classNames.bind(styles);

const INIT_PAGE = 1;
const PER_PAGE = 5;

function Sidebar() {
    const [page, setPage] = useState(INIT_PAGE);
    const [suggestedUsers, setSuggestedUsers] = useState([]);
    const [followedUsers, setFollowedUsers] = useState([]);
    const [state, dispatch] = useContext(StoreContext);

    useEffect(() => {
        userService
            .getSuggested({ page, perPage: PER_PAGE })
            .then((data) => setSuggestedUsers(data))
            .catch((err) => console.log(err));
    }, [page]);

    useEffect(() => {
        meService
            .getFollowed({ page })
            .then((data) => console.log({ data }))
            .catch((err) => console.log(err));
    }, [page]);

    const handleSeeAll = () => {};

    return (
        <aside className={cx('wrapper')}>
            <Menu className={cx('menu')}>
                <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<FollowIcon />}
                    activeIcon={<FollowActiveIcon />}
                />
                <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
            </Menu>

            {/* Nút login lớn khi chưa đăng nhập */}
            {state.currentUser ? (
                <></>
            ) : (
                <div className={cx('non-login-wrapper')}>
                    <p className={cx('non-login-text')}>Log in to follow creators, like videos, and view comments.</p>
                    <Button large outline className={cx('non-login-btn')}>
                        Log in
                    </Button>
                </div>
            )}

            {/* Danh sách tài khoản đề xuất và tài khoản đã theo dõi */}
            <SuggestedAccounts label="Suggested accounts" data={suggestedUsers} onSeeAll={handleSeeAll} />
            {state.currentUser && <SuggestedAccounts label="Following accounts" />}

            <Discover />

            <Footer />
        </aside>
    );
}

export default Sidebar;
