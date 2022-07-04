// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.4;

import "hardhat/console.sol";

contract TodoList {
  struct Todo {
    uint256 id;
    string title;
    string description;
    bool isCompleted;
  }

  mapping(address => Todo[]) todos;

  function getTodos() public view returns (Todo[] memory) {
    return todos[msg.sender];
  }

  function addTodo(string memory _title, string memory _description, bool _isCompleted) public {
    Todo memory newTodo = Todo({
      id: block.timestamp,
      title: _title,
      description: _description,
      isCompleted: _isCompleted
    });

    todos[msg.sender].push(newTodo);
  }

  function toggleTaskStatus(uint256 _id) public view returns (memory Todo[]) {
    Todo[] memory currentUserTodos = todos[msg.sender];

    return currentUserTodos;

    // for (uint i = 0; i < currentUserTodos.length; i++) {
    //   if (currentUserTodos[i].id == _id) {
    //     currentUserTodos[i].isCompleted = !currentUserTodos[i].isCompleted;
    //   }
    // }
  }
}