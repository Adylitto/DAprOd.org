import React from 'react';

const Story = ({ description }) => {
  return (
    <div>
      <h4 className="font-epilogue font-semibold text-[18px] text-white uppercase">Story</h4>

      <div className="mt-[20px]">
        <p className="font-epilogue font-normal text-[16px] text-[#808191] leading-[26px] text-justify">{description}</p>
      </div>
    </div>
  );
};

export default Story;
