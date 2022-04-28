import { ethers } from "ethers";
// import { MetaMaskInpageProvider } from "@metamask/providers";

// import todoListAbi from "../../artifacts/contracts/Todos.sol/TodoList.json";

// @todo: find the right type for ethereum due to MetaMaskInpageProvider doesn't work with Web3Provider class
export const getTodoListContract = (ethereum: any) => {
  const contractAddress = '';
  // const contractABI = todoListAbi.abi;
  const contractABI = null;

  if (ethereum && contractABI) {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();

    return new ethers.Contract(contractAddress, contractABI, signer);
  }

  return undefined;
}