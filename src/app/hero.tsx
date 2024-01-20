"use client";
import { Typography} from "@material-tailwind/react";
import { HEADING, TAGLINE } from "@/util/env";


function Hero() {
  return (
    <header className="bg-white p-6 pt-10 pb-0">
    <div className="w-w-full container mx-auto text-center">
      <Typography
        color="blue-gray"
        className="text-primary-buttonTextColor font-poppins mx-auto w-full text-[20px] lg:text-[38px] font-bold leading-[35px] lg:leading-[50px] lg:max-w-4xl"
      >
        {HEADING}
      </Typography>
      <Typography
        variant="lead"
        className="font-poppins mx-auto mb-4 w-full px-8 !text-black lg:w-10/12 lg:px-12 xl:w-8/12 xl:px-20"
      >{TAGLINE}
      </Typography>
    </div>
  </header>
  );
}
export default Hero;
