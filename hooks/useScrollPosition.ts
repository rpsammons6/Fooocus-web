import { useState, useEffect } from 'react';

export default function useScrollPosition() {
    const [scrollPos, setScrollPos] = useState(0);

    useEffect(() => {
        const updateScrollPos = () => {
            setScrollPos(window.pageYOffset);
        };

        window.addEventListener('scroll', updateScrollPos);

        return () => {
            window.removeEventListener('scroll', updateScrollPos);
        };
    }, []);

    return scrollPos;
}