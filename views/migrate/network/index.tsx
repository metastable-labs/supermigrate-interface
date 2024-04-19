import { Network } from "..";

interface INetwork {
  network: Network;
}

const NetworkComponent = ({ network }: INetwork) => {
  return <div>{network}</div>;
};

export default NetworkComponent;
