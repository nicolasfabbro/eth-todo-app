import { ethers } from "ethers";
// import { MetaMaskInpageProvider } from "@metamask/providers";

import todoListAbi from "../utils/TodoList.json";

// @todo: find the right type for ethereum due to MetaMaskInpageProvider doesn't work with Web3Provider class
export const getTodoListContract = (ethereum: any) => {
  const contractAddress = '0x44541ab8c2557828109743d04E0e38fEfcf71660';
  const contractABI = todoListAbi.abi;

  if (ethereum) {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();

    return new ethers.Contract(contractAddress, contractABI, signer);
  }

  return undefined;
}