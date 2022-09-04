import classNames from 'classnames/bind';
import styles from './Discover.module.scss';

const cx = classNames.bind(styles);

function DiscoverItem({ icon, title }) {
    return (
        <div className={cx('discover-item')}>
            <span className={cx('icon')}>{icon}</span>
            <p className={cx('title')}>{title}</p>
        </div>
    );
}

export default DiscoverItem;
