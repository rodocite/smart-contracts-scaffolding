pragma solidity ^0.4.18;

contract Scaffold {
  uint storedData;

  function set(uint x) public {
    storedData = x;
  }

  function get() public constant returns (uint) {
    return storedData;
  }
}

