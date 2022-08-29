import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

function Portal({ children, target }) {
    const [wrapper, setWrapper] = useState();

    useEffect(() => {
        let portal = document.querySelector(target);

        if (!portal) {
            portal = document.createElement('div');
            document.body.appendChild(portal);
        }

        setWrapper(portal);

        /* Cleanup */
        return () => {
            if (!target) {
                document.body.removeChild(portal);
            }
        };
    }, [target]);

    if (!wrapper) return null;

    return ReactDOM.createPortal(children, wrapper);
}

export default Portal;
