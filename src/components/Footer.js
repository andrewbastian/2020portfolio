import React from 'react';

import GithubLogoWhite from '../assets/github-logo-white.svg';
import LinkedinLogoWhite from '../assets/Linkedinlogo-white.svg';

import { Image, Link } from '@adobe/react-spectrum';

const Footer = () => {
    return (
        <>
         
            <Link>
                <a href='https://github.com/andrewbastian'>
                    <Image src={GithubLogoWhite} alt='GithubLogoWhite' objectFit='contain' maxWidth='35px' />
                </a>
            </Link>

            <Link>
                <a href='https://www.linkedin.com/in/andrew-bastian-a940101a4/'>
                    <Image src={LinkedinLogoWhite} alt='LinkedinLogoWhite' objectFit='contain' maxWidth='35px' />
                </a>
            </Link>
        </>
    );
};

export default Footer;
