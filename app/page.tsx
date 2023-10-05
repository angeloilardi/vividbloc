import Image from "next/image";

export default function Home() {
  return (
    <div className="w-[393px] h-[3784px] relative bg-black">
      {/* Top image */}
      <div className="w-[393px] h-[607px] bg-top-page font-istok bg-cover bg-no-repeat rounded-b-[196px] relative">
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
            className="text-center w-[17.5px]"
          />
        </button>
        <img
          src="/assets/images/vividbloc studio.svg"
          alt=""
          className="left-[34px]  absolute top-[566px]"
        />
      </div>

      {/* Intro */}
      <div className="flex flex-col font-inter mt-12 ml-8 max-w-[300px] mb-24">
        <p className="text-white text-2xl font-bold">
          Where Your{" "}
          <span className="text-white text-2xl font-bold bg-highlight-right inline-block italic">
            Story Takes
          </span>
          <span className="text-white text-2xl font-bold bg-highlight-left italic">
            Center Stage
          </span>
        </p>
        <p className="text-white text-base font-normal mt-3">
          Changing the Conversation, One Frame at a Time
        </p>
        {/* Discover your story */}
        <p className=" text-white text-base font-normal font-istok mt-6">
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
        <div className="flex flex-col">
          <div className="left-[59px] -[948px]  text-white text-2xl font-bold">
            Who We Are
          </div>
          <div className="w-[279px] left-[59px] -[985px]  font-istok">
            <p className="text-neutral-200 text-lg font-normal  leading-snug">
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
            <div className="w-[302px] h-[174px] bg-picture-layover bg-cover -mt-6" />
          </div>
        </div>
      </div>

      {/* Our craft */}
      <div className="left-[28px] -[1488px]  text-white text-2xl font-bold mt-28 mb-16 ml-8">
        Our Craft
      </div>
      <div className="w-[392px] h-[297px]  left-0 -[1573px] bg-picture-layover-2 bg-cover relative">
        <div className="text-center text-neutral-200 text-xs font-normal before:opacity-50 absolute bottom-10 font-istok px-8">
          We don't just make videos; we craft narratives. From concept to final
          cut, we're committed to adding that 'extra layer' to every project.
        </div>
      </div>

      {/* Services */}

      <div className="font-istok flex flex-col">
        <div className="h-[59px] w-[392px] bg-violet-300 bg-opacity-10 flex justify-center items-center">
          <p className="text-violet-300 text-base font-normal">
            Video Production
          </p>
        </div>
        <div className="h-[59px] w-[392px] bg-yellow-100 bg-opacity-10 flex justify-center items-center">
          <p className="text-yellow-100 text-base font-normal">
            Talent Management
          </p>
        </div>
        <div className="h-[58px] w-[392px] bg-pink-300 bg-opacity-10 flex justify-center items-center">
          <p className="text-pink-300 text-base">Personal Branding</p>
        </div>
        <div className="h-[58px] w-[392px] bg-blue-700 bg-opacity-10 flex justify-center items-center">
          <p className="text-blue-700 text-base">Event Management</p>
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
        <div className="flex flex-col">
          <div className="left-[66px] -[2218px]  text-white text-2xl font-bold">
            Voices of Our Tribe
          </div>
          <div className="w-[279px] left-[66px] -[2255px]  text-neutral-200 text-lg font-normal  leading-snug">
            Meet the brands and individuals who've transformed their stories
            with us. Real narratives, real impact
          </div>
        </div>
      </div>

      <div className="flex flex-col bg-woah px-8 relative mt-16">
        <img
          className="w-[157px] h-[157px] rounded-full mx-auto -mt-20"
          src="/assets/images/Ellipse 5.svg"
        />
        <div className="px-8">
          <div className="  text-white text-[26px] font-normal font-quantico mt-20 mb-2">
            Woah.
          </div>
          <div className="w-[267px] h-[106px] text-neutral-200 text-sm font-normal font-poppins leading-[23.03px]">
            {`“The video is fantastic, and has been really well received by those
            I’ve shared it with. Our CEO described it is ‘sensational’ and said
            it made his day.”`}
          </div>
          <div className=" text-white text-base font-bold">Jane Doe</div>
          <div className=" text-white text-sm font-normal">
            SomeCompany LLC.
          </div>
          <div className=" text-blue-500 text-sm font-normal">
            https://somecompanyllc.co
          </div>
        </div>

        <div className="flex">
          <div className="w-5 h-5 left-0 -0  bg-neutral-900 rounded-full" />
          <div className="w-5 h-5 left-[29px] -0  bg-gradient-to-r from-blue-700 via-violet-300 to-yellow-100 rounded-full" />
          <div className="w-5 h-5 left-[58px] -0  bg-neutral-900 rounded-full" />
        </div>
      </div>

      {/* Ready transform */}
      <div className="w-[395px] h-[279px] left-[-1px] -[3087px]  bg-gradient-to-r from-blue-700 via-violet-300 to-yellow-100" />
      <div className="w-[291px] left-[51px] -[3125px]  text-center text-black text-2xl font-bold font-['Inter']">
        Ready to Transform your Narrative
      </div>
      <div className="w-[334px] left-[30px] -[3196px]  text-center text-black text-base">
        Let's craft your story together. Reach out for a personalized
        consultation.
      </div>
      <div className="w-[210px] h-12 left-[92px] -[3272px]  bg-white rounded-sm" />
      <div className="left-[126px] -[3285px]  text-black text-lg font-normal font-['Inter']">
        Connect with Us
      </div>

      {/* Footer */}

      <div className="flex flex-col">
        <p className="text-center text-white text-lg leading-tight">About Us</p>
        <p className="text-center text-white text-lg leading-tight">
          Our Craft
        </p>
        <p className="text-center text-white text-lg leading-tight"> Blog</p>
        <p className="text-center text-white text-lg leading-tight"> Contact</p>
      </div>
      <div className="w-6 h-6 left-[238px] -[3714px] ">
        <div className="w-6 h-6 left-0 -0 "></div>
      </div>
      <div className="w-6 h-6 left-[186px] -[3714px] " />
      <div className="w-6 h-6 left-[132px] -[3714px] ">
        <div className="w-6 h-6 left-0 -0 "></div>
      </div>
    </div>
  );
}
