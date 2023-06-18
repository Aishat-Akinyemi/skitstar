// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@thirdweb-dev/contracts/base/ERC1155Base.sol";
import "@thirdweb-dev/contracts/extension/Ownable.sol";

contract SkitStarFactoryContract is Ownable {
    struct Creator {
        address ERC1155TokenAddress;
        uint256 subscriberCount;
        uint256 giftBalance;
        string creatorInfoUrl;
        string[] videoAssets;
    }
    /// @dev mapping of creator address to their ERC1155 address
    mapping(address => Creator) public getStar;

    /// @dev array of all creators
    address[] allStars;

    /// @dev mapping userAccount address to the mapping of creatorAddress => subscription status
    mapping(address => mapping(address => bool)) public subscriptions;

    event creatorJoined(
        address indexed creatorAddress,
        address indexed erc1155tokenAddress,
        uint
    );

    event giftTransferred(
        address indexed sender,
        address indexed creator,
        uint256 indexed amount
    );

    constructor() {
        _setupOwner(msg.sender);
    }

    function registerCreator(
        string memory _name,
        string memory _symbol,
        string memory _infoUrl,
        uint128 _royaltyBps
    ) external returns (address skitStarAddress) {
        //check that the creator has not joined with the same wallet before
        require(!_isCreator(msg.sender), "Skitstar: ALREADY_JOINED");
        ERC1155Base newStarContract = new ERC1155Base(
            _name,
            _symbol,
            msg.sender,
            _royaltyBps
        );
        skitStarAddress = address(newStarContract);
        getStar[msg.sender] = Creator(
            msg.sender,
            0,
            0,
            _infoUrl,
            new string[](0)
        );
        allStars.push(skitStarAddress);
        emit creatorJoined(msg.sender, skitStarAddress, allStars.length);
    }

    function subscribe(address creatorAdd) external {
        require(_isCreator(creatorAdd), "NOT_A_REGISTERED_CREATOR");
        subscriptions[msg.sender][creatorAdd] = true;
        getStar[creatorAdd].subscriberCount++;
    }

    function unSubscribe(address creatorAdd) external {
        require(_isCreator(creatorAdd), "NOT_A_REGISTERED_CREATOR");
        require(
            subscriptions[msg.sender][creatorAdd] == true,
            "NOT_A_SUBSCRIBER"
        );
        delete subscriptions[msg.sender][creatorAdd];
        getStar[creatorAdd].subscriberCount--;
    }

    function gift(address payable creatorAdd) external payable {
        require(_isCreator(creatorAdd), "NOT_A_REGISTERED_CREATOR");
        getStar[creatorAdd].giftBalance += msg.value;
        (bool sent, bytes memory data) = creatorAdd.call{value: msg.value}("");
        require(sent, "FAILED_TO_GIFT");
    }

    function saveVideoAsset(string memory assetid) public {
        require(_isCreator(msg.sender), "NOT_A_REGISTERED_CREATOR");
        getStar[msg.sender].videoAssets.push(assetid);
    }

    function _canSetOwner() internal view virtual override returns (bool) {
        return msg.sender == owner();
    }

    function _isCreator(address _address) internal view returns (bool) {
        return (getStar[_address].ERC1155TokenAddress != address(0));
    }
}
