import { useState, useEffect } from 'react';
import '../allVariables.scss';
import './Skills.scss';

// You might not need to change anything above, just ensure proper import paths.

export default function Skills() {
    const [reduceMotion, setReduceMotion] = useState<boolean>(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        setReduceMotion(mediaQuery.matches);

        const handleChange = (e: MediaQueryListEvent) => {
            setReduceMotion(e.matches);
        };

        // For broad compatibility, use addListener and removeListener
        mediaQuery.addListener(handleChange);
        return () => mediaQuery.removeListener(handleChange);
    }, []);

    const skills: string[] = [
        "C++ Basics", "HTML", "CSS", "SCSS", "JavaScript", "TypeScript",
        "Bootstrap", "React", "SQL", "PostgreSQL", "pgAdmin 4", "VSCode"
    ];

    const aspirations: string[] = [
        "GraphQL", "C++ Advanced", "Assembly", "Python", "Rust", "Kotlin",
        "C#", ".NET", "Golang", "Ruby on rails", "Svelve", "and more..."
    ];

    // Explicitly typing the return type of this function isn't strictly necessary,
    // but it can be helpful for more complex logic or larger applications.
    const duplicateItems = (items: string[]): string[] => reduceMotion ? items : [...items, ...items];

    return (
        <>
        <div className="section-skills">
            <h1 className="gold">Skills and technologies: </h1>
            <div className='scroller' data-speed="fast" data-animated="true">
                <ul className="tag-list scroller__inner text-white">
                    {duplicateItems(skills).map((skill, index) => (
                        <li key={index} aria-hidden={index >= skills.length ? "true" : undefined}>{skill}</li>
                    ))}
                </ul>
            </div>
            <h2 className='gold'>Future aspirations to learn more: </h2>
            <div className='scroller' data-direction='right' data-speed='slow' data-animated="true">
                <ul className="tag-list scroller__inner text-white">
                    {duplicateItems(aspirations).map((aspiration, index) => (
                        <li key={index} aria-hidden={index >= aspirations.length ? "true" : undefined}>{aspiration}</li>
                    ))}
                </ul>
            </div>
        </div>
        </>
    );
}
