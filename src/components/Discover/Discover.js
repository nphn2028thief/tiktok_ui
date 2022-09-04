import classNames from 'classnames/bind';

import Button from '../Button';
import styles from './Discover.module.scss';
import DiscoverItem from './DiscoverItem';
import { HashTagIcon, MusicalNoteIcon } from '../Icons';

const cx = classNames.bind(styles);

const discoverList = [
    {
        id: 1,
        icon: <HashTagIcon />,
        title: 'suthatla',
    },
    {
        id: 2,
        icon: <HashTagIcon />,
        title: 'mackedoi',
    },
    {
        id: 3,
        icon: <HashTagIcon />,
        title: 'sansangthaydoi',
    },
    {
        id: 4,
        icon: <MusicalNoteIcon />,
        title: 'Yêu Đơn Phương Là Gì (MEE Remix) - Mee Media & h0n',
    },
    {
        id: 5,
        icon: <MusicalNoteIcon />,
        title: 'Về Nghe Mẹ Ru - NSND Bach Tuyet & Hứa Kim Tuyền & 14 Casper & Hoàn',
    },
    {
        id: 6,
        icon: <MusicalNoteIcon />,
        title: 'Thiên Thần Tình yêu - RICKY STAR',
    },
    {
        id: 7,
        icon: <HashTagIcon />,
        title: '7749hieuung',
    },
    {
        id: 8,
        icon: <HashTagIcon />,
        title: 'genzlife',
    },
    {
        id: 9,
        icon: <MusicalNoteIcon />,
        title: 'Tình Đã Đầy Một Tim - Huyền Tâm Môn',
    },
    {
        id: 10,
        icon: <MusicalNoteIcon />,
        title: 'Thằng Hầu (Thái Hoàng Remix) [Short Version] - Dunghoangpham',
    },
];

function Discover() {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>Discover</p>
            <div className={cx('discover-list')}>
                {discoverList.map((item) => (
                    <DiscoverItem key={item.id} icon={item.icon} title={item.title} />
                ))}
            </div>
        </div>
    );
}

export default Discover;
