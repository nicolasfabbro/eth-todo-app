// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.4;

import "hardhat/console.sol";

contract TodoList {
  struct Todo {
    uint id;
    string title;
    string description;
    bool isCompleted;
  }

  mapping(address => Todo[]) todos;

  function getTodos() public view returns (Todo[] memory) {
    return todos[msg.sender];
  }

  function addTodo(string memory _title, string memory _description, bool _isCompleted) external {
    Todo memory newTodo = Todo({
      id: block.timestamp,
      title: _title,
      description: _description,
      isCompleted: _isCompleted
    });

    todos[msg.sender].push(newTodo);
  }
}