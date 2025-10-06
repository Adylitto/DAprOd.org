import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { ethers } from 'ethers';

import { useStateContext } from '../context';
import { CountBox, CustomButton, Loader } from '../components';
import { calculateBarPercentage, daysLeft } from '../utils';
import { thirdweb } from '../assets';


import CreatorInfo from '../components/CreatorInfo';
import DonatorsList from '../components/DonatorsList';
import FundCardDetails from '../components/FundCardDetails';

import Story from '../components/Story';

const CampaignDetails = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { donate, getDonations, contract, address, payout, refund } = useStateContext();

  const [isLoading, setIsLoading] = useState(false);
  const [amount, setAmount] = useState('');
  const [donators, setDonators] = useState([]);
  const [selectedImage, setSelectedImage] = useState(state.image);

  const remainingDays = daysLeft(state.deadline);

  const fetchDonators = async () => {
    const data = await getDonations(state.pId);

    setDonators(data);
  }

  useEffect(() => {
    if(contract) fetchDonators();
  }, [contract, address])

  const handleDonate = async () => {
    setIsLoading(true);

    await donate(state.pId, amount); 

    navigate('/')
    setIsLoading(false);
  }

  const handlePayout = async () => {
    setIsLoading(true);
    await payout(state.pId);
    navigate('/')
    setIsLoading(false);
  }

  const handleRefund = async () => {
    setIsLoading(true);
    await refund(state.pId);
    navigate('/')
    setIsLoading(false);
  }

  const handleImageSelection = (image) => {
    setSelectedImage(image);
  }

  return (
    <div>
      {isLoading && <Loader />}

      <div className="w-full flex md:flex-row flex-col mt-10 gap-[30px]">
        <div className="flex-1 flex-col">
          <img src={selectedImage} alt="campaign" className="w-full h-[410px] object-cover rounded-xl"/>
          <div className="flex flex-row mt-2 gap-2">
            {state.galleryImages && state.galleryImages.map((image, index) => (
              <img key={index} src={image} alt="campaign-gallery" className={`w-[100px] h-[100px] object-cover rounded-xl cursor-pointer ${selectedImage === image ? 'border-4 border-[#4acd8d]' : ''}`} onClick={() => handleImageSelection(image)} />
            ))}
          </div>
          <div className="relative w-full h-[5px] bg-[#3a3a43] mt-2">
            <div className="absolute h-full bg-[#4acd8d]" style={{ width: `${calculateBarPercentage(state.target, state.amountCollected)}%`, maxWidth: '100%'}}>
            </div>
          </div>
        </div>

        <div className="flex md:w-[150px] w-full flex-wrap justify-between gap-[30px]">
          <CountBox title="Days Left" value={remainingDays} />
          <CountBox title={`Raised of ${state.target}`} value={state.amountCollected} />
          <CountBox title="Total Backers" value={donators.length} />
        </div>
      </div>

      <div className="mt-[60px] flex lg:flex-row flex-col gap-5">
        <div className="flex-[2] flex flex-col gap-[40px]">
          <CreatorInfo owner={state.owner} />
          <Story description={state.description} />
          <DonatorsList donators={donators} />
        </div>

        <FundCardDetails 
          amount={amount} 
          setAmount={setAmount} 
          handleDonate={handleDonate} 
          remainingDays={remainingDays} 
          target={state.target} 
          amountCollected={state.amountCollected} 
          handlePayout={handlePayout} 
          handleRefund={handleRefund} 
        />
      </div>
    </div>
  )
}

export default CampaignDetails