const getActivityButtonText = (slug: string) => {
  switch (slug) {
    case 'bridge':
      return 'Bridge';
    case 'social':
      return 'Follow';
    case 'nft':
      return 'Mint';
    case 'referral':
      return 'Copy';
    case 'liquidity':
      return 'Migrate Liquidity';
    default:
      return 'Bridge';
  }
};

const getActivityButtonAction = (slug: string) => {
  switch (slug) {
    case 'bridge':
      return () => {};
    case 'social':
      return () => {};
    case 'nft':
      return () => {};
    case 'referral':
      return () => {};
    case 'liquidity':
      return () => {};
    default:
      return () => {};
  }
};

export { getActivityButtonText, getActivityButtonAction };
