import React from 'react';
import { SOCIAL_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="w-full px-6 md:px-12 lg:px-16 pb-20 pt-20 text-left">
      <div className="flex flex-col items-start gap-12">
        <div>
          <h4 className="text-sm font-normal text-gray-400 mb-2 tracking-wide capitalized text-[0.7rem]">Contact</h4>
          <a 
            href={`mailto:${SOCIAL_LINKS.email}`}
            className="text-base text-white underline underline-offset-4 decoration-1 decoration-gray-600 hover:decoration-white transition-all duration-300"
          >
            {SOCIAL_LINKS.email}
          </a>
        </div>
        
        <div className="text-[0.7rem] text-gray-500 capitalized tracking-[0.1rem]">
          &copy; 2026 Jan Milligan. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;