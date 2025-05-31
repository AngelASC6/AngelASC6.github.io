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

            // Animate the main text
            const { words } = splitText(document.querySelector("h1"));
            animate(
                words,
                { opacity: [0, 1], y: [20, 0] },
                {
                    type: "spring",
                    duration: 2,
                    bounce: 0,
                    delay: stagger(0.2),
                    easing: 'ease-in-out'
                }
            );

            // Animate the subtitle after the main text, pausing at every "|"
            const { words: subtitleWords } = splitText(document.querySelector("#billboard-subtitle"));
            const baseDelay = 0.15;
            const pauseDuration = 0.8;
            let totalDelay = words.length * 0.2 + 0.2;
            const delayArr = subtitleWords.map((w, i) => {
                if (i === 0) return totalDelay;
                // Pause after every "|"
                if (subtitleWords[i - 1].textContent.trim() === "|") {
                    totalDelay += pauseDuration;
                } else {
                    totalDelay += baseDelay;
                }
                return totalDelay;
            });

            animate(
                subtitleWords,
                { opacity: [0, 1], y: [20, 0] },
                {
                    type: "spring",
                    duration: 1.5,
                    bounce: 0,
                    delay: (i) => delayArr[i],
                    easing: 'ease-in-out'
                }
            );
        });
    }, []);

    return (
        <div
            className="w-screen z-10 h-screen flex-col items-start justify-center bg-gradient-to-b from-asparagus to-snow pt-[25vh] p-10 relative font-poppins"
            ref={billboardRef}
            style={{ visibility: 'hidden' }}
        >
            <h1 className="text-5xl sm:text-7xl md:text-9xl font-light text-[#1A1A1A] tracking-wide opacity-85" id='billboard-text'>
                Hey, I'm Angel!
            </h1>
            <br />
            <br />
            <span className="text-lg sm:text-2xl md:text-3xl text-gray-800 opacity-85 font-light tracking-wide" id='billboard-subtitle'>
                Senior at RIT | Web Developer | Cloud Enthusiast
            </span>
            {/* Scroll Down Arrow */}
            <Link
                to="about"
                offset={-50}
                smooth duration={1000}
                aria-label="Scroll down to About Me section"
                className="left-1/2 bottom-8 transform -translate-x-1/2 animate-bounce hover:cursor-pointer absolute md:left-1/2 md:bottom-8 md:-translate-x-1/2 mx-auto"
                style={{ right: 0, left: 0, marginLeft: 'auto', marginRight: 'auto', width: 'fit-content' }}
            >
                <svg width="80" height="80" fill="none" stroke="#1A1A1A" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
                </svg>
            </Link>
        </div>
    );
    
}