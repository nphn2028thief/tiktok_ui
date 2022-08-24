import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './SuggestedAccounts.module.scss';
import AccountItem from './AccountItem';

const cx = classNames.bind(styles);

function SuggestedAccounts({ label, suggestedData = [], followedData = [], isFollowed = false, onSeeAll }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>

            {isFollowed
                ? followedData.map((followed) => (
                      <AccountItem key={followed.id} data={followed} followed={isFollowed} />
                  ))
                : suggestedData.map((suggested) => (
                      <AccountItem key={suggested.id} data={suggested} followed={isFollowed} />
                  ))}

            <p className={cx('more-btn')} onClick={onSeeAll}>
                See all
            </p>
        </div>
    );
}

SuggestedAccounts.propTypes = {
    label: PropTypes.string.isRequired,
    data: PropTypes.array,
};

export default SuggestedAccounts;
