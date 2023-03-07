// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.0;


contract W1_1 {

    uint256 public counter;

    constructor() {
        counter = 0;
    }

    function count() public {
        add(1);
    }

    function add(uint256 x) public {
       counter = counter + x;
    }
    
}