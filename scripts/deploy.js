const hre = require("hardhat");

async function main() {
  const TodoListContractFactory = await hre.ethers.getContractFactory("TodoList");
  const todoListContract = await TodoListContractFactory.deploy();
  await todoListContract.deployed();

  console.log("The todo list contract is deployed!", todoListContract.address);

  const todos = await todoListContract.getTodos();
  console.log("We got the list!", todos);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });