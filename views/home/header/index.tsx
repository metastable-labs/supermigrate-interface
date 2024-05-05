'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import classNames from 'classnames';

import { Logo, LogoAlt, SuperMigrateLogo } from '@/public/icons';
import Action from './action';
import useScreenDetect from '@/hooks/useScreenDetect';
import useSystemFunctions from '@/hooks/useSystemFunctions';
import SMHam from '@/components/ham';
import { NavLink } from './type';
import Menu from './menu';

const navLinks: NavLink[] = [
  { name: 'About', href: '#about' },
  { name: 'Blog', href: 'https://mirror.xyz/supermigrate.eth' },
  { name: 'FAQ', href: '#faq' },
];

const LandingHeader = () => {
  const { locale } = useSystemFunctions();

  const [isTop, setIsTop] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDesktop, isTablet, isMobile } = useScreenDetect();

  let width = '100%';
  if (isDesktop && !isTop) width = '648px';
  if (isDesktop && isTop) width = '87vw';

  const { landingPage } = locale;
  const { navigation } = landingPage;

  const navLinks: NavLink[] = [
    { name: navigation.about, href: '#about' },
    { name: navigation.whitepaper, href: 'https://mirror.xyz/supermigrate.eth/' },
    { name: navigation.faq, href: '#faq' },
  ];

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setIsTop(position < 20);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="fixed w-screen z-40 flex justify-center items-center pt-3 md:pt-[33px] px-4">
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: !isTop ? 5 : 0 }}
        transition={{
          duration: 0.8,
          ease: [0.6, 0.01, -0.05, 0.9],
          type: 'spring',
          bounce: 0.3,
        }}
        className={classNames('px-[18px] py-4 md:px-[14px] md:py-[10px] relative shadow-hero-header-alt', {
          'w-full': isMobile || isTablet,
          'bg-white rounded-base border border-primary-250 md:backdrop-blur-[10px]': !isTop || isMobile || isTablet,
          'md:backdrop-blur-[5px]': isTop,
        })}>
        <motion.div
          initial={{ width: '87vw' }}
          animate={{ width }}
          transition={{
            duration: 0.8,
            ease: [0.6, 0.01, -0.05, 0.9],
            type: 'spring',
            bounce: 0.3,
          }}
          className="flex items-center justify-between w-full">
          {isTop && isDesktop && (
            <a href="#home">
              <LogoAlt />
            </a>
          )}

          {(!isTop || isMobile || isTablet) && (
            <a href="#home" className="bg-primary-3250 rounded-full pt-[10.35px] pr-[7.4px] pb-[10.2px] pl-[9.3px] flex items-center justify-center w-10 h-10">
              <Logo />
            </a>
          )}

          <div className="hidden md:flex items-center justify-between min-w-[250px]">
            {navLinks.map(({ name, href }, index) => (
              <a
                key={index}
                href={href}
                target={href.startsWith('http') ? '_blank' : '_self'}
                className={classNames('px-3 py-2 text-sm tracking-[-0.14px]', {
                  'text-primary-3400': !isTop,
                  'text-primary-650': isTop,
                })}>
                {name}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <Action />
          </div>

          <SMHam isOpen={isMenuOpen} onClick={toggleMenu} />

          <Menu menuOpen={isMenuOpen} links={navLinks} />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default LandingHeader;
