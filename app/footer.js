import React from 'react';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-[#9dc9ec] text-white text-center py-0.5 font-primary leading-snug">
            <p className="text-[25px]">&copy; {new Date().getFullYear()} Created by Catherine Rodriquez | <Link className='text-[25px]' href={'https://catrodriquez.dev'}>Portfolio</Link></p>
        </footer>
    );
}