import React, { useState, useEffect } from 'react'

import { DisplayCampaigns } from '../components';
import { useStateContext } from '../context'

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);

  const { address, contract, getCampaigns } = useStateContext();

  const fetchCampaigns = async () => {
    setIsLoading(true);
    const data = await getCampaigns();
    setCampaigns(data);
    setIsLoading(false);
  }

  useEffect(() => {
    if(contract) fetchCampaigns();
  }, [address, contract]);

  return (
    <><div class="flex flex-col mb-10">
      <h1 className='text-white flex-auto text-xl font-semibold text-center'>Welcome to DAprOd</h1>
      <p className='text-white text-center'>Be the producer of what you want to see</p>
      <div className='mt-5'><center><iframe width="460" height="315" src="https://www.youtube.com/embed/cO3_rnP4UYg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></center></div> 
    </div>
    <div class="flex flex-col m-10">
      <h1 className='text-white flex-auto text-xl font-semibold text-center'>Team DAprOd</h1>
      <p className='text-white text-center'>Our founders</p>
    </div>
    <div class="flex flex-col col-6 mb-10">

    </div>

    <DisplayCampaigns
        title="All Campaigns"
        isLoading={isLoading}
        campaigns={campaigns} />
    
  </>
  )
}

export default Home