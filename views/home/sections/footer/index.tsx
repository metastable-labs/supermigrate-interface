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
        { titile: resources.github, url: 'https://github.com/metastable-labs' },
      ],
    },
    {
      title: socials.title,
      links: [
        { titile: socials.twitter, url: 'https://twitter.com/supermigrate' },
        { titile: socials.telegram, url: 'https://t.me/+8vDPDkrN_-gwZTA8' },
      ],
    },
  ];

  return (
    <footer className="w-full px-8 pb-10 lg:pb-6 pt-16 md:px-20 md:pb-12 bg-primary-3250 relative lg:min-h-[384px]">
      <div className="self-stretch flex gap-x-10 gap-y-32 flex-row items-end justify-between flex-wrap">
        <div className="flex self-stretch md:self-auto items-start gap-8">
          {extras.map((extra) => (
            <Extra key={extra.title} {...extra} />
          ))}
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
