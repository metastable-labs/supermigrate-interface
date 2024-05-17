type Lang = {
  landingPage: {
    navigation: {
      about: string;
      whitepaper: string;
      faq: string;
      actionText: string;
    };
    hero: {
      title: string;
      subtitle: string;
      actionText: string;
    };
    section1: {
      title: string;
      titleCont: string;
      first: {
        title: string;
        content: string;
      };
      second: {
        title: string;
        content: string;
      };
      third: {
        title: string;
        content: string;
      };
    };
    section2: {
      title: string;
      first: {
        actionText: string;
        title: string;
        content: string;
      };
      second: {
        actionText: string;
        title: string;
        content: string;
      };
      third: {
        actionText: string;
        title: string;
        content: string;
      };
    };
    testimonial: {
      title: string;
      twitterText: string;
      telegramText: string;
    };
    faq: {
      title: string;
      subtitle: string;
      supportText: string;
      seeMore: string;
      seeLess: string;
      question1: {
        question: string;
        answer: string;
      };
      question2: {
        question: string;
        answer: string;
      };
      question3: {
        question: string;
        answer: string;
      };
      question4: {
        question: string;
        answer: string;
      };
      question5: {
        question: string;
        answer: string;
      };
      question6: {
        question: string;
        answer: string;
      };
    };
    footer: {
      resources: {
        title: string;
        blog: string;
        github: string;
      };
      socials: {
        title: string;
        twitter: string;
        telegram: string;
      };
      alert: string;
      emailPlaceholder: string;
      subscribe: string;
    };
  };
  dashboard: {
    title: string;
    subtitle: string;
    announcement: string;
    welcome: {
      header: string;
      subheader: string;
      first: string;
      second: string;
      third: string;
      linkText: string;
      buttonText: string;
      alert: string;
    };
  };
  comingSoon: string;
  navigation: {
    migrate: string;
    bridge: string;
    liquidity: string;
    connect: string;
  };
  migrate: {
    title: string;
    subtitle: string;
    buttonText: string;
    connect: {
      title: string;
      subtitle: string;
      buttonText: string;
    };
  };
};

export type { Lang };
