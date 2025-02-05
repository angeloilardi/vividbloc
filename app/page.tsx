"use client";
import Image from "next/image";
import { useState } from "react";

import PlayButton from "./components/PlayButton";
import PauseButton from "./components/PauseButton";
import MenuIcon from "./components/MenuIcon";
import CloseIcon from "./components/CloseIcon";

export default function Home() {
  const [menuToggle, setMenuToggle] = useState(false);
  const [playToggle, setPlayToggle] = useState(false);

  return (
    <div className="w-full h-full relative bg-black">
      {/* Navbar */}

      <nav className=" py-5 justify-between bg-transparent hidden md:flex mr-8 items-center">
        <p className="text-lg font-normal bg-gradient-to-right inline-block text-transparent bg-clip-text ml-6">
          vividbloc.studio
        </p>
        <div className="flex flex-col md:flex-row gap-5 text-center font-bold text-white text-lg leading-tight">
          <a href="#">About Us</a>
          <a href="#">Our Craft</a>
          <a href="#">Blog</a>
          <a href="#">Contact</a>
        </div>
      </nav>

      {/* Hero image + mobile menu */}
      <div
        className={`w-full h-[607px] ${
          playToggle ? `bg-top-page-static` : "bg-top-page"
        } font-istok bg-cover bg-no-repeat rounded-b-[196px] md:rounded-l-[404px] md:rounded-b-[0px] md:${
          playToggle ? `bg-top-page-lg-static` : "bg-top-page-lg"
        } md:max-w-[892px] relative bg-center md:border-b-0 md:ml-auto lg:h-[807px]`}
      >
        <div className="flex pt-10 justify-between md:hidden">
          <p className="text-lg font-normal bg-gradient-to-right inline-block text-transparent bg-clip-text ml-6">
            vividbloc.studio
          </p>
          <button
            className="text-white text-lg font-normal mr-8 justify-self-center md:hidden"
            onClick={() => setMenuToggle(!menuToggle)}
          >
            <MenuIcon></MenuIcon>
          </button>
        </div>
        <button
          className="w-[53px] h-[53px]  bg-ellipse-2 rounded-full flex flex-wrap
    justify-center items-center left-[50%] absolute top-[50%]"
          onClick={() => setPlayToggle(!playToggle)}
        >
          {playToggle ? <PlayButton /> : <PauseButton />}
        </button>
      </div>

      {/* Side navbar */}
      <div
        className={`p-[1px] rounded-md bg-gradient w-[85vw] absolute top-0 right-0 md:hidden ${
          !menuToggle ? "hidden" : "block"
        } bg-black text-white rounded-[10px] border outline-gradient`}
      >
        <div className={`bg-black`}>
          <button
            className="text-lg ml-auto block p-5 font-istok"
            onClick={() => setMenuToggle(!menuToggle)}
          >
            <CloseIcon></CloseIcon>
          </button>
          <div className="flex flex-col text-center text-[32px] gap-11 mb-[52px] font-inter italic font-bold">
            <a href="">About Us</a>
            <a href="">Our Craft</a>
            <a href="">Blog</a>
            <a href="">Contact</a>
          </div>
          <hr className="text-[rgba(71, 71, 71, 1)] mx-2" />
          <div className="flex gap-7 justify-center mt-16 pb-16">
            <a href="">
              <Image
                height={24}
                width={24}
                src="/assets/images/skill-icons_linkedin.svg"
                alt={""}
              />
            </a>
            <a href="">
              <img
                className="w-6 h-6"
                src="/assets/images/line-md_twitter-x-alt.svg"
                alt=""
              />
            </a>
            <a href="">
              <img
                className="w-6 h-6"
                src="/assets/images/skill-icons_instagram.svg"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>

      {/* Big Logo */}
      <img
        src="/assets/images/vividbloc studio.svg"
        alt=""
        className="left-[34px] absolute top-[566px] md:top-[262px] md:left-[108px] lg:w-[291px] lg:h-[150px]"
      />

      {/* CTA */}

      <div className="flex flex-col font-inter -mt-8 z-10 ml-8 max-w-[300px] mb-24 md:max-w-full lg:top-[380px] lg:left-[108px] lg:absolute lg:ml-0">
        <div className="text-white text-2xl font-bold mt-24 xl:text-[40px] xl:bg-none">
          <h1 className="font-inter">
            Where Your{" "}
            <span className="bg-highlight-right inline-block italic xl:bg-none xl:not-italic font-inter">
              Story Takes
            </span>
            <span className="hidden md:inline-block">&nbsp;</span>
            <span className="bg-highlight-left italic xl:bg-none xl:not-italic font-inter">
              Center Stage
            </span>
          </h1>
        </div>
        <h2 className="text-white text-base font-normal mt-3 xl:text-2xl font-inter">
          Changing the Conversation, One Frame at a Time
        </h2>
        <div className="max-w-max">
          <p className="block text-white text-base font-normal font-istok mt-6 xl:text-xl">
            Discover Your Story
          </p>
          <div className="h-px bg-gradient-to-right w-full" />
        </div>
      </div>

      {/* ABOUT US */}

      <section className="flex">
        <div className="flex flex-col basis-1/12 flex-wrap w-[59px] justify-start">
          <div className="origin-top-left -rotate-90 text-white text-xs font-normal mt-16 w-[80px] ml-[29px]">
            ABOUT US
          </div>
          <div className="h-[89px] w-px  bg-gradient-to-top ml-[32px]" />
        </div>
        <div className="flex flex-col mr-[54px]">
          <h2 className="text-white text-2xl font-bold font-inter">
            Who We Are
          </h2>
          <div className="mt-2 text-lg xl:text-xl">
            <p className="text-neutral-200  font-normal max-w-[729px] font-istok leading-snug">
              Welcome to{" "}
              <span className="text-lg font-normal bg-gradient-to-right inline-block font-istok text-transparent bg-clip-text leading-snug">
                ViVidBloc.studio
              </span>
              , a realm where creativity knows no bounds. We're not just a video
              production agency; we're your creative confidants. Our approach is
              rooted in a unique blend of{" "}
              <span className="underline underline-offset-8 decoration-blue-700 decoration-4">
                storytelling and strategy
              </span>
              , designed to reflect the world as it truly is. We call it
              'Unified Vision,' and it's what sets us apart.
            </p>
          </div>
        </div>
      </section>
      <div className="w-[302px] h-[174px] max-w-[603px] bg-picture-layover bg-cover max-h-[350px] -mt-6 ml-auto md:w-[602px] md:h-[350px] mr-[8.15%] md:-mt-24" />

      {/* Our craft */}

      <h2 className="left-[28px] -[1488px]  text-white text-2xl font-bold mt-28 mb-16 ml-8 md:text-center font-inter">
        Our Craft
      </h2>
      <div className="w-[392px] mx-auto h-[297px] bg-picture-layover-2 bg-cover relative  md:hidden">
        <p className=" text-neutral-200 text-xs font-normal before:opacity-50 absolute bottom-10 font-istok px-8">
          We don't just make videos; we craft narratives. From concept to final
          cut, we're committed to adding that 'extra layer' to every project.
        </p>
      </div>
      <div className="font-istok flex flex-col  md:hidden">
        <div className="h-[59px] bg-violet-300 bg-opacity-10 flex justify-center items-center">
          <p className="text-violet-300 text-base font-normal">
            Video Production
          </p>
        </div>
        <div className="h-[59px] bg-yellow-100 bg-opacity-10 flex justify-center items-center">
          <p className="text-yellow-100 text-base font-normal">
            Talent Management
          </p>
        </div>
        <div className="h-[58px]  bg-pink-300 bg-opacity-10 flex justify-center items-center">
          <p className="text-pink-300 text-base">Personal Branding</p>
        </div>
        <div className="h-[58px]  bg-blue-700 bg-opacity-10 flex justify-center items-center">
          <p className="text-blue-700 text-base">Event Management</p>
        </div>
      </div>

      {/* Our Craft desktop */}

      <div className="md:flex hidden gap-2 justify-center font-istok">
        <div className="after:bg-video-prod mix-blend-normal relative after:absolute after:h-full after:w-full  after:top-0 after:left-0">
          <img src="/assets/images/Rectangle 36.png" alt="" className="" />
          <p className="z-10 text-white absolute bottom-[31px] lg:text-2xl  w-full text-center">
            Video Production
          </p>
        </div>
        <div className="after:bg-other-crafts mix-blend-normal relative after:absolute after:h-full after:w-full after:top-0 after:left-0">
          <img src="/assets/images/Rectangle 37.png" alt="" className="" />
          <p className="z-10 text-white absolute bottom-[31px] lg:text-2xl  w-full text-center">
            Talent Management
          </p>
        </div>
        <div className="after:bg-other-crafts mix-blend-normal relative after:absolute after:h-full after:w-full after:top-0 after:left-0">
          <img src="/assets/images/Rectangle 38.png" alt="" className="" />
          <p className="z-10 text-white absolute bottom-[31px] lg:text-2xl w-full text-center">
            Personal Branding
          </p>
        </div>
        <div className="after:bg-other-crafts mix-blend-normal relative after:absolute after:h-full after:w-full after:top-0 after:left-0">
          <img src="/assets/images/Rectangle 39.png" alt="" className="" />
          <p className="z-10 text-white absolute bottom-[31px] lg:text-2xl  w-full text-center">
            Event Management
          </p>
        </div>
      </div>

      {/* TESTIMONIALS */}

      <section className="flex mt-24 mb-10">
        <div className="flex flex-col basis-1/12 flex-wrap w-[59px] justify-start">
          <div className="origin-top-left -rotate-90 text-white text-xs font-normal mt-24 w-[80px] ml-[29px]">
            TESTIMONIALS
          </div>
          <div className="h-[89px] w-px  bg-gradient-to-top ml-[32px]" />
        </div>
        <div className="flex flex-col max-w-[729px] ">
          <h2 className=" text-white text-2xl font-bold mb-2 md:mb-3 font-inter">
            Voices of Our Tribe
          </h2>
          <p className=" text-neutral-200 text-lg font-normal leading-snug md:text-xl font-istok">
            Meet the brands and individuals who've transformed their stories
            with us. Real narratives, real impact
          </p>
        </div>
      </section>

      <div className="flex flex-col bg-woah p-8 relative mt-16 font-poppins md:flex-row max-w-[964px] mx-auto rounded justify-center items-center">
        <img
          className="w-[157px] h-[157px] lg:w-[273px] lg:h-[273px] rounded-full -mt-20 md:mt-0 basis-4/12"
          src="/assets/images/Ellipse 5.svg"
          alt=""
        />
        <section className="px-8">
          <p className="  text-white text-[26px] font-normal font-quantico mt-16 mb-2 lg:text-6xl md:mt-0">
            Woah.
          </p>
          <p className="text-sm font-normal leading-[23.03px] max-w-[484px] mr-auto lg:text-base relative font-poppins text-neutral-200">
            {`“The video is fantastic, and has been really well received by those
            I’ve shared it with. Our CEO described it is ‘sensational’ and said
            it made his day.”`}
            <img
              src="/assets/images/apo.svg"
              alt=""
              className="absolute right-[7%] -top-[28%]"
            />
          </p>
          <p className=" text-white text-base font-bold mt-6">Jane Doe</p>
          <p className=" text-white text-sm font-normal mt-0.5">
            SomeCompany LLC.
          </p>
          <p className=" text-[rgba(83,146,191,1)] text-sm font-normal mt-4">
            https://somecompanyllc.co
          </p>
        </section>
      </div>
      <div className="flex mt-10 mx-auto mb-24 justify-center">
        <div className="w-5 h-5 left-0 -0  bg-[#151515] rounded-full" />
        <div className="w-5 h-5 left-[29px] -0  bg-narrative rounded-full" />
        <div className="w-5 h-5 left-[58px] -0  bg-neutral-900 rounded-full" />
      </div>

      {/* Ready to transform banner */}

      <section className="w-full h-[279px] bg-narrative flex flex-col justify-center items-center">
        <h3 className="text-center text-black text-2xl font-bold font-inter mb-[14px] lg:text-[40px]">
          Ready to Transform your Narrative
        </h3>
        <p className="text-center  text-black text-base font-istok mb-3 lg:text-xl">
          Let's craft your story together. Reach out for a personalized
          consultation.
        </p>
        <button className="w-[210px] h-12 bg-white rounded-sm flex justify-center items-center mt-7">
          <a className=" text-black text-lg font-normal font-inter" href="#">
            Connect with Us
          </a>
        </button>
      </section>

      {/* Footer */}

      <footer className="flex flex-col md:flex-row items-center gap-5 mt-16 md:justify-between mx-8">
        <p className="text-lg md:text-xl font-normal bg-gradient-to-right text-transparent bg-clip-text">
          vividbloc.studio
        </p>
        <div className="flex flex-col md:flex-row gap-5 text-center text-white text-lg leading-tight">
          <a href="#">About Us</a>
          <a href="#">Our Craft</a>
          <a href="#">Blog</a>
          <a href="#">Contact</a>
        </div>
        <hr className="border-zinc-700 w-[320px] mx-auto mt-11 md:hidden" />

        {/* Socials */}

        <div className="flex gap-7 justify-center mt-16 pb-16">
          <a href="">
            <Image
              height={24}
              width={24}
              src="/assets/images/skill-icons_linkedin.svg"
              alt={""}
            />
          </a>
          <a href="">
            <Image
              height={24}
              width={24}
              src="/assets/images/line-md_twitter-x-alt.svg"
              alt={""}
            />
          </a>
          <a href="">
            <Image
              height={24}
              width={24}
              src="/assets/images/skill-icons_instagram.svg"
              alt={""}
            />
          </a>
        </div>
      </footer>
    </div>
  );
}