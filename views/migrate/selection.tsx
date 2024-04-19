import Card from "./card";
import { CardProps, ISelectionComponent } from "./types";

const SelectionComponent = ({ setMigrateNetwork }: ISelectionComponent) => {
  const cards: CardProps[] = [
    {
      title: "Base",
      variant: "base",
    },
    {
      title: "Optimism",
      variant: "optimism",
    },
    {
      title: "Mode",
      variant: "mode",
    },
    {
      title: "Scroll",
      variant: "scroll",
    },
  ];
  return (
    <div className="flex mt-7 md:mt-24 justify-center">
      <div className="flex flex-col items-start gap-6">
        <div>
          <h1 className="text-2xl font-medium text-primary-300">
            Select a network
          </h1>
          <span className="text-base">
            Select a network to start a new migration
          </span>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full">
          {cards.map((card, index) => (
            <Card key={index} {...card} onClick={setMigrateNetwork} />
          ))}
        </div>

        <div className="self-stretch flex items-center rounded-xl bg-primary-650 px-6 py-3 ">
          <div className="text-primary-700 text-[14px] leading-[24px]">
            {
              "We are adding more L2 Integrations. If you'd like us to support your network, reach out to"
            }

            <p className="underline">
              <a
                href="https://www.integrations@metastablelabs.xyz"
                target="_blank"
              >
                integrations@metastablelabs.xyz
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectionComponent;
