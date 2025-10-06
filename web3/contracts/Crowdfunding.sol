// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract CrowdFunding {
    struct Campaign {
        address owner;
        string title;
        string description;
        uint256 target;
        uint256 deadline;
        uint256 amountCollected;
        string image;
        string[] galleryImages;
        address[] donators;
        uint256[] donations;
    }

    mapping(uint256 => Campaign) public campaigns;

    uint256 public numberOfCampaigns = 0;

    function createCampaign(address _owner, string memory _title, string memory _description, uint256 _target, uint256 _deadline, string memory _image, string[] memory _galleryImages) public returns (uint256) {
        Campaign storage campaign = campaigns[numberOfCampaigns];

        require(_deadline > block.timestamp, "The deadline should be a date in the future.");

        campaign.owner = _owner;
        campaign.title = _title;
        campaign.description = _description;
        campaign.target = _target;
        campaign.deadline = _deadline;
        campaign.amountCollected = 0;
        campaign.image = _image;
        campaign.galleryImages = _galleryImages;

        numberOfCampaigns++;

        return numberOfCampaigns - 1;
    }

    function donateToCampaign(uint256 _id) public payable {
        uint256 amount = msg.value;

        Campaign storage campaign = campaigns[_id];

        campaign.donators.push(msg.sender);
        campaign.donations.push(amount);

        campaign.amountCollected = campaign.amountCollected + amount;
    }

    function getDonators(uint256 _id) view public returns (address[] memory, uint256[] memory) {
        return (campaigns[_id].donators, campaigns[_id].donations);
    }

    function getCampaigns() public view returns (Campaign[] memory) {
        Campaign[] memory allCampaigns = new Campaign[](numberOfCampaigns);

        for(uint i = 0; i < numberOfCampaigns; i++) {
            Campaign storage item = campaigns[i];

            allCampaigns[i] = item;
        }

        return allCampaigns;
    }

    function payout(uint256 _id) public {
        Campaign storage campaign = campaigns[_id];
        require(campaign.owner == msg.sender, "You are not the owner of this campaign.");
        require(block.timestamp > campaign.deadline, "The deadline has not passed yet.");
        require(campaign.amountCollected >= campaign.target, "The campaign has not met its target.");

        (bool sent,) = payable(campaign.owner).call{value: campaign.amountCollected}("");

        if (sent) {
            campaign.amountCollected = 0;
        }
    }

    function refund(uint256 _id) public {
        Campaign storage campaign = campaigns[_id];
        require(block.timestamp > campaign.deadline, "The deadline has not passed yet.");
        require(campaign.amountCollected < campaign.target, "The campaign has met its target.");

        for (uint i = 0; i < campaign.donators.length; i++) {
            if (campaign.donators[i] == msg.sender) {
                (bool sent,) = payable(msg.sender).call{value: campaign.donations[i]}("");

                if (sent) {
                    campaign.donations[i] = 0;
                }
            }
        }
    }
}