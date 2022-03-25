// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract MyContract{
    // event MyEvent(
    //     uint indexed id,
    //     uint indexed date,
    //     string indexed value
    // );

    // uint nextId;

    // function emitEvent(string calldata value) external {
    //     emit MyEvent(nextId,block.timestamp, value);

    //     nextId++;
    // }



// =-=-=-=-=-=-=-=-=-=-=
    // string public functionCalled;

    // function sendEther() external payable{
    //     functionCalled = 'sendEther';
    // }

    // function() external payable{
    //     functionCalled = 'fallback';
    // }


// =-=-=-=-=-=-=-=-=-=-=

    uint data;
    
    function getData() external view returns(uint){
        return data;
    }

    function setData(uint _data) external {
        data = _data;
    }

    // function setDataPrivate(uint _data) private {
    //     data = _data + 10;
    // }

}