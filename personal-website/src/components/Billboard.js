import { Link } from 'react-scroll';
import { useEffect, useRef } from 'react';
import { animate, stagger } from 'motion';
import { splitText } from 'motion-plus';

export default function Billboard(){
    const billboardRef = useRef(null);

    useEffect(() => {
        document.fonts.ready.then(() => {
            if (!billboardRef.current) return;

            billboardRef.current.style.visibility = 'visible';

            // Animate the text: each word animates in sequence
            const { words } = splitText(document.querySelector("h1"));
            animate(
                words,
                { opacity: [0, 1], y: [20, 0] },
                {
                    type: "spring",
                    duration: 2,
                    bounce: 0,
                    delay: stagger(0.2,),
                    easing: 'ease-in-out'   
                }
            );
        });
    }, []);

    return (
        <div
            className="z-10 h-screen flex-col items-start justify-center bg-gradient-to-b from-asparagus to-snow pt-[25vh] p-10 relative font-poppins"
            ref={billboardRef}
            style={{ visibility: 'hidden' }}
        >
            <h1 className="text-9xl font-light text-[#1A1A1A] tracking-wide opacity-85" id='billboard-text'>
                Hey, I'm Angel!
            </h1>
            <br />
            <span className="text-2xl text-gray-600">
            </span>
            {/* Scroll Down Arrow */}
            <Link
                to="about"
                offset={-50}
                smooth duration={1000}
                aria-label="Scroll down to About Me section"
                className="absolute left-1/2 bottom-8 transform -translate-x-1/2 animate-bounce hover:cursor-pointer"
            >
                <svg width="80" height="80" fill="none" stroke="#1A1A1A" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
                </svg>
            </Link>
        </div>
    );
    
}