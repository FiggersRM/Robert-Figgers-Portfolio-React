import React, { useState } from 'react';
import AboutMe from './pages/Aboutme';
import Contact from './pages/Contact';
import Resume from './pages/Resume'
import Projects from './pages/Projects';
import NavTabs from './NavTabs';

export default function ContentContainer() {

    const renderPage = () => {
        if (currentPage === 'AboutMe') {
            return <AboutMe />
        }
        if (currentPage === 'Contact') {
            return <Contact />
        }
        if (currentPage === 'Resume') {
            return <Resume />
        }
        return <Projects />
    }

}