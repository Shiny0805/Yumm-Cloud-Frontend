import random from "lodash/random";

// Array of available nodes to connect to
export const nodes = [
  "https://api.devnet.solana.com",
  "https://api.testnet.solana.com",
];

const getNodeUrl = () => {
  const randomIndex = random(0, nodes.length - 1);
  return nodes[randomIndex];
};

export default getNodeUrl;
