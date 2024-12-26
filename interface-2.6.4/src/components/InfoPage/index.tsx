import React, { useState } from "react";
// import ThemeTexture from '../../assets/images/full-bg.png'

const InfoPage: React.FC = () => {
  
  const clients = [
    "client-01.svg",
    "client-02.svg",
    "client-03.svg",
    "client-04.svg",
    "client-05.svg",
    "client-06.svg",
  ];

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    // ======= Main Start =======
    <main style={{ backgroundImage: 'url(/theme/images/full-bg.png)' }}>
      {/* ======= Hero Start ======= */}
      <section id="home" className="pt-[165px]">
          <div className="container lg:max-w-[1305px] lg:px-10">
          <div className="-mx-4 flex flex-wrap items-center">
              <div className="w-full px-4 lg:w-5/12" style={{ textAlign: "center" }}>
              <div
                  className="wow fadeInUp mb-12 lg:mb-0 lg:max-w-[570px]"
                  data-wow-delay=".2s"
              >
                  <h1 className="mb-6 text-3xl font-bold leading-tight text-black dark:text-white sm:text-[40px] md:text-[50px] lg:text-[42px] xl:text-[50px]">
                  ApeFi<span className="inline bg-gradient-1 bg-clip-text text-transparent">Swap</span>
                  </h1>

                  <span className="mb-5 block text-lg font-medium leading-tight text-black dark:text-white sm:text-[22px] xl:text-[22px]">
                  Win in DeFi, Cheers with Ape.<br />
                  One-Stop-Shop decentralized Trading on APE CHAIN
                  </span>

                  <div className="flex flex-wrap items-center">
                  <a
                      href=""
                      className=""
                      style={{
                      width: "182px",
                      height: "50px",
                      background: "rgb(20, 216, 157)",
                      borderRadius: "25px",
                      display: "flex",
                      flexFlow: "row",
                      justifyContent: "center",
                      alignItems: "center",
                      fontFamily: "'SF Pro Display Bold'",
                      fontStyle: "normal",
                      fontWeight: 700,
                      fontSize: "18px",
                      color: "rgb(255, 255, 255)",
                      cursor: "pointer",
                      }}
                  >
                      Launch App
                  </a>
                  <a
                      href=""
                      className=""
                      style={{
                      marginLeft: "8px",
                      width: "182px",
                      height: "50px",
                      background: "rgb(20, 216, 157)",
                      borderRadius: "25px",
                      display: "flex",
                      flexFlow: "row",
                      justifyContent: "center",
                      alignItems: "center",
                      fontFamily: "'SF Pro Display Bold'",
                      fontStyle: "normal",
                      fontWeight: 700,
                      fontSize: "18px",
                      color: "rgb(255, 255, 255)",
                      cursor: "pointer",
                      }}
                  >
                      View Docs
                  </a>
                  </div>
              </div>
              </div>
              <div className="w-full px-4 lg:w-7/12">
              <div
                  className="wow fadeInUp relative z-10 mx-auto w-full max-w-[530px] pt-8 lg:mr-0"
                  data-wow-delay=".4s"
              >
                  <img
                  src="theme/images/banner-main.png"
                  alt="apefiswap image"
                  className="mx-auto max-w-full"
                  />
              </div>
              </div>
          </div>
          </div>
      </section>
      {/* ======= Hero End ======= */}

      {/* ======= Stats Start ======= */}                
      <section id="stats" className="relative pt-[150px]">
          <div className="container lg:max-w-[1120px]">
              <div>
              <div
                  className="-mx-4 flex flex-wrap items-center justify-between"
                  style={{
                  marginLeft: "-2rem",
                  marginRight: "-2rem",
                  backgroundColor: "white",
                  borderRadius: "10px",
                  borderStyle: "double",
                  borderWidth: "2px",
                  borderColor: "#08a88a",
                  }}
              >
                  <div className="w-full px-4 lg:w-1/2">
                  <div
                      className="wow fadeInUp relative z-10 mx-auto mb-14 w-full max-w-[470px] pb-6 lg:mx-0 lg:mb-0"
                      data-wow-delay=".2s"
                  >
                      <img
                      src="theme/images/graph-rise.gif"
                      alt="image"
                      className="mx-auto max-w-full"
                      />
                  </div>
                  </div>
                  <div className="w-full px-4 lg:w-1/2" style={{ textAlign: "center" }}>
                  <div>
                      <br />
                      <h5
                      className="mb-4 block text-lg font-medium text-primary md:text-[22px]"
                      style={{ marginBottom: "0.6rem" }}
                      >
                      $561.89K
                      </h5>
                      <p className="text-base text-body" style={{ marginBottom: "0.6rem" }}>
                      Total Value Locked
                      </p>
                      <hr style={{ color: "#08a88a" }} />
                      <br />
                  </div>

                  <div>
                      <h5
                      className="mb-4 block text-lg font-medium text-primary md:text-[22px]"
                      style={{ marginBottom: "0.6rem" }}
                      >
                      $561.89K
                      </h5>
                      <p className="text-base text-body" style={{ marginBottom: "0.6rem" }}>
                      Total Value Locked
                      </p>
                      <hr style={{ color: "#08a88a" }} />
                      <br />
                  </div>

                  <div>
                      <h5
                      className="mb-4 block text-lg font-medium text-primary md:text-[22px]"
                      style={{ marginBottom: "0.6rem" }}
                      >
                      $561.89K
                      </h5>
                      <p className="text-base text-body" style={{ marginBottom: "0.6rem" }}>
                      Total Value Locked
                      </p>
                      <hr style={{ color: "#08a88a" }} />
                      <br />
                  </div>

                  <div>
                      <h5
                      className="mb-4 block text-lg font-medium text-primary md:text-[22px]"
                      style={{ marginBottom: "0.6rem" }}
                      >
                      $561.89K
                      </h5>
                      <p className="text-base text-body" style={{ marginBottom: "0.6rem" }}>
                      Total Value Locked
                      </p>
                      <hr style={{ color: "#08a88a" }} />
                      <br />
                  </div>

                  <div>
                      <h5
                      className="mb-4 block text-lg font-medium text-primary md:text-[22px]"
                      style={{ marginBottom: "0.6rem" }}
                      >
                      $561.89K
                      </h5>
                      <p className="text-base text-body" style={{ marginBottom: "0.6rem" }}>
                      Total Value Locked
                      </p>
                      <br />
                  </div>
                  </div>
              </div>
              </div>
          </div>
      </section>             
      {/* ======= Stats End ======= */}     

      {/* ======= Features Start ======= */}
      <section id="features" className="relative z-10 pt-[110px]">
        <div className="container">
          <div
            className="wow fadeInUp mx-auto mb-14 max-w-[690px] text-center lg:mb-[70px]"
            data-wow-delay=".2s"
          >
            <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-[44px] md:leading-tight">
              Amazing features for to make your work easier
            </h2>
            <p className="text-base text-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam
              ante in maximus.
            </p>
          </div>
        </div>
        <div className="container max-w-[1390px]">
          <div className="rounded-2xl bg-white px-5 pt-14 pb-14 shadow-card dark:bg-dark dark:shadow-card-dark md:pb-1 lg:pt-20 lg:pb-5 xl:px-10">
            <div className="-mx-4 flex flex-wrap">
              <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                <div
                  className="wow fadeInUp group mx-auto mb-[60px] max-w-[310px] text-center"
                  data-wow-delay=".2s"
                >
                  <div className="mx-auto mb-8 flex h-[90px] w-[90px] items-center justify-center rounded-3xl bg-gray text-primary duration-300 group-hover:bg-primary group-hover:text-white dark:bg-[#2A2E44] dark:text-white dark:group-hover:bg-primary">
                    {/* SVG Icon */}
                    <svg
                      width="44"
                      height="44"
                      viewBox="0 0 44 44"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* SVG Content */}
                    </svg>
                  </div>
                  <h3 className="mb-4 text-xl font-semibold text-black dark:text-white sm:text-[22px] xl:text-[26px]">
                    Crafted for App Landing
                  </h3>
                  <p className="text-base text-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    convallis tortor.
                  </p>
                </div>
              </div>
              <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                <div
                  className="wow fadeInUp group mx-auto mb-[60px] max-w-[310px] text-center"
                  data-wow-delay=".3s"
                >
                  <div className="mx-auto mb-8 flex h-[90px] w-[90px] items-center justify-center rounded-3xl bg-gray text-primary duration-300 group-hover:bg-primary group-hover:text-white dark:bg-[#2A2E44] dark:text-white dark:group-hover:bg-primary">
                    {/* SVG Icon */}
                    <svg
                      width="44"
                      height="44"
                      viewBox="0 0 44 44"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* SVG Content */}
                    </svg>
                  </div>
                  <h3 className="mb-4 text-xl font-semibold text-black dark:text-white sm:text-[22px] xl:text-[26px]">
                    High-quality Design
                  </h3>
                  <p className="text-base text-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    convallis tortor.
                  </p>
                </div>
              </div>
              <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                <div
                  className="wow fadeInUp group mx-auto mb-[60px] max-w-[310px] text-center"
                  data-wow-delay=".4s"
                >
                  <div className="mx-auto mb-8 flex h-[90px] w-[90px] items-center justify-center rounded-3xl bg-gray text-primary duration-300 group-hover:bg-primary group-hover:text-white dark:bg-[#2A2E44] dark:text-white dark:group-hover:bg-primary">
                    {/* SVG Icon */}
                    <svg
                      width="44"
                      height="44"
                      viewBox="0 0 44 44"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* SVG Content */}
                    </svg>
                  </div>
                  <h3 className="mb-4 text-xl font-semibold text-black dark:text-white sm:text-[22px] xl:text-[26px]">
                    All Essential Sections
                  </h3>
                  <p className="text-base text-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    convallis tortor.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
       
        <div className="absolute top-0 right-0 -z-10">
          <svg width="602" height="1154" viewBox="0 0 602 1154" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.25" filter="url(#filter0_f_26_84)">
              <circle cx="577" cy="577" r="317" fill="url(#paint0_linear_26_84)" />
            </g>
            <defs>
              <filter id="filter0_f_26_84" x="0" y="0" width="1154" height="1154" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="130" result="effect1_foregroundBlur_26_84" />
              </filter>
              <linearGradient id="paint0_linear_26_84" x1="183.787" y1="894" x2="970.173" y2="346.491" gradientUnits="userSpaceOnUse">
                <stop stop-color="#8EA5FE" />
                <stop offset="0.541667" stop-color="#BEB3FD" />
                <stop offset="1" stop-color="#90D1FF" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute left-0 -bottom-1/2 -z-10 hidden md:block">
          <svg width="622" height="1236" viewBox="0 0 622 1236" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.2" filter="url(#filter0_f_26_85)">
              <circle cx="4" cy="618" r="368" fill="url(#paint0_linear_26_85)" />
            </g>
            <defs>
              <filter id="filter0_f_26_85" x="-614" y="0" width="1236" height="1236" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="125" result="effect1_foregroundBlur_26_85" />
              </filter>
              <linearGradient id="paint0_linear_26_85" x1="-364" y1="250" x2="506.12" y2="754.835" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FF8FE8" />
                <stop offset="1" stop-color="#FFC960" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>
      {/* ======= Features End ======= */}

      {/* ======= Tokenomics Start ======= */}
      <section id="tokenomics" className="relative pt-[150px]">
        <div className="container lg:max-w-[1120px]">
          <div>
            <span
              className="mb-4 block text-lg font-medium text-primary md:text-[22px]"
              style={{ textAlign: "center" }}
            >
              ApeFiSwap Tokenomics
            </span>
            <div
              className="-mx-4 flex flex-wrap items-center justify-between"
              style={{
                marginLeft: "-2rem",
                marginRight: "-2rem",
                backgroundColor: "white",
                borderRadius: "10px",
                borderStyle: "double",
                borderWidth: "2px",
                borderColor: "#08a88a",
              }}
            >
              {/* Left Image Section */}
              <div className="w-full px-4 lg:w-1/2">
                <div
                  className="wow fadeInUp relative z-10 mx-auto mb-14 w-full max-w-[470px] pb-6 lg:mx-0 lg:mb-0"
                  data-wow-delay=".2s"
                >
                  <img
                    src="theme/images/tokenomics.png"
                    alt="Tokenomics"
                    className=""
                    style={{ width: "100%" }}
                  />
                </div>
              </div>

              {/* Right Content Section */}
              <div
                className="w-full px-4 lg:w-1/2"
                style={{ textAlign: "center" }}
              >
                {/* Tokenomics Details */}
                {[
                  { percentage: "30%", label: "Liquidity Incentives" },
                  { percentage: "15%", label: "Team & Advisors" },
                  { percentage: "10%", label: "Ecosystem Fund" },
                  { percentage: "10%", label: "IDO (Public Sale)" },
                  { percentage: "10%", label: "Seed/Private Sale" },
                  { percentage: "15%", label: "Treasury" },
                  { percentage: "5%", label: "Airdrop/Community" },
                  { percentage: "5%", label: "Marketing & Partnerships" },
                ].map((item, index) => (
                  <div key={index}>
                    <h5
                      className="mb-4 block text-lg font-medium text-primary md:text-[22px]"
                      style={{ marginBottom: "0.6rem" }}
                    >
                      {item.percentage}
                    </h5>
                    <p
                      className="text-base text-body"
                      style={{ marginBottom: "0.6rem" }}
                    >
                      {item.label}
                    </p>
                    {index < 7 && <hr style={{ color: "#08a88a" }} />}
                    <br />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ======= Tokenomics End ======= */}

      {/* ======= Work Inprogress Start ======= */}
      <section id="work-process" className="relative z-10 pt-[110px]">
        <div className="container">
          <div
            className="wow fadeInUp mx-auto mb-14 max-w-[690px] text-center lg:mb-[70px]"
            data-wow-delay=".2s"
          >
            <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-[44px] md:leading-tight">
              How it Works?
            </h2>
            <p className="text-base text-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam
              ante in maximus.
            </p>
          </div>
        </div>
        <div className="container max-w-[1390px]">
          <div className="rounded-2xl bg-white px-5 pt-14 pb-14 shadow-card dark:bg-dark dark:shadow-card-dark md:pb-1 lg:pt-20 lg:pb-5 xl:px-10">
            <div className="-mx-4 flex flex-wrap justify-center">
              {/* Step 1 */}
              <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                <div
                  className="wow fadeInUp group mx-auto mb-[60px] max-w-[310px] text-center"
                  data-wow-delay=".2s"
                >
                  <div className="mx-auto mb-8 flex h-[90px] w-[90px] items-center justify-center rounded-3xl bg-gray text-primary duration-300 group-hover:bg-primary group-hover:text-white dark:bg-[#2A2E44] dark:text-white dark:group-hover:bg-primary">
                    <span className="text-xl font-bold">ICON 1</span>
                  </div>
                  <h3 className="mb-4 text-xl font-semibold text-black dark:text-white sm:text-[22px] xl:text-[26px]">
                    Install the App
                  </h3>
                  <p className="text-base text-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    convallis tortor.
                  </p>
                </div>
              </div>
              {/* Step 2 */}
              <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                <div
                  className="wow fadeInUp group mx-auto mb-[60px] max-w-[310px] text-center"
                  data-wow-delay=".3s"
                >
                  <div className="mx-auto mb-8 flex h-[90px] w-[90px] items-center justify-center rounded-3xl bg-gray text-primary duration-300 group-hover:bg-primary group-hover:text-white dark:bg-[#2A2E44] dark:text-white dark:group-hover:bg-primary">
                    <span className="text-xl font-bold">ICON 2</span>
                  </div>
                  <h3 className="mb-4 text-xl font-semibold text-black dark:text-white sm:text-[22px] xl:text-[26px]">
                    Create an Account
                  </h3>
                  <p className="text-base text-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    convallis tortor.
                  </p>
                </div>
              </div>
              {/* Step 3 */}
              <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                <div
                  className="wow fadeInUp group mx-auto mb-[60px] max-w-[310px] text-center"
                  data-wow-delay=".4s"
                >
                  <div className="mx-auto mb-8 flex h-[90px] w-[90px] items-center justify-center rounded-3xl bg-gray text-primary duration-300 group-hover:bg-primary group-hover:text-white dark:bg-[#2A2E44] dark:text-white dark:group-hover:bg-primary">
                    <span className="text-xl font-bold">ICON 3</span>
                  </div>
                  <h3 className="mb-4 text-xl font-semibold text-black dark:text-white sm:text-[22px] xl:text-[26px]">
                    Start Using the App
                  </h3>
                  <p className="text-base text-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    convallis tortor.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ======= Work Inprogress End ======= */}

      {/* ======= FAQ Start ======= */}
      <section id="faq" className="relative z-10 bg-[#F8FAFB] py-[110px] dark:bg-[#15182B]">
        <div className="container">
          <div
            className="wow fadeInUp mx-auto mb-14 max-w-[690px] text-center lg:mb-[70px]"
            data-wow-delay=".2s"
          >
            <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-[44px] md:leading-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-base text-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec
              vitae tortor lacus. Phasellus aliquam ante in maximus.
            </p>
          </div>
          <div
            className="faqs wow fadeInUp mx-auto w-full max-w-[785px] rounded-lg bg-white px-6 py-[6px] shadow-card dark:bg-black dark:shadow-card-dark"
            data-wow-delay=".3s"
          >
            {/* FAQ 1 */}
            <div className="faq border-b border-stroke last-of-type:border-none dark:border-stroke-dark">
              <button className="faq-btn relative flex w-full justify-between py-6 px-[18px] text-left text-base font-medium text-black dark:text-white sm:px-[26px] sm:text-lg">
                What is ApeFiSwap
              </button>
              <div className="faq-content h-auto overflow-hidden border-t border-stroke px-[18px] dark:border-stroke-dark sm:px-[26px]">
                <p className="text-base text-body">
                  ApeFiSwap is a decentralized exchange running on ApeChain, with lots of features
                  that let you earn and win tokens. It is fast, affordable and easily accessible as it
                  is not difficult to use.
                </p>
              </div>
            </div>
            {/* FAQ 2 */}
            <div className="faq border-b border-stroke last-of-type:border-none dark:border-stroke-dark">
              <button className="faq-btn relative flex w-full justify-between py-6 px-[18px] text-left text-base font-medium text-black dark:text-white sm:px-[26px] sm:text-lg">
                Lorem ipsum dolor sit amet, consectetur.
              </button>
              <div className="faq-content h-auto overflow-hidden border-t border-stroke px-[18px] dark:border-stroke-dark sm:px-[26px]">
                <p className="text-base text-body">
                  We provide digital experience services to startups and small businesses. We help our
                  clients succeed by creating brand identities, digital experiences. Praesent vel nibh
                  a tellus dictum gravida sed tempor nunc.
                </p>
              </div>
            </div>
            {/* FAQ 3 */}
            <div className="faq border-b border-stroke last-of-type:border-none dark:border-stroke-dark">
              <button className="faq-btn relative flex w-full justify-between py-6 px-[18px] text-left text-base font-medium text-black dark:text-white sm:px-[26px] sm:text-lg">
                Lorem ipsum dolor sit amet, consectetur.
              </button>
              <div className="faq-content h-auto overflow-hidden border-t border-stroke px-[18px] dark:border-stroke-dark sm:px-[26px]">
                <p className="text-base text-body">
                  We provide digital experience services to startups and small businesses. We help our
                  clients succeed by creating brand identities, digital experiences. Praesent vel nibh
                  a tellus dictum gravida sed tempor nunc.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Graphics */}
        <div className="absolute right-0 -top-24 -z-10">
          <svg width="95" height="190" viewBox="0 0 95 190" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="95" cy="95" r="77" stroke="url(#paint0_linear_49_603)" strokeWidth="36" />
            <defs>
              <linearGradient
                id="paint0_linear_49_603"
                x1="0"
                y1="0"
                x2="224.623"
                y2="130.324"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FF8FE8" />
                <stop offset="1" stopColor="#FFC960" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute left-0 -bottom-24 -z-10">
          <svg width="95" height="190" viewBox="0 0 95 190" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cy="95" r="77" stroke="url(#paint0_linear_52_83)" strokeWidth="36" />
            <defs>
              <linearGradient
                id="paint0_linear_52_83"
                x1="-117.84"
                y1="190"
                x2="117.828"
                y2="25.9199"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#8EA5FE" />
                <stop offset="0.541667" stopColor="#BEB3FD" />
                <stop offset="1" stopColor="#90D1FF" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>
      {/* ======= FAQ End ======= */}

      {/* ======= Blog Start ======= */}
      <section id="blog" className="pt-[110px] pb-[60px]">
        <div className="container">
          <div
            className="wow fadeInUp mx-auto mb-14 max-w-[690px] text-center lg:mb-[70px]"
            data-wow-delay=".2s"
          >
            <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-[44px] md:leading-tight">
              Partners
            </h2>
          </div>
        </div>
        <div className="container overflow-hidden lg:max-w-[1250px]">
          <div className="-mx-4 flex flex-wrap justify-center md:-mx-7 lg:-mx-5 xl:-mx-[35px]">
            {/* Partner 1 */}
            <div className="w-full px-4 md:w-1/4 md:px-7 lg:w-1/4 lg:px-5 xl:px-[35px]">
              <div className="wow fadeInUp mb-10" data-wow-delay=".2s">
                <div className="relative overflow-hidden rounded">
                  <img
                    src="theme/images/blog-01.jpg"
                    alt="blog post"
                    className="w-full object-cover object-center"
                  />
                </div>
              </div>
            </div>

            {/* Partner 2 */}
            <div className="w-full px-4 md:w-1/4 md:px-7 lg:w-1/4 lg:px-5 xl:px-[35px]">
              <div className="wow fadeInUp mb-10" data-wow-delay=".2s">
                <div className="relative overflow-hidden rounded">
                  <img
                    src="theme/images/blog-01.jpg"
                    alt="blog post"
                    className="w-full object-cover object-center"
                  />
                </div>
              </div>
            </div>

            {/* Partner 3 */}
            <div className="w-full px-4 md:w-1/4 md:px-7 lg:w-1/4 lg:px-5 xl:px-[35px]">
              <div className="wow fadeInUp mb-10" data-wow-delay=".2s">
                <div className="relative overflow-hidden rounded">
                  <img
                    src="theme/images/blog-01.jpg"
                    alt="blog post"
                    className="w-full object-cover object-center"
                  />
                </div>
              </div>
            </div>

            {/* Partner 4 */}
            <div className="w-full px-4 md:w-1/4 md:px-7 lg:w-1/4 lg:px-5 xl:px-[35px]">
              <div className="wow fadeInUp mb-10" data-wow-delay=".2s">
                <div className="relative overflow-hidden rounded">
                  <img
                    src="theme/images/blog-01.jpg"
                    alt="blog post"
                    className="w-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ======= Blog End ======= */}

      {/* ======= Clients Start ======= */}          
      <section className="relative z-10 bg-[#F8FAFB] pt-[70px] pb-[50px] dark:bg-[#15182B]">
        <div className="wow fadeInUp container overflow-hidden lg:max-w-[1200px]" data-wow-delay=".2s">
          <div className="-mx-4 flex flex-wrap items-center justify-center">
            {clients.map((client, index) => (
              <div
                key={index}
                className="w-1/2 px-4 sm:w-1/3 md:w-1/4 lg:w-1/6"
              >
                <div className="mb-5 text-center">
                  <a href="javascript:void(0)" className="block">
                    <img
                      src={`theme/images/${client}`}
                      alt={`client ${index + 1}`}
                      className="mx-auto max-w-full opacity-[65%] hover:opacity-100"
                    />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> 
      {/* ======= Clients End ======= */}    

      {/* ======= Contact Start ======= */}   
      <section id="support" className="pt-[100px] pb-[110px]">
        <div className="container">
          <div
            className="wow fadeInUp mx-auto mb-10 max-w-[690px] text-center"
            data-wow-delay=".2s"
          >
            <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-[44px] md:leading-tight">
              Let's Stay Connected
            </h2>
            <p className="text-base text-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis
              tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in
              maximus.
            </p>
          </div>
        </div>
        <div className="container">
          <div
            className="wow fadeInUp mx-auto w-full max-w-[925px] rounded-lg bg-[#F8FAFB] px-8 py-10 shadow-card dark:bg-[#15182B] dark:shadow-card-dark sm:px-10"
            data-wow-delay=".3s"
          >
            <form onSubmit={handleSubmit}>
              <div className="-mx-[22px] flex flex-wrap">
                <div className="w-full px-[22px] md:w-1/2">
                  <div className="mb-8">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className="w-full rounded border border-stroke bg-white py-4 px-[30px] text-base text-body outline-none focus:border-primary dark:border-[#34374A] dark:bg-[#2A2E44] dark:focus:border-primary"
                    />
                  </div>
                </div>
                <div className="w-full px-[22px] md:w-1/2">
                  <div className="mb-8">
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Company (optional)"
                      className="w-full rounded border border-stroke bg-white py-4 px-[30px] text-base text-body outline-none focus:border-primary dark:border-[#34374A] dark:bg-[#2A2E44] dark:focus:border-primary"
                    />
                  </div>
                </div>
                <div className="w-full px-[22px] md:w-1/2">
                  <div className="mb-8">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter Your email"
                      className="w-full rounded border border-stroke bg-white py-4 px-[30px] text-base text-body outline-none focus:border-primary dark:border-[#34374A] dark:bg-[#2A2E44] dark:focus:border-primary"
                    />
                  </div>
                </div>
                <div className="w-full px-[22px] md:w-1/2">
                  <div className="mb-8">
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your Phone Number"
                      className="w-full rounded border border-stroke bg-white py-4 px-[30px] text-base text-body outline-none focus:border-primary dark:border-[#34374A] dark:bg-[#2A2E44] dark:focus:border-primary"
                    />
                  </div>
                </div>
                <div className="w-full px-[22px]">
                  <div className="mb-8">
                    <textarea
                      rows={6}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about yourself"
                      className="w-full rounded border border-stroke bg-white py-4 px-[30px] text-base text-body outline-none focus:border-primary dark:border-[#34374A] dark:bg-[#2A2E44] dark:focus:border-primary"
                    />
                  </div>
                </div>
                <div className="w-full px-[22px]">
                  <div className="text-center">
                    <p className="mb-5 text-center text-base text-body">
                      By clicking the contact us button, you agree to our terms and
                      policy.
                    </p>
                    <button
                      type="submit"
                      className="inline-block rounded-md bg-primary py-[14px] px-11 text-base font-medium text-white hover:bg-opacity-90"
                    >
                      Contact Us
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
      {/* ======= Contact End ======= */}   

    </main>
  );
};
export default InfoPage;
