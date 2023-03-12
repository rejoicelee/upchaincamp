// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract W1_2 {

    uint counter;

    constructor() {
        counter = 0;
    }

    function add(uint x) public {
        counter = counter + x;
    }

    function count() private {
        counter = counter + 1;
    }
}