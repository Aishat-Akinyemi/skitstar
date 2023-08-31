// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@thirdweb-dev/contracts/base/ERC1155Base.sol";
import "@thirdweb-dev/contracts/extension/Ownable.sol";

contract ERC1155BaseCreator is Ownable {
    event CreatorRegistered(
        address indexed creatorAddress,
        address indexed erc1155tokenAddress,
        uint
    );

    constructor() {
        _setupOwner(msg.sender);
    }

    /// @dev array of all creators
    address[] public allStarAddresses;
    //mapping of star address to the ERC1155 contract address
    mapping(address => address) public getStarsContract;

    function registerCreator(
        string memory _name,
        string memory _symbol,
        address _owner,
        uint128 _royaltyBps
    ) external onlyOwner returns (address skitStarAddress) {
        ERC1155Base newStarContract = new ERC1155Base(
            _owner,
            _name,
            _symbol,
            _owner,
            _royaltyBps
        );
        skitStarAddress = address(newStarContract);
        allStarAddresses.push(skitStarAddress);
        getStarsContract[_owner] = address(skitStarAddress);
        emit CreatorRegistered(
            _owner,
            skitStarAddress,
            allStarAddresses.length
        );
        return skitStarAddress;
    }

    function _canSetOwner() internal view virtual override returns (bool) {
        return msg.sender == owner();
    }
}
