const faqs = [
  {
    question: 'Is it possible to migrate tokens with different names and tickers to Base?',
    answer: 'Yes, during the migration process, you should check the “Override” option. This will require addition manual review.',
  },
  {
    question: 'How can you see or check documentation or code references for Supermigrate?',
    answer: 'Here is a link to our github repository: https://github.com/supermigrate',
  },
  {
    question: 'Does Supermigrate support two-way bridging?',
    answer: 'Yes, with our superbridge integration, you can go from L1 ⇒ L2 and back.',
  },
  {
    question: 'What bridging mechanism is used for Supermigrate?',
    answer: 'he tokens are deployed using the official OptimismMintableERC20Factory. After token deployment, you can bridge the tokens on our bridging interface which is powered by superbridge.',
  },
  {
    question: 'How many Layer 2 networks are supported currently?',
    answer: 'We currently support Base, Optimism, and Mode. We are actively adding more networks. Reach out to integrations@metastablelabs.xyz for integration requests',
  },
  {
    question: 'Are Polygon tokens supported by Supermigrate?',
    answer: 'No, currently it only supports Ethereum to L2 migrations.',
  },
  //   {
  //     question:
  //       "How does Supermigrate handle data integrity during the migration process?",
  //     answer:
  //       "Data integrity is maintained through rigorous checks, balances, and the use of advanced cryptographic techniques to ensure that all data remains intact and secure during migration.",
  //   },
  //   {
  //     question: "Can I trial Supermigrate before committing to a full migration?",
  //     answer:
  //       "Yes, Supermigrate offers a trial period where you can test out the platform’s capabilities and ensure it meets your needs before undergoing a full migration.",
  //   },
  //   {
  //     question:
  //       "How long does a typical migration to Layer 2 take with Supermigrate?",
  //     answer:
  //       "The duration of migration depends on the complexity and size of the assets being migrated, but Supermigrate is engineered to perform migrations efficiently and swiftly.",
  //   },
  //   {
  //     question: "Does Supermigrate offer analytics and reporting post-migration?",
  //     answer:
  //       "Post-migration, Supermigrate provides detailed analytics and reporting tools to help you understand the impact of migration and optimize your Layer 2 operations.",
  //   },
];

export { faqs };
