'use client';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { SMContainer } from '@/components';
import { SuperMigrateLogo } from '@/public/icons';
import React from 'react';
import { extras } from './dummy';

const Extra = ({ title, links }: { title: string; links: { titile: string; url: string }[] }) => {
  return (
    <div className="flex flex-col gap-4 items-start min-w-24">
      <h3 className="font-medium text-primary-300 text-sm">{title}</h3>

      <div className="flex flex-col gap-3 items-start self-stretch">
        {links.map((link) => (
          <a href={link.url} className="text-primary-2900 font-medium" key={link.url}>
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
    <div className="w-full pt-16 pb-12 bg-primary-2000">
      <SMContainer>
        <div className="flex flex-col gap-16">
          <div className="flex flex-col-reverse md:flex-col gap-16 w-full">
            <div className="w-full pb-16 md:px-8 px-2 flex flex-col gap-8 md:flex-row md:justify-between border-b border-primary-1350">
              <div className="flex flex-col gap-2 w-full md:w-auto">
                <h1 className="text-primary-300 font-medium text-[20px] leading-[30px]">Stay up to date</h1>
                <h2 className="text-primary-1500 text-[14px] md:text-[16px] leading-[24px]">We’ll send you a nice letter once per week. No spam.</h2>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
                <input
                  type="text"
                  className="shadow-table-cta border border-primary-1550 rounded-lg bg-white h-[44px] px-3.5 py-2.5 outline-none text-primary-3050 w-full md:w-auto"
                  placeholder="Enter your email"
                  {...register('email')}
                />

                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.9 }}
                  type="submit"
                  className="w-full md:w-[110px] h-[44px] shadow-table-cta rounded-lg border border-primary-3000 font-medium text-white bg-primary-2900 flex items-center justify-center">
                  Subscribe
                </motion.button>
              </form>
            </div>

            <div className="w-full md:px-8 px-2 flex flex-col gap-8 md:flex-row md:justify-between">
              <div className="flex flex-col md:gap-8">
                <div className="flex items-center justify-start gap-3">
                  <SuperMigrateLogo variant="dark" />
                  <h1 className="font-medium text-sm text-primary-50 tracking-[-0.14px]">Supermigrate</h1>
                </div>

                <p className="hidden md:block text-primary-1500">Migrate ERC20 Tokens to the suprechain</p>
              </div>

              <div className="flex flex-col md:flex-row self-stretch md:self-auto items-start gap-8">
                {extras.map((extra) => (
                  <Extra key={extra.title} {...extra} />
                ))}
              </div>
            </div>
          </div>

          <div className="md:px-8 px-2 pt-8 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between border-t border-primary-1350 text-primary-3050 text-[14px] md:text-[16px] leading-[24px]">
            <span>© 2024 Metastable Labs</span>

            <div className="flex items-center gap-4 ">
              <span>Terms</span>
              <span>Privacy</span>
              <span>Cookies</span>
            </div>
          </div>
        </div>
      </SMContainer>
    </div>
  );
};

export default Footer;
