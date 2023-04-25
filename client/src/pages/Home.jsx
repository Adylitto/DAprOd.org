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
        <h1 class="text-white flex-auto text-5xl font-semibold text-center">
          Welcome to DAprOd Project
        </h1>
        <p class="text-white text-center">
        DaProd: Monetizing Unexploited Cultural Content.
        </p>
        <div class="mt-5">
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
      </div>

      <div class="flex flex-col m-0 mb-10">
        <h1 class="text-white flex-auto text-xl font-semibold text-center">
           DAprOd Team
        </h1>
        <p class="text-white text-center">Synergy of passions</p>
        <div class="flex flex-wrap justify-center m-0 md:w-full text-white">
          <div class="w-full lg:w-1/2 p-2">
            <div class="mt-5 mx-5 center">
              <img
                src="https://i.ibb.co/vmVsZ3F/JB-300x300.jpg"
                alt="JB"
                class="rounded-bl-3xl rounded-tr-3xl mx-auto"
              />{" "}
              <br />
              <h2 class='font-semibold text-center'>Jean-Baptiste - Film producer</h2>
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
          <div class="w-full lg:w-1/2 p-2">
            <div class="mt-5 mx-5">
              <img
                src="https://i.ibb.co/vhLYWmg/adyl-pfp.png"
                alt="Adyl"
                class="rounded-bl-3xl rounded-tr-3xl mx-auto"
              />
              <br />
              <h2 class='font-semibold text-center'>Adyl ITTO - Developper</h2>
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
        campaigns={campaigns}
      />
    </>
  );
};

export default Home;
