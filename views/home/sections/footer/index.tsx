'use client';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { yupResolver } from '@hookform/resolvers/yup';
import { FooterLogo } from '@/public/icons';
import { extras } from './dummy';

const Extra = ({ title, links }: { title: string; links: { titile: string; url: string }[] }) => {
  return (
    <div className="flex flex-col gap-4 items-start min-w-36">
      <h3 className="font-medium text-primary-250 text-sm">{title}</h3>

      <div className="flex flex-col gap-3 items-start self-stretch">
        {links.map((link, index) => (
          <a href={link.url} className="text-primary-3750 font-medium" key={index}>
            {link.titile}
          </a>
        ))}
      </div>
    </div>
  );
};

const schema = yup.object().shape({
  email: yup.string().email().required(),
});

const Footer = () => {
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: { email: string }) => {
    console.log(data);
  };

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
            <span className="text-sm font-medium text-white mb-10 md:mb-0">Stay up to date</span>

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
              <input
                type="text"
                className="shadow-table-cta border border-primary-1550 rounded-base bg-white h-[44px] px-3.5 py-2.5 outline-none text-primary-3050 w-full md:w-auto"
                placeholder="Enter your email"
                {...register('email')}
              />

              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.9 }}
                type="submit"
                className="w-full md:w-[110px] h-[44px] shadow-table-cta rounded-base font-medium text-primary-3400 bg-primary-3750 flex items-center justify-center">
                Subscribe
              </motion.button>
            </form>
          </div>
        </div>
        <span className="text-primary-250 text-sm md:text-base">© 2024 Metastable Labs</span>
      </div>

      <div className="absolute top-[70%] right-0 lg:flex items-center justify-center hidden">
        <FooterLogo />
      </div>
    </footer>
  );
};

export default Footer;
