const hre = require("hardhat");

async function main() {
  const provider = hre.ethers.getDefaultProvider();
  const [owner] = await hre.ethers.getSigners();
  const TodosContractFactory = await hre.ethers.getContractFactory("TodoList");
  const TodosContract = await TodosContractFactory.deploy();
  await TodosContract.deployed();

  await TodosContract.addTodo('title 7', 'description', false);
  await TodosContract.addTodo('title 8', 'description', false);
  const allUserTodos = await TodosContract.getTodos();
  // await TodoTxn.wait();

  console.log(allUserTodos);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });