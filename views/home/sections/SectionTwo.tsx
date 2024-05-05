import Link from 'next/link';

const SectionTwo = () => {
  return (
    <section id="about" className="pt-[50px] lg:pt-[50px] flex flex-col items-stretch gap-12 lg:gap-16">
      <div className="flex flex-col gap-12 lg:gap-16 min-w-full">
        <h1 className="text-left text-[30px] lg:text-[44px] text-black tracking-[0.44px] px-6 lg:px-20">Everything, all in one place</h1>

        <div className="px-[30px] pb-20 lg:pb-[100px] flex flex-col items-stretch justify-center gap-12 lg:gap-16">
          <div className="p-6 lg:p-[50px] rounded-base flex flex-col justify-center items-start gap-16 lg:gap-[94px] bg-primary-3400">
            <div className="flex flex-col items-start justify-center gap-4">
              <Link href="/migrate" className="text-primary-3400 px-3.5 py-2.5 text-[16px] leading-none bg-primary-3600 rounded-lg">
                Migrate
              </Link>

              <h2 className="text-[20px] leading-[30px] lg:text-[30px] lg:leading-[39px] text-primary-3600 tracking-[-0.3px]">Deploy canonical bridged tokens</h2>

              <p className="text-[16px] leading-[24px] lg:text-[18px] lg:leading-[27px] text-primary-3450 max-w-[689px]">
                {`We're providing a straightforward process for users to deploy
                their ERC20 tokens on L2 networks that automatically makes it
                bridgable.`}
              </p>
            </div>
            <div>GIF goes here</div>
          </div>

          <div className="p-6 lg:p-[50px] rounded-base flex flex-col justify-center items-start gap-16 lg:gap-[94px] bg-primary-3450">
            <div className="flex flex-col items-start justify-center gap-4">
              <Link href="/migrate" className="text-white px-3.5 py-2.5 text-[16px] leading-none bg-primary-3400 rounded-lg">
                Migration
              </Link>

              <h2 className="text-[20px] leading-[30px] lg:text-[30px] lg:leading-[39px] text-primary-3400 tracking-[-0.3px]">{`Move tokens across L1 <> L2`}</h2>

              <p className="text-[16px] leading-[24px] lg:text-[18px] lg:leading-[27px] text-primary-3400 max-w-[599px]">
                We are making it seamless for users to transfer assets between L1 and L2 networks.
              </p>
            </div>
            <div>GIF goes here</div>
          </div>

          <div className="p-6 lg:p-[50px] rounded-base flex flex-col justify-center items-start gap-16 lg:gap-[94px] bg-primary-3250">
            <div className="flex flex-col items-start justify-center gap-4">
              <Link href="/liquidity" className="text-primary-3250 px-3.5 py-2.5 text-[16px] leading-none bg-primary-3600 rounded-lg">
                Migrate
              </Link>

              <h2 className="text-[20px] leading-[30px] lg:text-[30px] lg:leading-[39px] text-primary-3600 tracking-[-0.3px]">Deploy canonical bridged tokens</h2>

              <p className="text-[16px] leading-[24px] lg:text-[18px] lg:leading-[27px] text-primary-3450">{` Migrate your tokens across L1 <> L2 networks with ease`}</p>
            </div>
            <div>GIF goes here</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
