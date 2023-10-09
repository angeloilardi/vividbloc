import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-full relative bg-black">
      {/* Top image */}
      <div className="w-full h-[607px] bg-top-page font-istok bg-cover bg-no-repeat rounded-b-[196px] md:rounded-l-[404px] md:rounded-b-[0px] md:bg-top-page-lg md:max-w-[892px] relative bg-center md:border-b-0 md:ml-auto lg:h-[807px]">
        <div className="flex pt-10 justify-between">
          <h1 className="text-lg font-normal bg-logo-gradient inline-block text-transparent bg-clip-text ml-6">
            vividbloc.studio
          </h1>
          <button className="text-white text-lg font-normal mr-8 justify-self-center">
            Menu
          </button>
        </div>
        <button
          className="w-[53px] h-[53px]  bg-ellipse-2 rounded-full flex flex-wrap
    justify-center content-center left-[50%] absolute top-[50%]"
        >
          <img
            src="/assets/images/Polygon 1.svg"
            alt=""
            className=" w-[17.5px]"
          />
        </button>
      </div>

      {/* Intro */}
      <img
        src="/assets/images/vividbloc studio.svg"
        alt=""
        className="left-[34px] absolute top-[566px] md:top-[262px] md:left-[108px] lg:w-[291px] lg:h-[150px]"
      />

      <div className="flex flex-col font-inter -mt-8 z-10 ml-8 max-w-[300px] mb-24 md:max-w-full lg:top-[380px] lg:left-[108px] lg:absolute lg:ml-0">
        {/* <img src="/assets/images/vividbloc studio.svg" alt="" className="w-[112px] h-[58px] absolute z-10 md:w-[291px] md:h-[150px]" /> */}
        <div className="text-white text-2xl font-bold mt-24 xl:text-[40px] xl:bg-none">
          <p>
            Where Your{" "}
            <span className="bg-highlight-right inline-block italic xl:bg-none xl:not-italic">
              Story Takes
            </span>
            <span className="hidden md:inline-block">&nbsp;</span>
            <span className="bg-highlight-left italic xl:bg-none xl:not-italic">
              Center Stage
            </span>
          </p>
        </div>
        <p className="text-white text-base font-normal mt-3 xl:text-2xl">
          Changing the Conversation, One Frame at a Time
        </p>
        {/* Discover your story */}
        <p className=" text-white text-base font-normal font-istok mt-6 xl:text-xl">
          Discover Your Story
        </p>
        <div className="w-[142px] h-px left-[34px] -[817px]  bg-gradient-to-r from-blue-700 via-violet-300 to-yellow-100" />
      </div>

      {/* Who we are */}
      <div className="flex">
        <div className="flex flex-col basis-1/12 flex-wrap w-[59px] justify-start">
          <div className="origin-top-left -rotate-90 text-white text-xs font-normal mt-20 w-[80px] ml-[29px]">
            ABOUT US
          </div>
          <div className="h-[89px] w-px  bg-gradient-to-r from-blue-700 via-violet-300 to-yellow-100 ml-[32px]" />
        </div>
        <div className="flex flex-col mr-[54px]">
          <div className="text-white text-2xl font-bold">Who We Are</div>
          <div className="mt-2 text-lg xl:text-xl">
            <p className="text-neutral-200  font-normal max-w-[729px] font-istok leading-snug">
              Welcome to{" "}
              <span className="text-lg font-normal bg-logo-gradient inline-block text-transparent bg-clip-text leading-snug">
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

            {/* <div className="w-[302px] h-[174px] bg-picture-layover bg-cover -mt-6" /> */}
          </div>
        </div>
      </div>
      {/* <div className="w-full h-0 max-w-[603px] bg-picture-layover bg-cover max-h-[350px] -mt-6 ml-auto pt-[66.65%]" /> */}
      <div className="w-[302px] h-[174px] max-w-[603px] bg-picture-layover bg-cover max-h-[350px] -mt-6 ml-auto md:w-[602px] md:h-[350px] mr-[8.15%] md:-mt-24" />

      {/* Our craft */}
      <div className="left-[28px] -[1488px]  text-white text-2xl font-bold mt-28 mb-16 ml-8">
        Our Craft
      </div>
      <div className="w-[392px] mx-auto h-[297px] bg-picture-layover-2 bg-cover relative  md:hidden">
        <p className=" text-neutral-200 text-xs font-normal before:opacity-50 absolute bottom-10 font-istok px-8">
          We don't just make videos; we craft narratives. From concept to final
          cut, we're committed to adding that 'extra layer' to every project.
        </p>
      </div>

      {/* Services */}

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

      <div className="flex invisible md:visible">
        <div className="after:bg-video-prod mix-blend-normal relative after:absolute after:h-full after:w-full  after:top-0 after:left-0">
          <img src="/assets/images/Rectangle 36.png" alt="" className="" />
          <p className="z-10 text-white -mb-24">Video Production</p>
        </div>
        <div className="after:bg-other-crafts mix-blend-normal relative after:absolute after:h-full after:w-full after:top-0 after:left-0">
          <img src="/assets/images/Rectangle 37.png" alt="" className="" />
          <p></p>
        </div>
        <div className="after:bg-other-crafts mix-blend-normal relative after:absolute after:h-full after:w-full after:top-0 after:left-0">
          <img src="/assets/images/Rectangle 38.png" alt="" className="" />
          <p></p>
        </div>
        <div className="after:bg-other-crafts mix-blend-normal relative after:absolute after:h-full after:w-full after:top-0 after:left-0">
          <img src="/assets/images/Rectangle 39.png" alt="" className="" />
          <p></p>
        </div>
      </div>

      {/* Testimonials */}
      <div className="flex mt-24 mb-10">
        <div className="flex flex-col basis-1/12 flex-wrap w-[59px] justify-start">
          <div className="origin-top-left -rotate-90 text-white text-xs font-normal mt-24 w-[80px] ml-[29px]">
            TESTIMONIALS
          </div>
          <div className="h-[89px] w-px  bg-gradient-to-r from-blue-700 via-violet-300 to-yellow-100 ml-[32px]" />
        </div>
        <div className="flex flex-col max-w-[729px] ">
          <div className=" text-white text-2xl font-bold">
            Voices of Our Tribe
          </div>
          <div className=" text-neutral-200 text-lg font-normal leading-snug">
            Meet the brands and individuals who've transformed their stories
            with us. Real narratives, real impact
          </div>
        </div>
      </div>

      <div className="flex flex-col bg-woah px-8 relative mt-16 font-poppins md:flex-row items-center max-w-[964px] mx-auto">
        <img
          className="w-[157px] h-[157px] rounded-full mx-auto -mt-20 md:mt-0"
          src="/assets/images/Ellipse 5.svg"
        />
        <div className="px-8">
          <div className="  text-white text-[26px] font-normal font-quantico mt-16 mb-2">
            Woah.
          </div>
          <img
            src="/assets/images/apo.svg"
            alt=""
            className="absolute left-[30%] top-[28%]"
          />
          <div className="text-[#E5E5E5] text-sm font-normal leading-[23.03px]">
            {`“The video is fantastic, and has been really well received by those
            I’ve shared it with. Our CEO described it is ‘sensational’ and said
            it made his day.”`}
          </div>
          <div className=" text-white text-base font-bold mt-6">Jane Doe</div>
          <div className=" text-white text-sm font-normal mt-0.5">
            SomeCompany LLC.
          </div>
          <div className=" text-[rgba(83,146,191,1)] text-sm font-normal mt-4">
            https://somecompanyllc.co
          </div>
        </div>
      </div>

      <div className="flex mt-10 mx-auto mb-24 justify-center">
        <div className="w-5 h-5 left-0 -0  bg-[#151515] rounded-full" />
        <div className="w-5 h-5 left-[29px] -0  bg-narrative rounded-full" />
        <div className="w-5 h-5 left-[58px] -0  bg-neutral-900 rounded-full" />
      </div>

      {/* Ready transform */}
      <div className="w-full h-[279px] bg-narrative flex flex-col justify-center items-center">
        <p className="w-[291px] left-[51px] -[3125px] text-center text-black text-2xl font-bold font-inter">
          Ready to Transform your Narrative
        </p>
        <div className="w-[334px] left-[30px] -[3196px] text-center  text-black text-base font-istok mb-3">
          Let's craft your story together. Reach out for a personalized
          consultation.
        </div>
        <div className="w-[210px] h-12 bg-white rounded-sm flex justify-center items-center mt-7">
          <p className=" text-black text-lg font-normal font-inter ">
            Connect with Us
          </p>
        </div>
      </div>

      {/* Footer */}

      <div className="flex flex-col md:flex-row items-center gap-5 mt-16 md:justify-between mx-8">
        <h1 className="text-lg font-normal bg-logo-gradient text-transparent bg-clip-text">
          vividbloc.studio
        </h1>
        <div className="flex flex-col md:flex-row gap-5 text-center">
          <p className=" text-white text-lg leading-tight">About Us</p>
          <p className=" text-white text-lg leading-tight">Our Craft</p>
          <p className=" text-white text-lg leading-tight"> Blog</p>
          <p className=" text-white text-lg leading-tight"> Contact</p>
        </div>
        <hr className="border-zinc-700 w-[320px] mx-auto mt-11 md:hidden" />
        <div className="flex gap-7 justify-center mt-16 pb-16">
          <a href="">
            <img
              className="w-6 h-6"
              src="/assets/images/skill-icons_linkedin.svg"
            />
          </a>
          <a href="">
            <img
              className="w-6 h-6"
              src="/assets/images/line-md_twitter-x-alt.svg"
            />
          </a>
          <a href="">
            <img
              className="w-6 h-6"
              src="/assets/images/skill-icons_instagram.svg"
            />
          </a>
        </div>
      </div>

      {/* Socials */}
    </div>
  );
}
