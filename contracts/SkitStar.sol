// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@thirdweb-dev/contracts/extension/Ownable.sol";

interface IERC20Token {
    function transferFrom(address, address, uint256) external returns (bool);
}

interface IERC1155BaseCreator {
    function registerCreator(
        string memory,
        string memory,
        address,
        uint128
    ) external returns (address);

    function setOwner(address) external;
}

contract SkitStar is Ownable {
    address tokenAddress;
    address erc1155BaseCreatorAddress;

    error UnregisteredAddress();
    error Joined();
    error NotSubscribed();
    error Subscribed();

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
    address[] public allStars;

    /// @dev mapping userAccount address to the mapping of creatorAddress => subscription status
    mapping(address => mapping(address => bool)) public subscriptions;

    event CreatorRegistered(
        address indexed creatorAddress,
        address indexed erc1155tokenAddress,
        uint
    );

    constructor(address _tokenAddress, address _erc1155BaseCreatorAddress) {
        tokenAddress = _tokenAddress;
        erc1155BaseCreatorAddress = _erc1155BaseCreatorAddress;
        _setupOwner(msg.sender);
    }

    function registerCreator(
        string memory _name,
        string memory _symbol,
        string memory _infoUrl,
        uint128 _royaltyBps
    ) external returns (address skitStarAddress) {
        //check that the creator has not joined with the same wallet before
        if (getStar[msg.sender].ERC1155TokenAddress != address(0)) {
            revert Joined();
        }
        skitStarAddress = IERC1155BaseCreator(erc1155BaseCreatorAddress)
            .registerCreator(_name, _symbol, msg.sender, _royaltyBps);
        getStar[msg.sender] = Creator(
            skitStarAddress,
            0,
            0,
            _infoUrl,
            new string[](0)
        );
        allStars.push(msg.sender);
        emit CreatorRegistered(msg.sender, skitStarAddress, allStars.length);
    }

    function subscribe(address creatorAdd) external {
        if (getStar[creatorAdd].ERC1155TokenAddress == address(0)) {
            revert UnregisteredAddress();
        }
        if (subscriptions[msg.sender][creatorAdd] == true) {
            revert Subscribed();
        }
        subscriptions[msg.sender][creatorAdd] = true;
        getStar[creatorAdd].subscriberCount++;
    }

    function unSubscribe(address creatorAdd) external {
        if (getStar[creatorAdd].ERC1155TokenAddress == address(0)) {
            revert UnregisteredAddress();
        }
        if (subscriptions[msg.sender][creatorAdd] == false) {
            revert NotSubscribed();
        }
        delete subscriptions[msg.sender][creatorAdd];
        getStar[creatorAdd].subscriberCount--;
    }

    function giftCreator(address creatorAdd, uint256 amount) external {
        if (getStar[creatorAdd].ERC1155TokenAddress == address(0)) {
            revert UnregisteredAddress();
        }
        require(
            IERC20Token(tokenAddress).transferFrom(
                msg.sender,
                address(creatorAdd),
                amount
            ),
            "failed"
        );
        getStar[creatorAdd].giftBalance += amount;
    }

    function saveVideoAsset(string memory assetid) public {
        if (getStar[msg.sender].ERC1155TokenAddress == address(0)) {
            revert UnregisteredAddress();
        }
        Creator storage creator = getStar[msg.sender];
        creator.videoAssets.push(assetid);
        getStar[msg.sender] = creator;
    }

    function getVideoAssets(
        address creatorAddress
    ) external view returns (string[] memory) {
        if (getStar[creatorAddress].ERC1155TokenAddress == address(0)) {
            revert UnregisteredAddress();
        }
        return getStar[creatorAddress].videoAssets;
    }

    function getAllCreators() external view returns (address[] memory) {
        return allStars;
    }

    function deleteVideo(string memory _video) external {
        if (getStar[msg.sender].ERC1155TokenAddress == address(0)) {
            revert UnregisteredAddress();
        }
        string[] storage videoAssets = getStar[msg.sender].videoAssets;
        for (uint256 i = 0; i < videoAssets.length; i++) {
            if (keccak256(bytes(videoAssets[i])) == keccak256(bytes(_video))) {
                // Remove the video from the videoAssets array by swapping it with the last element
                // and then reducing the array length by one
                videoAssets[i] = videoAssets[videoAssets.length - 1];
                videoAssets.pop();
                break;
            }
        }
    }

    function updateProfile(string memory _infoUrl) public {
        if (getStar[msg.sender].ERC1155TokenAddress == address(0)) {
            revert UnregisteredAddress();
        }
        Creator storage creator = getStar[msg.sender];
        creator.creatorInfoUrl = _infoUrl;
        getStar[msg.sender] = creator;
    }

    function setERC1155BaseCreatorContractAddress(
        address _newOwner
    ) external onlyOwner {
        IERC1155BaseCreator(erc1155BaseCreatorAddress).setOwner(_newOwner);
    }

    function setERC1155BaseCreatorContractOwner(
        address _erc1155BaseCreatorAddress
    ) external onlyOwner {
        erc1155BaseCreatorAddress = _erc1155BaseCreatorAddress;
    }

    function setTokenContractAddress(address _tokenAddress) external onlyOwner {
        tokenAddress = _tokenAddress;
    }

    function _canSetOwner() internal view virtual override returns (bool) {
        return msg.sender == owner();
    }
}
