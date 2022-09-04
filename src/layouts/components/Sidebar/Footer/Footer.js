import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

const infos = [
    {
        id: 1,
        href: 'https://www.tiktok.com/about?lang=en',
        label: 'About',
    },
    {
        id: 2,
        href: 'https://www.tiktok.com/browse',
        label: 'Tiktok Browse',
    },
    {
        id: 3,
        href: 'https://newsroom.tiktok.com/en-us/',
        label: 'Newsroom',
    },
    {
        id: 4,
        href: 'https://www.tiktok.com/about/contact?lang=en',
        label: 'Contact',
    },
    {
        id: 5,
        href: 'https://careers.tiktok.com/',
        label: 'Careers',
    },
    {
        id: 6,
        href: 'https://www.bytedance.com/',
        label: 'ByteDance',
    },
];

const developers = [
    {
        id: 1,
        href: 'https://www.tiktok.com/forgood',
        label: 'TikTok for Good',
    },
    {
        id: 2,
        href: 'https://www.tiktok.com/business/vi?attr_medium=tt_official_site_guidance&attr_source=tt_official_site&refer=tiktok_web&tt4b_lang_redirect=1',
        label: 'Advertise',
    },
    {
        id: 3,
        href: 'https://developers.tiktok.com/?refer=tiktok_web',
        label: 'Developers',
    },
    {
        id: 4,
        href: 'https://www.tiktok.com/transparency/en/',
        label: 'Transparency',
    },
    {
        id: 5,
        href: 'https://www.tiktok.com/tiktok-rewards/eligibility/',
        label: 'TikTok Rewards',
    },
];

const terms = [
    {
        id: 1,
        href: 'https://support.tiktok.com/en',
        label: 'Help',
    },
    {
        id: 2,
        href: 'https://www.tiktok.com/safety/en/',
        label: 'Safety',
    },
    {
        id: 3,
        href: 'https://www.tiktok.com/legal/terms-of-service-row?lang=vi',
        label: 'Terms',
    },
    {
        id: 4,
        href: 'https://www.tiktok.com/legal/page/row/privacy-policy/en',
        label: 'Privacy',
    },
    {
        id: 5,
        href: 'https://www.tiktok.com/creators/creator-portal/en-us/',
        label: 'Creator Portal',
    },
    {
        id: 6,
        href: 'https://www.tiktok.com/community-guidelines?lang=en',
        label: 'Community Guidelines',
    },
];

function Footer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('info')}>
                {infos.map((info) => (
                    <Button key={info.id} href={info.href} className={cx('label')} target="_blank">
                        {info.label}
                    </Button>
                ))}
            </div>

            <div className={cx('developer')}>
                {developers.map((developer) => (
                    <Button key={developer.id} href={developer.href} className={cx('label')} target="_blank">
                        {developer.label}
                    </Button>
                ))}
            </div>

            <div className={cx('term')}>
                {terms.map((term) => (
                    <Button key={term.id} href={term.href} className={cx('label')} target="_blank">
                        {term.label}
                    </Button>
                ))}
            </div>

            <span className={cx('copyright')}>© 2022 TikTok</span>
        </div>
    );
}

export default Footer;
