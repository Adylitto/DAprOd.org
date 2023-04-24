import React, { useState, useEffect } from "react";

import { DisplayCampaigns } from "../components";
import { useStateContext } from "../context";

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);

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

  return (
    <>
      <div class="flex flex-col mb-10">
        <h1 class="text-white flex-auto text-xl font-semibold text-center">
          Welcome to DAprOd (NOTICE: This a Test version live on Goerli-testnet)
        </h1>
        <p class="text-white text-center">
          Be the producer of what you want to see
        </p>
        <p class="text-white text-center">What is DAprOd project?</p>
        <div class="mt-5">
          <center>
            <iframe
              width="100%"
              height="300px"
              src="https://www.youtube.com/embed/cO3_rnP4UYg"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </center>
        </div>
      </div>

      <div class="flex flex-col m-0 mb-10">
        <h1 class="text-white flex-auto text-xl font-semibold text-center">
          Team DAprOd
        </h1>
        <p class="text-white text-center">Founders</p>
        <div class="flex flex-wrap justify-center m-0 md:w-full text-white">
          <div class="w-full lg:w-1/2 p-2">
            <div class="mt-5 mx-5">
              <img
                src="./src/assets/JB_300x300.png"
                alt="JB"
                class="rounded-bl-3xl rounded-tr-3xl"
              />{" "}
              <br />
              <h2>Jean-Baptiste</h2>
              <p>Bio</p>
            </div>
          </div>
          <div class="w-full lg:w-1/2 p-2">
            <div class="mt-5 mx-5">
              <img
                src="./src/assets/adyl-pfp.png"
                alt="Adyl"
                class="rounded-bl-3xl rounded-tr-3xl"
              />
              <br />
              <h2>Adyl ITTO</h2>
              <p>
                Adyl is a self-taught entrepreneur in the events, cinema, and
                music industries. He has organized successful private events for
                famous personalities, including Andrea Bocelli, and realized the
                importance of digital marketing. He combined his passion for
                cinema and art with blockchain and artificial intelligence to
                create the first French-speaking decentralized autonomous
                organization for cultural programming, aimed at bringing
                transparency to investors and sovereignty to actors and users.
              </p>
            </div>
          </div>
        </div>
      </div>

      <h3 class="text-white mb-5">
        NOTICE:The following are project exemple, some are actual funding
        campaign some are fictive
      </h3>

      <DisplayCampaigns
        title="All Campaigns"
        isLoading={isLoading}
        campaigns={campaigns}
      />
    </>
  );
};

export default Home;
