import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useState, forwardRef } from 'react';
import images from '~/assets/images';
import styles from './Image.module.scss';

function Image({ src, alt, className, fallback: customFallback = images.noImage, ...props }, ref) {
    // fallback ở đây là khi lỗi sẽ lấy cái này thay thế
    const [fallback, setFallback] = useState('');

    /*
        customFallback để truyền hình ảnh bị lỗi mà mình mong muốn vào
        Nếu để trống thì mặc định sẽ lấy ảnh noImage
        Rất tiện cho người nào muốn chỉ riêng chỗ này nếu ảnh lỗi sẽ hiển thị theo ý họ chứ
        không phải là ảnh mặc định (noImage)
    */
    const handleError = () => {
        setFallback(customFallback);
    };

    return (
        <img
            ref={ref}
            className={classNames(styles.wrapper, className)}
            src={fallback || src}
            alt={alt}
            {...props}
            onError={handleError}
        />
    );
}

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
    fallback: PropTypes.string,
};

export default forwardRef(Image);
