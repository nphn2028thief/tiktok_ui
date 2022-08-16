import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import Image from '~/components/Image';
import Button from '~/components/Button';
import styles from './AccountPreview.module.scss';

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <Image
                    className={cx('avatar')}
                    src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1660705200&x-signature=fIhNXtBXcApFz5qRDhNuxTmQuVY%3D"
                    alt=""
                />
                <Button className={cx('btn-follow')} primary>
                    Follow
                </Button>
            </div>

            <div className={cx('body')}>
                <p className={cx('username')}>
                    <span>nhannguyenn</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Nhân Hoài Nguyễn</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>6.7M</strong>
                    <span className={cx('label')}>Followers</span>
                    <strong className={cx('value')}>432.5M</strong>
                    <span className={cx('label')}>Likes</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
