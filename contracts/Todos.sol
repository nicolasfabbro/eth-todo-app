// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.4;

contract Todos {
  struct Todo {
    uint id;
    string title;
    string description;
    bool isCompleted;
    address owner;
  }

  mapping(address => Todo[]) todos;

  function getTodos() public view returns (Todo[] memory) {
    return todos[msg.sender];
  }

  function addTodo(string memory _title, string memory _description, bool _isCompleted) public {
    // 1) chequear si todos[msg.sender] existe
    // 2) si existe le pusheo el nuevo item
    // 3) si no existe creo el array con el nuevo item
  }
}