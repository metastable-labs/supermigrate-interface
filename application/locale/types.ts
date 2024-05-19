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
  components: {
    table: {
      headers: {
        first: { label: string };
        second: {
          label: string;
          mobileLabel: string;
          secondaryLabel: string;
        };
        third: { label: string; secondaryLabel: string };
        fourth: { label: string };
      };
      empty: {
        title: {
          primary: string;
          secondary: string;
          default: string;
        };
        subtitle: {
          primary: string;
          secondary: string;
          default: string;
        };
        buttonText: {
          primary: string;
          secondary: string;
          default: string;
        };
      };
      body: {
        status: {
          success: string;
          pending: string;
          failed: string;
        };
        contract: {
          text: string;
        };
        action: {
          primary: string;
          secondary: string;
        };
      };
      footer: {
        previous: string;
        next: string;
        page: string;
      };
    };
    input: {
      required: string;
    };
    fileInput: {
      title: string;
      subtitle: string;
      buttonText: string;
      completed: string;
      required: string;
    };
  };
  newMigration: {
    navigation: {
      first: string;
      second: {
        primary: string;
        secondary: string;
      };
    };
    header: {
      first: string;
      second: string;
    };
    step1: {
      addressInput: {
        label: string;
        placeholder: string;
      };
      nameInput: {
        label: string;
        placeholder: string;
      };
      symbolInput: {
        label: string;
        placeholder: string;
      };
      decimalInput: {
        label: string;
        placeholder: string;
      };
      descriptionInput: {
        label: string;
        placeholder: string;
      };
      tokenInfo: {
        name: string;
        symbol: string;
        decimals: string;
      };
      buttonText: string;
      override: string;
    };
    step2: {
      imageInput: {
        label: string;
      };
      websiteInput: {
        label: string;
        placeholder: string;
      };
      twitterInput: {
        label: string;
        placeholder: string;
      };
      buttonText: string;
    };
    step3: {
      step1: string;
      step2: string;
      step3: string;
      step4: string;
      announcement: string;
    };
    step4: {
      left: {
        title: string;
        subtitle: string;
        linkTexts: {
          primary: string;
          secondary: string;
        };
        viewOn: string;
      };
      right: {
        title: string;
        subtitle: string;
        xText: string;
        gitText: string;
        linkText: string;
      };
      announcement: string;
    };
  };
  tokenDetail: {
    websiteText: string;
    twitterText: string;
    buttonText: {
      primary: string;
      secondary: string;
    };
    tokenContract: {
      title: string;
    };
    pullRequest: {
      title: string;
      subtitle: {
        primary: string;
        secondary: string;
      };
      status: {
        pending: string;
        merged: string;
        closed: string;
      };
    };
    transactionHash: {
      title: string;
      viewOn: string;
    };
  };
};

export type { Lang };
