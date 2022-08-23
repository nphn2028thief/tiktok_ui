import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import Image from '~/components/Image';
import Button from '~/components/Button';
import styles from './AccountPreview.module.scss';

const cx = classNames.bind(styles);

function AccountPreview({ dataPreview }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <Image className={cx('avatar')} src={dataPreview.avatar} alt={dataPreview.nickname} />
                <Button className={cx('btn-follow')} primary>
                    Follow
                </Button>
            </div>

            <div className={cx('body')}>
                <p className={cx('username')}>
                    <span>{dataPreview.nickname}</span>
                    {dataPreview.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                </p>
                <p className={cx('name')}>{`${dataPreview.first_name} ${dataPreview.last_name}`}</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>{dataPreview.followers_count}</strong>
                    <span className={cx('label')}>Followers</span>
                    <strong className={cx('value')}>{dataPreview.likes_count}</strong>
                    <span className={cx('label')}>Likes</span>
                </p>
            </div>
        </div>
    );
}

AccountPreview.propTypes = {
    dataPreview: PropTypes.object.isRequired,
};

export default AccountPreview;
