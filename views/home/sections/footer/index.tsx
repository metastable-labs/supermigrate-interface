'use client';

import { FooterLogo } from '@/public/icons';
import useSystemFunctions from '@/hooks/useSystemFunctions';

const Extra = ({ title, links }: { title: string; links: { titile: string; url: string }[] }) => {
  return (
    <div className="flex flex-col gap-4 items-start min-w-36">
      <h3 className="font-medium text-primary-250 text-sm">{title}</h3>

      <div className="flex flex-col gap-3 items-start self-stretch">
        {links.map((link, index) => (
          <a href={link.url} target="_blank" className="text-primary-3750 font-medium" key={index}>
            {link.titile}
          </a>
        ))}
      </div>
    </div>
  );
};

const Footer = () => {
  const { locale } = useSystemFunctions();

  const { landingPage } = locale;
  const { alert, resources, socials } = landingPage.footer;

  const extras = [
    {
      title: resources.title,
      links: [
        { titile: resources.blog, url: 'https://mirror.xyz/supermigrate.eth/' },
        { titile: resources.github, url: 'https://github.com/supermigrate' },
      ],
    },
    {
      title: socials.title,
      links: [
        { titile: socials.twitter, url: 'https://twitter.com/BaseMigrate' },
        { titile: socials.telegram, url: 'https://github.com/supermigrate' },
      ],
    },
  ];

  return (
    <footer className="w-full px-8 pb-6 pt-16 md:px-20 md:pb-12 bg-primary-3250 relative min-h-[384px]">
      <div className="self-stretch flex flex-col gap-32 md:flex-row md:items-end md:justify-between">
        <div className="flex flex-col gap-11 md:flex-row md:items-center md:justify-between ">
          <div className="flex self-stretch md:self-auto items-start gap-8">
            {extras.map((extra) => (
              <Extra key={extra.title} {...extra} />
            ))}
          </div>

          <div className="flex flex-col min-h-[96px] justify-between">
            <span className="text-sm font-medium text-white mb-10 md:mb-0">{alert}</span>

            <iframe height="136" src="https://mirror.xyz/supermigrate.eth/subscribe/embed" className="rounded-[16px] max-w-[400px] md:mt-5"></iframe>
          </div>
        </div>
        <span className="text-primary-250 text-sm md:text-base">© 2024 Metastable Labs</span>
      </div>

      <div className="absolute top-[70%] right-0 lg:flex items-center justify-center hidden w-full">
        <FooterLogo />
      </div>
    </footer>
  );
};

export default Footer;
