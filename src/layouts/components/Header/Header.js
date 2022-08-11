import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPlus,
    faEllipsisVertical,
    faLanguage,
    faCircleQuestion,
    faKeyboard,
    faUser,
    faCoins,
    faGear,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import config from '~/config';
import Button from '~/components/Button';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Menu from '~/components/Popper/Menu';
import { InboxIcon, MessageIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Search from '../Search';

const cx = classNames.bind(styles);
const MENU_ITEMS = [
    {
        id: 4,
        icon: <FontAwesomeIcon icon={faLanguage} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    id: 1,
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    id: 2,
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        id: 5,
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        id: 6,
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

const USER_MENU = [
    {
        id: 1,
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'View profile',
        to: '/feedback',
    },
    {
        id: 2,
        icon: <FontAwesomeIcon icon={faCoins} />,
        title: 'Get coins',
        to: '/feedback',
    },
    {
        id: 3,
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Settings',
        to: '/feedback',
    },
    ...MENU_ITEMS,
    {
        id: 7,
        icon: <FontAwesomeIcon icon={faSignOut} />,
        title: 'Log out',
        to: '/feedback',
        separate: true,
    },
];

function Header() {
    const currentUser = false;

    const handleMenuChange = (menuItem) => {
        console.log(menuItem);
    };

    /* Biến để kiểm tra nếu user đăng nhập thì true, chưa đăng nhập là false */

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={config.routes.home} className={cx('logo')}>
                    <img src={images.logo} alt="Tiktok" />
                </Link>

                {/* Search */}
                <Search />

                {/* 
                    Kiểm tra nếu user đã đăng nhập thì vào layout đã đăng nhập
                    Chưa thì sẽ ở layout mặc định ban đầu
                */}
                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Button className={cx('action-upload')} text icon={<FontAwesomeIcon icon={faPlus} />}>
                                Upload
                            </Button>
                            <Tippy content="Messages" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy content="Inbox" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text icon={<FontAwesomeIcon icon={faPlus} />}>
                                Upload
                            </Button>
                            <Button primary>Login</Button>
                        </>
                    )}
                    <Menu items={currentUser ? USER_MENU : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/4a231a399798a7467045d4f05da7ce3e~c5_100x100.jpeg?x-expires=1660021200&x-signature=SST7kNf12rzyizfqZXyIf%2FfbWyo%3D"
                                alt="username"
                            />
                        ) : (
                            <button className={cx('more-button')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
