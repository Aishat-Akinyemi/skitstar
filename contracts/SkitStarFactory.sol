// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@thirdweb-dev/contracts/base/ERC1155Base.sol";
import "@thirdweb-dev/contracts/token/TokenERC20.sol";
import "@thirdweb-dev/contracts/extension/Ownable.sol";

contract SkitStarFactory is Ownable {
    address public marketPlaceContractAddress;
    address public admin;
    address public tokenAddress;
    uint public platformFee;

    mapping(address => address) public getStar;
    address[] allStars;

    event creatorJoined(
        address indexed creatorAddress,
        address indexed tokenAddress,
        uint
    );

    event platformFeeSet(uint indexed newFee, uint indexed oldFee);
    event marketPlaceContractAddressSet(
        address newMarketPlaceContractAddressSet,
        address oldMarketPlaceContractAddressSet
    );

    constructor(
        address _marketPlaceContract,
        address _tokenContract,
        uint _platformFee
    ) {
        marketPlaceContractAddress = _marketPlaceContract;
        tokenAddress = _tokenContract;
        platformFee = _platformFee;
        emit platformFeeSet(_platformFee, 0);
    }

    function setPlatformFee(uint _platFormFee) public onlyOwner {
        uint oldFee = platformFee;
        platformFee = _platFormFee;
        emit platformFeeSet(_platFormFee, oldFee);
    }

    function setMarketPlace(
        address _marketPlaceContractAddress
    ) public onlyOwner {
        address oldmarketPlaceContractAddress = marketPlaceContractAddress;
        marketPlaceContractAddress = _marketPlaceContractAddress;
        emit marketPlaceContractAddressSet(
            _marketPlaceContractAddress,
            oldmarketPlaceContractAddress
        );
    }

    function registerCreator(
        string memory _name,
        string memory _symbol,
        uint128 _royaltyBps
    ) external returns (address skitStarAddress) {
        //check that the creator has not joined with the same wallet before
        require(getStar[msg.sender] == address(0), "Skitstar: ALREADY_JOINED");
        require(
            TokenERC20(tokenAddress).transferFrom(
                msg.sender,
                address(this),
                platformFee
            ),
            "Skitstar: PAY_PLATFORM_FEE"
        );

        ERC1155Base newStarContract = new ERC1155Base(
            _name,
            _symbol,
            msg.sender,
            _royaltyBps
        );
        skitStarAddress = address(newStarContract);
        getStar[msg.sender] = skitStarAddress;
        allStars.push(skitStarAddress);
        emit creatorJoined(msg.sender, skitStarAddress, allStars.length);
    }

    function _canSetOwner() internal view virtual override returns (bool) {
        return msg.sender == owner();
    }
}
