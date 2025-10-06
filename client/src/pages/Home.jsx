import React, { useState, useEffect } from "react";

import { CustomButton } from "../components";

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const { address, contract, getCampaigns } = useStateContext();

  const fetchCampaigns = async () => {
    setIsLoading(true);
    const data = await getCampaigns();
    setCampaigns(data);
    setIsLoading(false);
  };

  useEffect(() => {
    if (contract) fetchCampaigns();
  }, [address, contract]);

  const filteredCampaigns = campaigns.filter((campaign) =>
    campaign.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <div className="flex flex-col mb-10">
        <h1 className="text-white flex-auto text-5xl font-semibold text-center">
          Welcome to DAprOd Project
        </h1>
        <p className="text-white text-center">
        DaProd: Monetizing Unexploited Cultural Content.
        </p>
        <div className="mt-5">
          <center>
            <iframe
              width="100%"
              height="500px"
              src="https://www.youtube.com/embed/cO3_rnP4UYg"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </center>
        </div>
        <div className="flex justify-center mt-5">
          <CustomButton
            btnType="button"
            title="Create a campaign"
            styles="bg-[#1dc071]"
            handleClick={() => navigate("/create-campaign")}
          />
        </div>
      </div>

      <div className="flex flex-col m-0 mb-10">
        <h1 className="text-white flex-auto text-3xl font-semibold text-center">
           DAprOd Team
        </h1>
        <a href="https://discord.com/invite/UT42mYU8Zy" className="text-white underline text-center">Like the project? Join Devs Discord Channel</a>
        <div className="flex flex-wrap justify-center m-0 md:w-full text-white">
          <div className="w-full lg:w-1/2 p-2">
            <div className="mt-5 mx-5 center">
              <img
                src="https://i.ibb.co/vmVsZ3F/JB-300x300.jpg"
                alt="JB"
                className="rounded-bl-3xl rounded-tr-3xl mx-auto"
              />{" "}
              <br />
              <h2 className='font-semibold text-center'>Jean-Baptiste - Film producer</h2>
              <p>
                Jean-Baptiste is a seasoned entertainment industry professional
                with over 15 years of experience. He started with his own
                company, Linkyourart, and has since worked in film financing,
                production, and sales & acquisitions. He currently develops a
                range of projects with big industry players, including films,
                TV, and video games.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 p-2">
            <div className="mt-5 mx-5">
              <img
                src="https://i.ibb.co/vhLYWmg/adyl-pfp.png"
                alt="Adyl"
                className="rounded-bl-3xl rounded-tr-3xl mx-auto"
              />
              <br />
              <h2 className='font-semibold text-center'>Adyl ITTO - Developper</h2>
              <p>
                Adyl is a self-taught blockchain developer and entrepreneur who
                focuses on events, cinema, and music. With a keen interest in
                digital marketing, he combined his passion for cinema and art
                with blockchain and artificial intelligence to create the first
                DAO-decentralized autonomous organization for cultural
                programming. The initiative aims to provide transparency to
                investors and sovereignty to actors and users.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <DisplayCampaigns
        title="All Campaigns"
        isLoading={isLoading}
        campaigns={filteredCampaigns}
      />
    </>
  );
};

export default Home;
