import React from 'react';

export default function SkillPill({ skill, isLink = false, href = "#" }) {
    return (
        isLink ? (
            <a href={href} className="inline-block bg-neutral-800 text-white rounded-lg px-6 py-2 m-2 text-lg hover:bg-neutral-700" target='_blank' rel='noreferrer'>
                {skill}
            </a>
        ) : (
            <div className="inline-block bg-neutral-800 text-white rounded-lg px-6 py-2 m-2 text-lg">
                {skill}
            </div>
        )
    );
}