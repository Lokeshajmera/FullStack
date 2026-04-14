import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CustomCursor = () => {
    const [isHovered, setIsHovered] = useState(false);
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 20, stiffness: 400 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e) => {
            cursorX.set(e.clientX - 16); // Center the 32px cursor
            cursorY.set(e.clientY - 16);
        };

        const handleHoverStart = () => setIsHovered(true);
        const handleHoverEnd = () => setIsHovered(false);

        window.addEventListener('mousemove', moveCursor);

        const clickables = document.querySelectorAll('a, button, input, textarea, .cursor-pointer');
        clickables.forEach(el => {
            el.addEventListener('mouseenter', handleHoverStart);
            el.addEventListener('mouseleave', handleHoverEnd);
        });

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            clickables.forEach(el => {
                el.removeEventListener('mouseenter', handleHoverStart);
                el.removeEventListener('mouseleave', handleHoverEnd);
            });
        };
    }, []);

    return (
        <motion.div
            className="fixed top-0 left-0 pointer-events-none z-[9999]"
            style={{
                translateX: cursorXSpring,
                translateY: cursorYSpring,
                scale: isHovered ? 1.2 : 1,
            }}
        >
            {/* Cute Robot SVG */}
            <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className={`text-cyan-600 dark:text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] transition-all duration-300 ${isHovered ? 'text-cyan-700 dark:text-cyan-300' : ''}`}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                {/* Antenna */}
                <path d="M12 2v2" />
                <circle cx="12" cy="2" r="1" fill="currentColor" />

                {/* Head */}
                <rect x="5" y="4" width="14" height="12" rx="4" fill="#0f172a" stroke="currentColor" />

                {/* Eyes */}
                <motion.circle
                    cx="9" cy="10" r="1.5"
                    fill="currentColor"
                    animate={{ scaleY: isHovered ? [1, 0.1, 1] : 1 }} // Blink on hover
                    transition={{ duration: 0.2 }}
                />
                <motion.circle
                    cx="15" cy="10" r="1.5"
                    fill="currentColor"
                    animate={{ scaleY: isHovered ? [1, 0.1, 1] : 1 }} // Blink on hover
                    transition={{ duration: 0.2 }}
                />

                {/* Mouth */}
                <path d={isHovered ? "M9 14h6" : "M10 14h4"} stroke="currentColor" strokeWidth="1" />

                {/* Neck/Body Hint */}
                <path d="M9 16v2" />
                <path d="M15 16v2" />
                <path d="M7 18h10" />
            </svg>
        </motion.div>
    );
};

export default CustomCursor;
