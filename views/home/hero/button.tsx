'use client';
import { SMClickAnimation } from '@/components';
import useSystemFunctions from '@/hooks/useSystemFunctions';
import Link from 'next/link';

const HeroButton = ({ onClick }: { onClick: () => void }) => {
  const { locale } = useSystemFunctions();

  const { landingPage } = locale;
  const { actionText } = landingPage.hero;
  return (
    <Link href="/migrate">
      <SMClickAnimation
        onClick={onClick}
        className="flex items-center justify-center px-[18px] py-3 rounded-base shadow-table-cta border-[0.3px] border-primary-3450 text-sm md:text-base min-w-[126px] md:min-w-[187px] transition-all duration-300 bg-white">
        {actionText}
      </SMClickAnimation>
    </Link>
  );
};

export default HeroButton;
