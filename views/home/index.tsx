'use client';
import { useEffect } from 'react';
import useUserActions from '@/application/user/actions';
import { LangParamProp } from '@/config/internationalization/i18n';
import HeroSection from './hero';
import SectionOne from './sections/SectionOne';
import SectionTwo from './sections/SectionTwo';
import FAQs from './sections/faqs';
import LandingHeader from './header';
import Testimonials from './sections/testimonials';
import Footer from './sections/footer';
import { SMAnnouncement } from '@/components';

export default function HomeView({ lang }: LangParamProp) {
  const { getUser } = useUserActions();

  useEffect(() => {
    getUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="bg-white h-full w-full">
      <SMAnnouncement comment="Please make sure you’re on supermigrate.xyz. Beware of scammers" show variant="top" />

      <LandingHeader />
      <HeroSection />

      {/* <LandingNav lang={lang} /> */}
      <SectionOne />
      <SectionTwo />
      <Testimonials />
      <FAQs />
      {/* < */}

      <Footer />
    </div>
  );
}
