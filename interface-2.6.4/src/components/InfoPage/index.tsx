import React, { useState } from "react";

const InfoPage: React.FC = () => {

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
            <div className="w-full px-4 lg:w-5/12" style={{ textAlign: 'center' }}>
              <div
                className="wow fadeInUp mb-12 lg:mb-0 lg:max-w-[570px]"
                data-wow-delay=".2s"
              >
                <h1
                  className="mb-6 text-3xl font-bold leading-tight text-black dark:text-white sm:text-[40px] md:text-[50px] lg:text-[42px] xl:text-[50px]"
                  style={{
                    fontSize: '40px',
                    lineHeight: 'normal',
                  }}
                >
                  Welcome To{' '}
                  <span
                    className="inline bg-gradient-1 bg-clip-text text-transparent"
                    style={{ fontFamily: 'cursive' }}
                  >
                    ApeFiSwap
                  </span>
                </h1>
                <span className="mb-5 block text-lg font-medium leading-tight text-black dark:text-white sm:text-[22px] xl:text-[22px]">
                  <i>Ride the DeFi Wave, Swing with ApeFiSwap!</i>
                  <br /> Your All-in-One Decentralized Trading Hub on Ape Chain.
                </span>
                <div className="flex flex-wrap items-center">
                  <a
                    href=""
                    className=""
                    style={{
                      width: '20%',
                      height: '50px',
                      display: 'flex',
                      flexFlow: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                      fontFamily: "'SF Pro Display Bold'",
                      fontStyle: 'normal',
                      fontWeight: 700,
                      fontSize: '18px',
                      color: 'rgb(255, 255, 255)',
                      cursor: 'pointer',
                    }}
                  ></a>
                  <a
                    href=""
                    className=""
                    style={{
                      width: '30%',
                      height: '50px',
                      background: 'rgb(46 171 71)',
                      borderRadius: '25px',
                      display: 'flex',
                      flexFlow: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                      fontFamily: "'SF Pro Display Bold'",
                      fontStyle: 'normal',
                      fontWeight: 700,
                      fontSize: '18px',
                      color: 'rgb(255, 255, 255)',
                      cursor: 'pointer',
                    }}
                  >
                    Launch App
                  </a>
                  <a
                    href="https://apefiswap.gitbook.io/apefiswap"
                    className=""
                    style={{
                      width: '30%',
                      marginLeft: '8px',
                      height: '50px',
                      background: 'rgb(46 171 71)',
                      borderRadius: '25px',
                      display: 'flex',
                      flexFlow: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                      fontFamily: "'SF Pro Display Bold'",
                      fontStyle: 'normal',
                      fontWeight: 700,
                      fontSize: '18px',
                      color: 'rgb(255, 255, 255)',
                      cursor: 'pointer',
                    }}
                  >
                    View Docs
                  </a>
                  <a
                    href=""
                    className=""
                    style={{
                      width: '20%',
                      height: '50px',
                      display: 'flex',
                      flexFlow: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                      fontFamily: "'SF Pro Display Bold'",
                      fontStyle: 'normal',
                      fontWeight: 700,
                      fontSize: '18px',
                      color: 'rgb(255, 255, 255)',
                      cursor: 'pointer',
                    }}
                  ></a>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-7/12">
              <div
                className="wow fadeInUp relative z-10 mx-auto w-full max-w-[530px] pt-8 lg:mr-0"
                style={{ width: '70%', zIndex: 2 }}
                data-wow-delay=".4s"
              >
                <img
                  src="theme/images/sidefile.webp"
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
                      $0.00K
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
                      0
                      </h5>
                      <p className="text-base text-body" style={{ marginBottom: "0.6rem" }}>
                      Total Pools
                      </p>
                      <hr style={{ color: "#08a88a" }} />
                      <br />
                  </div>

                  <div>
                      <h5
                      className="mb-4 block text-lg font-medium text-primary md:text-[22px]"
                      style={{ marginBottom: "0.6rem" }}
                      >
                      $0.00K
                      </h5>
                      <p className="text-base text-body" style={{ marginBottom: "0.6rem" }}>
                      Market Cap
                      </p>
                      <hr style={{ color: "#08a88a" }} />
                      <br />
                  </div>

                  <div>
                      <h5
                      className="mb-4 block text-lg font-medium text-primary md:text-[22px]"
                      style={{ marginBottom: "0.6rem" }}
                      >
                      $0.00K
                      </h5>
                      <p className="text-base text-body" style={{ marginBottom: "0.6rem" }}>
                      Total Minted
                      </p>
                      <hr style={{ color: "#08a88a" }} />
                      <br />
                  </div>

                  <div>
                      <h5
                      className="mb-4 block text-lg font-medium text-primary md:text-[22px]"
                      style={{ marginBottom: "0.6rem" }}
                      >
                      $0.00K
                      </h5>
                      <p className="text-base text-body" style={{ marginBottom: "0.6rem" }}>
                      Total Burned
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
            <br/>
            <br/>
            <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-[44px] md:leading-tight"
             style={{
              fontFamily: 'cursive'
            }} 
            >
              Amazing features for to make your work easier
            </h2>            
          </div>
        </div>


        <div className="container max-w-[1390px]">
          <div className="rounded-2xl bg-white px-5 pt-14 pb-14 shadow-card dark:bg-dark dark:shadow-card-dark md:pb-1 lg:pt-20 lg:pb-5 xl:px-10">
            <div className="-mx-4 flex flex-wrap">
              <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                <div className="wow fadeInUp group mx-auto mb-[60px] max-w-[310px] text-center" data-wow-delay=".2s">
                  <div className="mx-auto mb-8 flex h-[90px] w-[90px] items-center justify-center rounded-3xl bg-gray text-primary duration-300 group-hover:bg-primary group-hover:text-white dark:bg-[#2A2E44] dark:text-white dark:group-hover:bg-primary">
                    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_28_4)">
                        <path d="M22 3.66675C32.1255 3.66675 40.3333 11.8746 40.3333 22.0001C40.3333 32.1256 32.1255 40.3334 22 40.3334C11.8745 40.3334 3.66666 32.1256 3.66666 22.0001C3.66666 11.8746 11.8745 3.66675 22 3.66675ZM22 7.33341C18.1101 7.33341 14.3796 8.87865 11.6291 11.6292C8.87856 14.3797 7.33332 18.1102 7.33332 22.0001C7.33332 25.8899 8.87856 29.6204 11.6291 32.371C14.3796 35.1215 18.1101 36.6667 22 36.6667C25.8898 36.6667 29.6204 35.1215 32.3709 32.371C35.1214 29.6204 36.6667 25.8899 36.6667 22.0001C36.6667 18.1102 35.1214 14.3797 32.3709 11.6292C29.6204 8.87865 25.8898 7.33341 22 7.33341ZM16.1755 28.1289L14.7272 30.6406C14.6282 30.8125 14.4964 30.9632 14.3392 31.0842C14.182 31.2051 14.0025 31.2939 13.811 31.3455C13.6194 31.3971 13.4196 31.4104 13.2229 31.3848C13.0263 31.3592 12.8366 31.295 12.6647 31.1961C12.4928 31.0971 12.342 30.9653 12.2211 30.8081C12.1001 30.6509 12.0113 30.4714 11.9597 30.2799C11.9082 30.0884 11.8948 29.8886 11.9204 29.6919C11.9461 29.4952 12.0102 29.3055 12.1092 29.1336L13.189 27.2709C14.399 26.8932 15.3908 27.1829 16.1755 28.1289ZM24.2183 15.8767L28.6605 23.5657H32.5857C32.7838 23.565 32.9802 23.6035 33.1635 23.6789C33.3468 23.7544 33.5133 23.8653 33.6535 24.0054C33.7938 24.1455 33.9049 24.3119 33.9806 24.495C34.0563 24.6782 34.095 24.8746 34.0945 25.0727C34.0952 25.2711 34.0567 25.4676 33.9811 25.651C33.9055 25.8344 33.7944 26.001 33.6542 26.1413C33.5139 26.2815 33.3473 26.3926 33.1639 26.4682C32.9805 26.5438 32.784 26.5823 32.5857 26.5816H30.404L31.8762 29.1317C32.0627 29.4778 32.107 29.8829 31.9996 30.2611C31.8922 30.6393 31.6416 30.9607 31.3011 31.1572C30.9605 31.3536 30.5568 31.4095 30.1757 31.313C29.7946 31.2166 29.4661 30.9753 29.26 30.6406L23.6867 20.9862C22.4217 18.8046 23.3237 16.6174 24.2183 15.8767ZM24.728 10.2961C25.4522 10.7104 25.696 11.6344 25.2817 12.3586L18.8137 23.5584H23.4942C25.0085 23.5584 25.8592 25.3404 25.201 26.5742H11.4877C11.2895 26.5747 11.0931 26.536 10.91 26.4603C10.7268 26.3847 10.5604 26.2735 10.4203 26.1333C10.2803 25.9931 10.1693 25.8265 10.0939 25.6433C10.0184 25.46 9.97993 25.2636 9.98066 25.0654C9.98017 24.8674 10.0188 24.6712 10.0944 24.4881C10.1699 24.3051 10.2809 24.1388 10.421 23.9987C10.561 23.8587 10.7273 23.7477 10.9104 23.6721C11.0934 23.5966 11.2896 23.5579 11.4877 23.5584H15.3322L20.2547 15.0279L18.7183 12.3586C18.5318 12.0125 18.4875 11.6074 18.5949 11.2292C18.7023 10.851 18.9528 10.5296 19.2934 10.3332C19.6339 10.1368 20.0376 10.0808 20.4188 10.1773C20.7999 10.2738 21.1284 10.515 21.3345 10.8497L21.9927 12.0102L22.6655 10.8497C22.7644 10.6779 22.8963 10.5271 23.0536 10.4063C23.2108 10.2854 23.3904 10.1967 23.5819 10.1453C23.7735 10.0938 23.9733 10.0807 24.17 10.1066C24.3666 10.1325 24.5562 10.1968 24.728 10.2961Z" fill="currentColor" />
                      </g>
                      <defs>
                        <clipPath id="clip0_28_4">
                          <rect width="44" height="44" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <h3 className="mb-4 text-xl font-semibold text-black dark:text-white sm:text-[22px] xl:text-[26px]"> Lightning-Fast Transactions </h3>
                  <p className="text-base text-body"> Optimized for instant order execution Powered by the Ape Blockchain's Speed. Also, Cost-efficient transactions with minimal gas fees in $APE. as well as Seamless sync of token balances, prices and transaction Confirmations. </p>
                </div>
              </div>
              <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                <div className="wow fadeInUp group mx-auto mb-[60px] max-w-[310px] text-center" data-wow-delay=".3s">
                  <div className="mx-auto mb-8 flex h-[90px] w-[90px] items-center justify-center rounded-3xl bg-gray text-primary duration-300 group-hover:bg-primary group-hover:text-white dark:bg-[#2A2E44] dark:text-white dark:group-hover:bg-primary">
                    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_211_934)">
                        <path d="M23.2007 4.24461L38.2241 13.2576C38.3511 13.3337 38.4562 13.4413 38.5292 13.5701C38.6022 13.6989 38.6406 13.8444 38.6406 13.9924C38.6406 14.1405 38.6022 14.286 38.5292 14.4147C38.4562 14.5435 38.3511 14.6512 38.2241 14.7272L22.3203 24.2695L6.41652 14.7272C6.28951 14.6512 6.18437 14.5435 6.11137 14.4147C6.03837 14.286 6 14.1405 6 13.9924C6 13.8444 6.03837 13.6989 6.11137 13.5701C6.18437 13.4413 6.28951 13.3337 6.41652 13.2576L21.4382 4.24461C21.7046 4.08456 22.0095 4 22.3203 4C22.6311 4 22.936 4.08456 23.2024 4.24461H23.2007Z" fill="currentColor" />
                        <path d="M36.1653 19.9874L38.2241 21.2224C38.3512 21.2984 38.4563 21.4061 38.5293 21.5349C38.6023 21.6637 38.6407 21.8092 38.6407 21.9572C38.6407 22.1052 38.6023 22.2507 38.5293 22.3795C38.4563 22.5083 38.3512 22.616 38.2241 22.692L22.3204 32.2343L6.41658 22.692C6.28956 22.616 6.18443 22.5083 6.11143 22.3795C6.03843 22.2507 6.00005 22.1052 6.00005 21.9572C6.00005 21.8092 6.03843 21.6637 6.11143 21.5349C6.18443 21.4061 6.28956 21.2984 6.41658 21.2224L8.47542 19.9874L22.3204 28.2947L36.1653 19.9874ZM36.1653 28.0378L38.2241 29.2728C38.3512 29.3488 38.4563 29.4565 38.5293 29.5853C38.6023 29.714 38.6407 29.8595 38.6407 30.0076C38.6407 30.1556 38.6023 30.3011 38.5293 30.4299C38.4563 30.5587 38.3512 30.6664 38.2241 30.7424L23.2025 39.7554C22.9361 39.9154 22.6311 40 22.3204 40C22.0096 40 21.7046 39.9154 21.4382 39.7554L6.41658 30.7424C6.28956 30.6664 6.18443 30.5587 6.11143 30.4299C6.03843 30.3011 6.00005 30.1556 6.00005 30.0076C6.00005 29.8595 6.03843 29.714 6.11143 29.5853C6.18443 29.4565 6.28956 29.3488 6.41658 29.2728L8.47542 28.0378L22.3204 36.3451L36.1653 28.0378Z" fill="currentColor" />
                      </g>
                      <defs>
                        <clipPath id="clip0_211_934">
                          <rect width="44" height="44" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <h3 className="mb-4 text-xl font-semibold text-black dark:text-white sm:text-[22px] xl:text-[26px]"> Smart and Intuitive User Interface </h3>
                  <p className="text-base text-body"> Clean, Modern UI designed for both beginners & advanced Traders. View trading stats, portfolio performance and rewards in one place. Toggle between Dark/Light Modes for a Visually Comfortable Experience. Quick access to Swap, Add Liquidity or Stake Tokens. </p>
                </div>
              </div>
              <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                <div className="wow fadeInUp group mx-auto mb-[60px] max-w-[310px] text-center" data-wow-delay=".4s">
                  <div className="mx-auto mb-8 flex h-[90px] w-[90px] items-center justify-center rounded-3xl bg-gray text-primary duration-300 group-hover:bg-primary group-hover:text-white dark:bg-[#2A2E44] dark:text-white dark:group-hover:bg-primary">
                    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_211_971)">
                        <path d="M25.3333 37H8.66667C8.22464 37 7.80072 36.8244 7.48816 36.5118C7.17559 36.1993 7 35.7754 7 35.3333V18.6667H25.3333V37ZM37 15.3333H7V8.66667C7 8.22464 7.17559 7.80072 7.48816 7.48816C7.80072 7.17559 8.22464 7 8.66667 7H35.3333C35.7754 7 36.1993 7.17559 36.5118 7.48816C36.8244 7.80072 37 8.22464 37 8.66667V15.3333Z" fill="currentColor" />
                        <path d="M28.6667 37V18.6667H37V35.3333C37 35.7754 36.8244 36.1993 36.5118 36.5118C36.1993 36.8244 35.7754 37 35.3333 37H28.6667Z" fill="currentColor" />
                      </g>
                      <defs>
                        <clipPath id="clip0_211_971">
                          <rect width="44" height="44" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <h3 className="mb-4 text-xl font-semibold text-black dark:text-white sm:text-[22px] xl:text-[26px]"> One-Click Easy Swap </h3>
                  <p className="text-base text-body"> Automatically identify and Set Up Token Pairs for Trading. Pre-set Slippage Tolerance for faster execution. Users can fine-tune slippage, gas speed & trade confirmations as Customizable Preferences. </p>
                </div>
              </div>
              <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                <div className="wow fadeInUp group mx-auto mb-[60px] max-w-[310px] text-center" data-wow-delay=".2s">
                  <div className="mx-auto mb-8 flex h-[90px] w-[90px] items-center justify-center rounded-3xl bg-gray text-primary duration-300 group-hover:bg-primary group-hover:text-white dark:bg-[#2A2E44] dark:text-white dark:group-hover:bg-primary">
                    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_211_962)">
                        <path d="M22.0001 3.66675C32.1256 3.66675 40.3334 11.8746 40.3334 22.0001C40.3334 32.1256 32.1256 40.3334 22.0001 40.3334C11.8746 40.3334 3.66675 32.1256 3.66675 22.0001C3.66675 11.8746 11.8746 3.66675 22.0001 3.66675ZM22.0001 7.33341C13.9004 7.33341 7.33341 13.9004 7.33341 22.0001C7.33341 30.0997 13.9004 36.6667 22.0001 36.6667C30.0997 36.6667 36.6667 30.0997 36.6667 22.0001C36.6667 13.9004 30.0997 7.33341 22.0001 7.33341ZM29.7771 11.6289L32.3712 14.2212L25.5439 21.0522C25.6246 21.3547 25.6667 21.6719 25.6667 22.0001C25.6667 24.0259 24.0259 25.6667 22.0001 25.6667C19.9742 25.6667 18.3334 24.0259 18.3334 22.0001C18.3334 19.9742 19.9742 18.3334 22.0001 18.3334C22.3282 18.3334 22.6454 18.3756 22.9479 18.4562L29.7789 11.6289H29.7771Z" fill="currentColor" />
                        <path d="M22 9.16671C23.8664 9.16671 25.6392 9.56454 27.2397 10.2814L24.3742 13.145C23.617 12.9434 22.8214 12.8334 22 12.8334C16.9382 12.8334 12.8334 16.9382 12.8334 22C12.8334 24.53 13.86 26.8217 15.5174 28.4827L12.925 31.075L12.639 30.7799C10.4867 28.4845 9.16671 25.3954 9.16671 22C9.16671 14.9124 14.9124 9.16671 22 9.16671ZM33.7187 16.7622C34.4337 18.3609 34.8334 20.1355 34.8334 22C34.8334 25.5439 33.396 28.7522 31.075 31.075L28.4827 28.4827C30.14 26.8217 31.1667 24.53 31.1667 22C31.1667 21.1787 31.0585 20.383 30.855 19.6259L33.7187 16.7622Z" fill="currentColor" />
                      </g>
                      <defs>
                        <clipPath id="clip0_211_962">
                          <rect width="44" height="44" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <h3 className="mb-4 text-xl font-semibold text-black dark:text-white sm:text-[22px] xl:text-[26px]"> Multi-Device Optimization </h3>
                  <p className="text-base text-body"> Mobile-First Design: Seamless experience on smartphones, tablets and desktops. Works smoothly on all major web browsers as Cross-Browser Compatibility. Adjusts effortlessly to any screen size or resolution as Responsive Layout. </p>
                </div>
              </div>
              <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                <div className="wow fadeInUp group mx-auto mb-[60px] max-w-[310px] text-center" data-wow-delay=".3s">
                  <div className="mx-auto mb-8 flex h-[90px] w-[90px] items-center justify-center rounded-3xl bg-gray text-primary duration-300 group-hover:bg-primary group-hover:text-white dark:bg-[#2A2E44] dark:text-white dark:group-hover:bg-primary">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_211_943)">
                        <path d="M11.2535 28.9978C11.5633 28.1197 12.1379 27.3593 12.898 26.8215C13.6581 26.2837 14.5663 25.9949 15.4974 25.9949C16.4286 25.9949 17.3368 26.2837 18.0969 26.8215C18.857 27.3593 19.4316 28.1197 19.7414 28.9978H34.9927V31.9971H19.7414C19.4316 32.8751 18.857 33.6355 18.0969 34.1733C17.3368 34.7112 16.4286 35 15.4974 35C14.5663 35 13.6581 34.7112 12.898 34.1733C12.1379 33.6355 11.5633 32.8751 11.2535 31.9971H5V28.9978H11.2535ZM20.2513 18.5004C20.5611 17.6223 21.1357 16.8619 21.8958 16.3241C22.6559 15.7862 23.5641 15.4974 24.4952 15.4974C25.4264 15.4974 26.3346 15.7862 27.0947 16.3241C27.8548 16.8619 28.4294 17.6223 28.7392 18.5004H34.9927V21.4996H28.7392C28.4294 22.3777 27.8548 23.1381 27.0947 23.6759C26.3346 24.2138 25.4264 24.5026 24.4952 24.5026C23.5641 24.5026 22.6559 24.2138 21.8958 23.6759C21.1357 23.1381 20.5611 22.3777 20.2513 21.4996H5V18.5004H20.2513ZM11.2535 8.00294C11.5633 7.12486 12.1379 6.36449 12.898 5.82666C13.6581 5.28882 14.5663 5 15.4974 5C16.4286 5 17.3368 5.28882 18.0969 5.82666C18.857 6.36449 19.4316 7.12486 19.7414 8.00294H34.9927V11.0022H19.7414C19.4316 11.8803 18.857 12.6407 18.0969 13.1785C17.3368 13.7163 16.4286 14.0051 15.4974 14.0051C14.5663 14.0051 13.6581 13.7163 12.898 13.1785C12.1379 12.6407 11.5633 11.8803 11.2535 11.0022H5V8.00294H11.2535Z" fill="currentColor" />
                      </g>
                      <defs>
                        <clipPath id="clip0_211_943">
                          <rect width="40" height="40" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <h3 className="mb-4 text-xl font-semibold text-black dark:text-white sm:text-[22px] xl:text-[26px]"> Security and Privacy First </h3>
                  <p className="text-base text-body"> Full Control over funds with no intermediaries as Non-Custodial Trading. Securing contracts, Audited Protocols & Private Transactions. There is No personal data collection due to Data Privacy. Users can Trade Anonymously. </p>
                </div>
              </div>
              <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                <div className="wow fadeInUp group mx-auto mb-[60px] max-w-[310px] text-center" data-wow-delay=".4s">
                  <div className="mx-auto mb-8 flex h-[90px] w-[90px] items-center justify-center rounded-3xl bg-gray text-primary duration-300 group-hover:bg-primary group-hover:text-white dark:bg-[#2A2E44] dark:text-white dark:group-hover:bg-primary">
                    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_211_982)">
                        <path d="M10.0155 8.12727C13.3422 5.24464 17.5981 3.66062 22 3.66677C32.1255 3.66677 40.3333 11.8746 40.3333 22.0001C40.3333 25.9161 39.105 29.5461 37.015 32.5234L31.1667 22.0001H36.6667C36.6669 19.1247 35.822 16.3127 34.2369 13.9137C32.6518 11.5147 30.3965 9.63456 27.7515 8.50699C25.1064 7.37943 22.1883 7.05422 19.3599 7.5718C16.5315 8.08938 13.9177 9.42691 11.8433 11.4181L10.0155 8.12727Z" fill="currentColor" />
                        <path d="M33.9845 35.8729C30.6578 38.7555 26.4018 40.3396 22 40.3334C11.8745 40.3334 3.66663 32.1256 3.66663 22.0001C3.66663 18.0841 4.89496 14.4541 6.98496 11.4767L12.8333 22.0001H7.33329C7.33306 24.8754 8.178 27.6874 9.76308 30.0864C11.3481 32.4854 13.6034 34.3656 16.2485 35.4932C18.8935 36.6207 21.8117 36.946 24.64 36.4284C27.4684 35.9108 30.0823 34.5733 32.1566 32.5821L33.9845 35.8729Z" fill="currentColor" />
                      </g>
                      <defs>
                        <clipPath id="clip0_211_982">
                          <rect width="44" height="44" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <h3 className="mb-4 text-xl font-semibold text-black dark:text-white sm:text-[22px] xl:text-[26px]"> Eco-Friendly Blockchain Protocol </h3>
                  <p className="text-base text-body"> Built on the eco-conscious Ape Blockchain for Minimal Environmental Impact. Also, Contributions to Sustainability Programs for every trade as Carbon Offsetting. </p>
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
              <filter id="filter0_f_26_84" x="0" y="0" width="1154" height="1154" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="130" result="effect1_foregroundBlur_26_84" />
              </filter>
              <linearGradient id="paint0_linear_26_84" x1="183.787" y1="894" x2="970.173" y2="346.491" gradientUnits="userSpaceOnUse">
                <stop stopColor="#8EA5FE" />
                <stop offset="0.541667" stopColor="#BEB3FD" />
                <stop offset="1" stopColor="#90D1FF" />
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
              <filter id="filter0_f_26_85" x="-614" y="0" width="1236" height="1236" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="125" result="effect1_foregroundBlur_26_85" />
              </filter>
              <linearGradient id="paint0_linear_26_85" x1="-364" y1="250" x2="506.12" y2="754.835" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FF8FE8" />
                <stop offset="1" stopColor="#FFC960" />
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
              style={{ textAlign: 'center', fontFamily: 'cursive' }}
            >
              ApeFiSwap Tokenomics
            </span>
            <div
              className="-mx-4 flex flex-wrap items-center justify-between"
              style={{
                textAlign: 'center',
                marginLeft: '-2rem',
                marginRight: '-2rem',
                backgroundColor: 'white',
                borderRadius: '10px',
                borderStyle: 'double',
                borderWidth: '2px',
                borderColor: '#08a88a',
              }}
            >
              <div className="w-full px-4 lg:w-2/2" style={{ width: '100%', textAlign: 'center' }} data-wow-delay=".2s">
                <img
                  src="theme/images/graph1.png"
                  alt="image"
                  style={{ width: '70% !important', textAlign: 'center', display: 'unset' }}
                />
              </div>

              <div className="w-full px-4 lg:w-1/2">
                <div>
                  <br />
                  <h5 className="mb-4 block text-lg font-medium text-primary md:text-[22px]" style={{ marginBottom: '0.6rem' }}>
                    30%
                  </h5>
                  <p className="text-base text-body" style={{ marginBottom: '0.6rem' }}>
                    Liquidity Incentives
                  </p>
                  <hr style={{ color: '#08a88a' }} />
                  <br />
                </div>
                <div>
                  <h5 className="mb-4 block text-lg font-medium text-primary md:text-[22px]" style={{ marginBottom: '0.6rem' }}>
                    15%
                  </h5>
                  <p className="text-base text-body" style={{ marginBottom: '0.6rem' }}>
                    Team & Advisors
                  </p>
                  <hr style={{ color: '#08a88a' }} />
                  <br />
                </div>
                <div>
                  <h5 className="mb-4 block text-lg font-medium text-primary md:text-[22px]" style={{ marginBottom: '0.6rem' }}>
                    10%
                  </h5>
                  <p className="text-base text-body" style={{ marginBottom: '0.6rem' }}>
                    Ecosystem Fund
                  </p>
                  <hr style={{ color: '#08a88a' }} />
                  <br />
                </div>
                <div>
                  <h5 className="mb-4 block text-lg font-medium text-primary md:text-[22px]" style={{ marginBottom: '0.6rem' }}>
                    10%
                  </h5>
                  <p className="text-base text-body" style={{ marginBottom: '0.6rem' }}>
                    IDO (Public Sale)
                  </p>
                  <hr style={{ color: '#08a88a' }} />
                  <br />
                </div>
              </div>

              <div className="w-full px-4 lg:w-1/2" style={{ textAlign: 'center' }}>
                {/* <span className="mb-4 block text-lg font-medium text-primary md:text-[22px]"> Track Audience Activities </span> */}

                <div>
                  <br />
                  <h5 className="mb-4 block text-lg font-medium text-primary md:text-[22px]" style={{ marginBottom: '0.6rem' }}>
                    10%
                  </h5>
                  <p className="text-base text-body" style={{ marginBottom: '0.6rem' }}>
                    Seed/Private Sale
                  </p>
                  <hr style={{ color: '#08a88a' }} />
                  <br />
                </div>
                <div>
                  <h5 className="mb-4 block text-lg font-medium text-primary md:text-[22px]" style={{ marginBottom: '0.6rem' }}>
                    15%
                  </h5>
                  <p className="text-base text-body" style={{ marginBottom: '0.6rem' }}>
                    Treasury
                  </p>
                  <hr style={{ color: '#08a88a' }} />
                  <br />
                </div>
                <div>
                  <h5 className="mb-4 block text-lg font-medium text-primary md:text-[22px]" style={{ marginBottom: '0.6rem' }}>
                    5%
                  </h5>
                  <p className="text-base text-body" style={{ marginBottom: '0.6rem' }}>
                    Airdrop/Community
                  </p>
                  <hr style={{ color: '#08a88a' }} />
                  <br />
                </div>
                <div>
                  <h5 className="mb-4 block text-lg font-medium text-primary md:text-[22px]" style={{ marginBottom: '0.6rem' }}>
                    5%
                  </h5>
                  <p className="text-base text-body" style={{ marginBottom: '0.6rem' }}>
                    Marketing & Partnerships
                  </p>
                  <hr style={{ color: '#08a88a' }} />
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ======= Tokenomics End ======= */}

      {/* ======= Work Inprogress Start ======= */}
      <section id="work-process" className="relative z-10 pt-[110px]">
        <div className="container">
          <div className="wow fadeInUp mx-auto mb-14 max-w-[690px] text-center lg:mb-[70px]" data-wow-delay=".2s">
            <br />
            <br />
            <h2
              className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-[44px] md:leading-tight"
              style={{ fontFamily: 'cursive' }}
            >
              How it Works?
            </h2>
            <p className="text-base text-body"></p>
          </div>
        </div>

        <div className="container max-w-[1390px]">
          <div className="rounded-2xl bg-white px-5 pt-14 pb-14 shadow-card dark:bg-dark dark:shadow-card-dark md:pb-1 lg:pt-20 lg:pb-5 xl:px-10">
            <div className="-mx-4 flex flex-wrap justify-center">
              <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                <div className="wow fadeInUp group mx-auto mb-[60px] max-w-[310px] text-center" data-wow-delay=".2s">
                  <div className="mx-auto mb-8 flex h-[90px] w-[90px] items-center justify-center rounded-3xl bg-gray text-primary duration-300 group-hover:bg-primary group-hover:text-white dark:bg-[#2A2E44] dark:text-white dark:group-hover:bg-primary">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_40_12)">
                        <path
                          d="M21.6667 16.6667H30L20 26.6667L10 16.6667H18.3333V5H21.6667V16.6667ZM6.66668 31.6667H33.3333V20H36.6667V33.3333C36.6667 33.7754 36.4911 34.1993 36.1785 34.5118C35.866 34.8244 35.442 35 35 35H5.00001C4.55798 35 4.13406 34.8244 3.8215 34.5118C3.50894 34.1993 3.33334 33.7754 3.33334 33.3333V20H6.66668V31.6667Z"
                          fill="currentColor"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_40_12">
                          <rect width="40" height="40" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <h3 className="mb-4 text-xl font-semibold text-black dark:text-white sm:text-[22px] xl:text-[26px]">
                    Connect Wallet
                  </h3>
                  <p className="text-base text-body" style={{ textAlign: 'justify' }}>
                    Connect your wallet to start using the DEX. Supported wallets include Metamask, WalletConnect & Ape-native wallets. Click "Connect Wallet," select your wallet and authorize the connection. DEX will instantly detect token balances and provide real-time updates, ensuring you maintain full control over your funds with no third-party involvement.
                  </p>
                </div>
              </div>

              <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                <div className="wow fadeInUp group mx-auto mb-[60px] max-w-[310px] text-center" data-wow-delay=".3s">
                  <div className="mx-auto mb-8 flex h-[90px] w-[90px] items-center justify-center rounded-3xl bg-gray text-primary duration-300 group-hover:bg-primary group-hover:text-white dark:bg-[#2A2E44] dark:text-white dark:group-hover:bg-primary">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_40_15)">
                        <path
                          d="M20 36.6667C10.795 36.6667 3.33333 29.205 3.33333 20C3.33333 10.795 10.795 3.33337 20 3.33337C29.205 3.33337 36.6667 10.795 36.6667 20C36.6667 29.205 29.205 36.6667 20 36.6667ZM11.6883 30.4267C14.0476 32.3129 16.9795 33.3382 20 33.3334C23.2833 33.3334 26.2883 32.1467 28.6117 30.18C27.5262 29.0663 26.2284 28.1815 24.7951 27.578C23.3617 26.9746 21.8219 26.6647 20.2667 26.6667C18.6543 26.6648 17.0592 26.9981 15.5824 27.6454C14.1057 28.2927 12.7796 29.2398 11.6883 30.4267ZM9.36 28.0334C10.7608 26.5468 12.4511 25.3629 14.3269 24.5546C16.2027 23.7462 18.2241 23.3306 20.2667 23.3334C22.2361 23.3308 24.1866 23.7173 26.0062 24.4707C27.8259 25.224 29.4788 26.3294 30.87 27.7234C32.2968 25.7152 33.1394 23.3511 33.3043 20.8932C33.4692 18.4354 32.9499 15.9798 31.8041 13.7991C30.6584 11.6184 28.9309 9.79775 26.8133 8.53912C24.6957 7.28049 22.2708 6.6331 19.8077 6.66879C17.3445 6.70448 14.9394 7.42185 12.8592 8.7413C10.779 10.0608 9.10493 11.9307 8.02282 14.1437C6.94071 16.3567 6.49282 18.8262 6.72886 21.2783C6.9649 23.7304 7.87562 26.0691 9.36 28.035V28.0334ZM20 21.6667C18.2319 21.6667 16.5362 20.9643 15.286 19.7141C14.0357 18.4638 13.3333 16.7682 13.3333 15C13.3333 13.2319 14.0357 11.5362 15.286 10.286C16.5362 9.03575 18.2319 8.33337 20 8.33337C21.7681 8.33337 23.4638 9.03575 24.714 10.286C25.9643 11.5362 26.6667 13.2319 26.6667 15C26.6667 16.7682 25.9643 18.4638 24.714 19.7141C23.4638 20.9643 21.7681 21.6667 20 21.6667ZM20 18.3334C20.8841 18.3334 21.7319 17.9822 22.357 17.3571C22.9821 16.7319 23.3333 15.8841 23.3333 15C23.3333 14.116 22.9821 13.2681 22.357 12.643C21.7319 12.0179 20.8841 11.6667 20 11.6667C19.1159 11.6667 18.2681 12.0179 17.643 12.643C17.0179 13.2681 16.6667 14.116 16.6667 15C16.6667 15.8841 17.0179 16.7319 17.643 17.3571C18.2681 17.9822 19.1159 18.3334 20 18.3334Z"
                          fill="currentColor"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_40_15">
                          <rect width="40" height="40" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <h3 className="mb-4 text-xl font-semibold text-black dark:text-white sm:text-[22px] xl:text-[26px]">
                    Swap Tokens
                  </h3>
                  <p className="text-base text-body" style={{ textAlign: 'justify' }}>
                    Swapping tokens is simple and efficient. Choose the tokens to trade using an intuitive interface with auto-pair detection, real-time price updates, and transparent fees. Customize slippage tolerance and transaction speed (Standard, Fast, or Instant) to suit your needs. Powered by the Ape Blockchain, swaps are fast and cost-effective, with minimal gas fees.
                  </p>
                </div>
              </div>

              <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                <div className="wow fadeInUp group mx-auto mb-[60px] max-w-[310px] text-center" data-wow-delay=".4s">
                  <div className="mx-auto mb-8 flex h-[90px] w-[90px] items-center justify-center rounded-3xl bg-gray text-primary duration-300 group-hover:bg-primary group-hover:text-white dark:bg-[#2A2E44] dark:text-white dark:group-hover:bg-primary">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_40_18)">
                        <path d="M5.26834 7.44836C7.20178 5.51458 9.79501 4.38351 12.5277 4.28211C15.2603 4.18072 17.9302 5.11651 20.0017 6.9017C22.0713 5.11948 24.7377 4.18475 27.467 4.28463C30.1964 4.38452 32.7873 5.51165 34.7211 7.44037C36.6549 9.3691 37.7888 11.9571 37.8959 14.6862C38.0029 17.4153 37.0751 20.0841 35.2983 22.1584L22.3567 35.1417C21.7621 35.7365 20.9646 36.0845 20.1242 36.1161C19.2838 36.1476 18.4625 35.8603 17.825 35.3117L17.6417 35.1434L4.70168 22.1584C2.92583 20.0859 1.99764 17.4195 2.1027 14.6923C2.20776 11.9651 3.33832 9.37805 5.26834 7.44836ZM7.62501 9.80503C6.26208 11.1683 5.47643 13.0041 5.43112 14.9313C5.38581 16.8585 6.08432 18.7292 7.38168 20.155L7.62501 20.4117L20 32.7867L28.8383 23.9467L22.9467 18.055L21.18 19.8217C20.7158 20.2861 20.1646 20.6546 19.558 20.906C18.9514 21.1575 18.3012 21.287 17.6445 21.2871C16.3183 21.2874 15.0463 20.7609 14.1083 19.8234C13.1704 18.8858 12.6432 17.6141 12.6429 16.2879C12.6426 14.9617 13.1691 13.6897 14.1067 12.7517L17.61 9.2467C16.2158 8.13399 14.4707 7.55451 12.6878 7.61224C10.9049 7.66997 9.20099 8.36112 7.88168 9.5617L7.62501 9.80503ZM21.7683 14.5184C22.0809 14.2059 22.5047 14.0304 22.9467 14.0304C23.3886 14.0304 23.8125 14.2059 24.125 14.5184L31.195 21.5884L32.375 20.4117C33.7608 19.0269 34.5497 17.1549 34.5731 15.196C34.5964 13.237 33.8524 11.3467 32.5 9.92929C31.1477 8.51185 29.2944 7.67981 27.3366 7.61112C25.3787 7.54242 23.4717 8.24253 22.0233 9.5617L21.7683 9.80503L16.465 15.1084C16.1761 15.3971 16.0033 15.7818 15.9793 16.1895C15.9554 16.5972 16.0819 16.9995 16.335 17.32L16.465 17.465C16.7537 17.7539 17.1384 17.9267 17.5461 17.9507C17.9538 17.9747 18.3561 17.8481 18.6767 17.595L18.8217 17.465L21.7683 14.5184Z" fill="currentColor" />
                      </g>
                      <defs>
                        <clipPath id="clip0_40_18">
                          <rect width="40" height="40" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <h3 className="mb-4 text-xl font-semibold text-black dark:text-white sm:text-[22px] xl:text-[26px]">
                    Add Liquidity and Earn
                  </h3>
                  <p className="text-base text-body" style={{ textAlign: 'justify' }}>
                    Add liquidity to token pools to earn Liquidity Provider (LP) tokens, which can be staked for rewards like $APE or partner tokens. The platform’s dashboard tracks liquidity, rewards & pool performance. 
                    With straight steps & real-time reward calculations, users can easily maximize their earnings while supporting the ecosystem.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>       
        <div className="absolute -top-28 left-0 -z-10 hidden md:block">
          <svg width="632" height="1179" viewBox="0 0 632 1179" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.25" filter="url(#filter0_f_38_24)">
              <circle cx="42.5" cy="589.5" r="329.5" fill="url(#paint0_linear_38_24)" />
            </g>
            <defs>
              <filter id="filter0_f_38_24" x="-547" y="0" width="1179" height="1179" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="130" result="effect1_foregroundBlur_38_24" />
              </filter>
              <linearGradient id="paint0_linear_38_24" x1="-366.218" y1="919" x2="451.176" y2="349.901" gradientUnits="userSpaceOnUse">
                <stop stop-color="#8EA5FE" />
                <stop offset="0.541667" stop-color="#BEB3FD" />
                <stop offset="1" stop-color="#90D1FF" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute right-0 top-20 -z-10">
          <svg width="637" height="1277" viewBox="0 0 637 1277" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.2" filter="url(#filter0_f_38_23)">
              <circle cx="638.5" cy="638.5" r="388.5" fill="url(#paint0_linear_38_23)" />
            </g>
            <defs>
              <filter id="filter0_f_38_23" x="0" y="0" width="1277" height="1277" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="125" result="effect1_foregroundBlur_38_23" />
              </filter>
              <linearGradient id="paint0_linear_38_23" x1="250" y1="250" x2="1168.59" y2="782.957" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FF8FE8" />
                <stop offset="1" stop-color="#FFC960" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>
      {/* ======= Work Inprogress End ======= */}

      {/* ======= Ecosystem Partners Start ======= */}
      <section id="blog" className="pt-[110px] pb-[60px]">
        <div className="container">
          <div className="wow fadeInUp mx-auto mb-14 max-w-[690px] text-center lg:mb-[70px]" data-wow-delay=".2s">
		        <br/><br/>
            <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-[44px] md:leading-tight" 
            style={{fontFamily: 'cursive'}}> Ecosystem Partners </h2>
          </div>
        </div>
        <div className="container overflow-hidden lg:max-w-[1250px]">
          <div className="-mx-4 flex flex-wrap justify-center md:-mx-7 lg:-mx-5 xl:-mx-[35px]">
            <div className="w-full px-4 md:w-1/4 md:px-7 lg:w-1/4 lg:px-5 xl:px-[35px]">
              <div className="wow fadeInUp mb-10" data-wow-delay=".2s">
                <div className="relative overflow-hidden rounded">
                  <img src="theme/images/partners/apechain.jpg" alt="APECHAIN" className="w-full object-cover object-center" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ======= Ecosystem Partners End ======= */}

      {/* ======= Clients Start ======= */}          
      <section className="relative z-10 bg-[#F8FAFB] pt-[70px] pb-[50px] dark:bg-[#15182B]">
        <div className="wow fadeInUp container overflow-hidden lg:max-w-[1200px]" data-wow-delay=".2s">
          <div className="-mx-4 flex flex-wrap items-center justify-center">
            <div className="w-1/2 px-4 sm:w-1/3 md:w-1/4 lg:w-1/6">
              <div className="mb-5 text-center">
                <a href="javascript:void(0)" className="block">
                  <img
                    src="theme/images/clients/coinmarketcap.svg"
                    alt="coinmarketcap"
                    className="mx-auto max-w-full opacity-[65%] hover:opacity-100"
                    style={{ width: '50%' }}
                  />
                </a>
              </div>
            </div>

            <div className="w-1/2 px-4 sm:w-1/3 md:w-1/4 lg:w-1/6">
              <div className="mb-5 text-center">
                <a href="javascript:void(0)" className="block">
                  <img
                    src="theme/images/clients/coingecko.png"
                    alt="coingecko"
                    className="mx-auto max-w-full opacity-[65%] hover:opacity-100"
                    style={{ width: '50%' }}
                  />
                </a>
              </div>
            </div>

            <div className="w-1/2 px-4 sm:w-1/3 md:w-1/4 lg:w-1/6">
              <div className="mb-5 text-center">
                <a href="javascript:void(0)" className="block">
                  <img
                    src="theme/images/clients/dexscreener.png"
                    alt="dexscreener"
                    className="mx-auto max-w-full opacity-[65%] hover:opacity-100"
                    style={{ width: '50%' }}
                  />
                </a>
              </div>
            </div>

            <div className="w-1/2 px-4 sm:w-1/3 md:w-1/4 lg:w-1/6">
              <div className="mb-5 text-center">
                <a href="javascript:void(0)" className="block">
                  <img
                    src="theme/images/clients/dextools.svg"
                    alt="dextools"
                    className="mx-auto max-w-full opacity-[65%] hover:opacity-100"
                    style={{ width: '50%' }}
                  />
                </a>
              </div>
            </div>

            <div className="w-1/2 px-4 sm:w-1/3 md:w-1/4 lg:w-1/6">
              <div className="mb-5 text-center">
                <a href="javascript:void(0)" className="block">
                  <img
                    src="theme/images/clients/dappradar.png"
                    alt="dappradar"
                    className="mx-auto max-w-full opacity-[65%] hover:opacity-100"
                    style={{ width: '50%' }}
                  />
                </a>
              </div>
            </div>
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
            <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-[44px] md:leading-tight"
            style={{fontFamily: 'cursive'}}>
              Let's Stay Connected
            </h2>          
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
