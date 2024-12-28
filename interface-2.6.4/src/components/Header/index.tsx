import { ChainId } from "@uniswap/sdk";
import React from "react";
import { isMobile } from "react-device-detect";
import { Text } from "rebass";
import styled from "styled-components";

// import Logo from '../../assets/svg/logo.svg'
// import LogoDark from '../../assets/svg/logo_white.svg'
import Wordmark from "../../assets/images/apelogo.png";
import WordmarkDark from "../../assets/svg/wordmark_white.svg";
import { useActiveWeb3React } from "../../hooks";
import { useDarkModeManager } from "../../state/user/hooks";
import { useETHBalances } from "../../state/wallet/hooks";

import { YellowCard } from "../Card";
import Settings from "../Settings";
// import Menu from '../Menu'

// import Row, { RowBetween } from '../Row'
import Web3Status from "../Web3Status";
import VersionSwitch from "./VersionSwitch";

// import "./Header.css";
// import "./bundle.js";

// const HeaderFrame = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   flex-direction: column;
//   width: 100%;
//   top: 0;
//   position: absolute;
//   z-index: 2;
//   ${({ theme }) => theme.mediaWidth.upToExtraSmall`
//     padding: 12px 0 0 0;
//     width: calc(100%);
//     position: relative;
//   `};
// `

// const HeaderElement = styled.div`
//   display: flex;
//   align-items: center;
// `

// const HeaderElementWrap = styled.div`
//   display: flex;
//   align-items: center;

//   ${({ theme }) => theme.mediaWidth.upToSmall`
//     margin-top: 0.5rem;
// `};
// `

// const Title = styled.a`
//   display: flex;
//   align-items: center;
//   pointer-events: auto;

//   :hover {
//     cursor: pointer;
//   }
// `

// const TitleText = styled(Row)`
//   width: fit-content;
//   white-space: nowrap;
//   ${({ theme }) => theme.mediaWidth.upToExtraSmall`
//     display: none;
//   `};
// `

const AccountElement = styled.div<{ active: boolean }>` 
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme, active }) => (!active ? theme.bg1 : theme.bg3)};
  border-radius: 12px;
  white-space: nowrap;
  /*width: 100%;*/
  width: 20%;

  :focus {
    border: 1px solid blue;
  }
`;

const TestnetWrapper = styled.div`
  white-space: nowrap;
  width: fit-content;
  margin-left: 10px;
  pointer-events: auto;
`;

const NetworkCard = styled(YellowCard)`
  width: fit-content;
  margin-right: 10px;
  border-radius: 12px;
  padding: 8px 12px;
`;

// const UniIcon = styled.div`
//   transition: transform 0.3s ease;
//   :hover {
//     transform: rotate(-5deg);
//   }
//   ${({ theme }) => theme.mediaWidth.upToSmall`
//     img {
//       width: 4.5rem;
//     }
//   `};
// `

// const HeaderControls = styled.div`
//   display: flex;
//   flex-direction: row;
//   align-items: center;

//   ${({ theme }) => theme.mediaWidth.upToSmall`
//     flex-direction: column;
//     align-items: flex-end;
//   `};
// `

const BalanceText = styled(Text)`
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
    display: none;
  `};
`;

// const DropdownMenu = styled.div`
//   position: relative;
//   display: inline-block;
//   margin: 0 1rem;

//   &:hover > ul {
//     display: block;
//   }
// `

// const DropdownContent = styled.ul`
//   display: none;
//   position: absolute;
//   background-color: ${({ theme }) => theme.bg1};
//   box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
//   border-radius: 8px;
//   min-width: 160px;
//   z-index: 5;
//   list-style: none;
//   padding: 0;
//   margin: 0;

//   li {
//     padding: 10px 20px;
//     cursor: pointer;

//     &:hover {
//       background-color: ${({ theme }) => theme.bg2};
//     }

//     a {
//       color: ${({ theme }) => theme.text1};
//       text-decoration: none;
//     }
//   }
// `

const NETWORK_LABELS: { [chainId in ChainId]: string | null } = {
    [ChainId.BSC]: "BSC",
};

export default function Header() {
    const { account, chainId } = useActiveWeb3React();
    const userEthBalance = useETHBalances(account ? [account] : [])?.[
        account ?? ""
    ];
    const [isDark] = useDarkModeManager();

    // return (
    //   <HeaderFrame>
    //     <RowBetween style={{ alignItems: 'flex-start' }} padding="1rem 1rem 0 1rem">
    //       <HeaderElement>
    //         <Title href=".">
    //           <UniIcon>
    //             <img src={isDark ? LogoDark : Logo} alt="logo" />
    //           </UniIcon>
    //           <TitleText>
    //             <img style={{ marginLeft: '4px', marginTop: '4px' }} src={isDark ? WordmarkDark : Wordmark} alt="logo" />
    //           </TitleText>
    //         </Title>
    //       </HeaderElement>
    //       <HeaderControls>
    //         <HeaderElement>

    //           <DropdownMenu>
    //             <span>Trade</span>
    //             <DropdownContent>
    //               <li><a href="/swap">Swap</a></li>
    //               <li><a href="/liquidity">Liquidity</a></li>
    //               <li><a href="/rolling">Rolling</a></li>
    //             </DropdownContent>
    //           </DropdownMenu>
    //           <DropdownMenu>
    //             <span>Earn</span>
    //             <DropdownContent>
    //               <li><a href="/bar">Bar</a></li>
    //               <li><a href="#/pool">Wine Pool</a></li>
    //               <li><a href="/lunch-pad">Lunch Pad</a></li>
    //             </DropdownContent>
    //           </DropdownMenu>

    //           <TestnetWrapper>
    //             {!isMobile && chainId && NETWORK_LABELS[chainId] && <NetworkCard>{NETWORK_LABELS[chainId]}</NetworkCard>}
    //           </TestnetWrapper>
    //           <AccountElement active={!!account} style={{ pointerEvents: 'auto' }}>
    //             {account && userEthBalance ? (
    //               <BalanceText style={{ flexShrink: 0 }} pl="0.75rem" pr="0.5rem" fontWeight={500}>
    //                 {userEthBalance?.toSignificant(4)} ETH
    //               </BalanceText>
    //             ) : null}
    //             <Web3Status />
    //           </AccountElement>
    //         </HeaderElement>
    //         <HeaderElementWrap>
    //           <VersionSwitch />
    //           <Settings />
    //           <Menu />
    //         </HeaderElementWrap>
    //       </HeaderControls>
    //     </RowBetween>
    //   </HeaderFrame>
    // )

    return (
        <header className="navbar absolute top-0 left-0 z-50 w-full border-stroke bg-white duration-300 dark:border-stroke-dark dark:bg-black">
            <div className="container relative max-w-[1400px]">
                <div className="flex items-center justify-between">
                    {/* Logo Section */}
                    <div className="block py-4 lg:py-0">
                        <a href="/" className="block max-w-[145px] sm:max-w-[180px]">
                            <img
                                className="block dark:hidden"
                                style={{ marginLeft: "4px", marginTop: "4px" }}
                                src={isDark ? WordmarkDark : Wordmark}
                                alt="logo"
                            />
                            <img
                                src={isDark ? WordmarkDark : Wordmark}
                                alt="logo"
                                className="hidden dark:block"
                            />
                        </a>
                    </div>

                    {/* Navbar Toggle Button for Mobile */}
                    <button
                        className="navbarOpen absolute right-4 top-1/2 z-50 flex h-10 w-10 -translate-y-1/2 flex-col items-center justify-center space-y-[6px] font-bold lg:hidden"
                        aria-label="navbarOpen"
                        name="navbarOpen"
                    >
                        <span className="block h-[2px] w-7 bg-black dark:bg-white"></span>
                        <span className="block h-[2px] w-7 bg-black dark:bg-white"></span>
                        <span className="block h-[2px] w-7 bg-black dark:bg-white"></span>
                    </button>

                    {/* Menu Wrapper */}
                    <div className="menu-wrapper relative hidden justify-between lg:flex">
                        <button
                            className="navbarClose fixed top-10 right-10 z-[9999] flex h-10 w-10 flex-col items-center justify-center font-bold lg:hidden"
                            name="navbarClose"
                            aria-label="navbarClose"
                        >
                            <span className="block h-[2px] w-7 rotate-45 bg-black dark:bg-white"></span>
                            <span className="-mt-[2px] block h-[2px] w-7 -rotate-45 bg-black dark:bg-white"></span>
                        </button>

                        {/* Navigation Menu */}
                        <nav className="fixed top-0 left-0 z-[999] flex h-screen w-full items-center justify-center bg-white bg-opacity-95 text-center backdrop-blur-sm dark:bg-black dark:bg-opacity-95 lg:static lg:h-auto lg:w-max lg:bg-transparent lg:backdrop-blur-none lg:dark:bg-transparent">
                            <ul className="items-center space-y-3 lg:flex lg:space-x-8 lg:space-y-0 xl:space-x-10">
                                <li className="submenu-item menu-item group relative">
                                    <a
                                        href="#"
                                        className="submenu-taggler inline-flex items-center text-base font-medium text-black hover:text-primary group-hover:text-primary dark:text-white dark:hover:text-primary lg:py-7"
                                    >
                                        Trade
                                        <span className="pl-3">
                                            <svg
                                                width="14"
                                                height="8"
                                                viewBox="0 0 14 8"
                                                className="fill-current"
                                            >
                                                <path d="M6.54564 5.09128L11.6369 0L13.0913 1.45436L6.54564 8L0 1.45436L1.45436 0L6.54564 5.09128Z" />
                                            </svg>
                                        </span>
                                    </a>
                                    <ul className="submenu hidden space-y-5 pt-5 duration-300 lg:invisible lg:absolute lg:top-[120%] lg:block lg:w-[250px] lg:rounded-lg lg:bg-white lg:px-8 lg:pb-5 lg:text-left lg:opacity-0 lg:shadow-card lg:group-hover:visible lg:group-hover:top-full lg:group-hover:opacity-100 dark:lg:border-transparent dark:lg:bg-[#15182A] lg:dark:shadow-card-dark">
                                        <li>
                                            <a
                                                href="#/swap"
                                                className="font-heading inline-flex items-center justify-center text-center text-base text-black hover:text-primary dark:text-white dark:hover:text-primary"
                                            >
                                                Swap
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#/pool"
                                                className="font-heading inline-flex items-center justify-center text-center text-base text-black hover:text-primary dark:text-white dark:hover:text-primary"
                                            >
                                                Liquidity
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="submenu-item menu-item group relative">
                                    <a
                                        href="#"
                                        className="submenu-taggler inline-flex items-center text-base font-medium text-black hover:text-primary group-hover:text-primary dark:text-white dark:hover:text-primary lg:py-7"
                                    >
                                        Earn
                                        <span className="pl-3">
                                            <svg
                                                width="14"
                                                height="8"
                                                viewBox="0 0 14 8"
                                                className="fill-current"
                                            >
                                                <path d="M6.54564 5.09128L11.6369 0L13.0913 1.45436L6.54564 8L0 1.45436L1.45436 0L6.54564 5.09128Z" />
                                            </svg>
                                        </span>
                                    </a>
                                    <ul className="submenu hidden space-y-5 pt-5 duration-300 lg:invisible lg:absolute lg:top-[120%] lg:block lg:w-[250px] lg:rounded-lg lg:bg-white lg:px-8 lg:pb-5 lg:text-left lg:opacity-0 lg:shadow-card lg:group-hover:visible lg:group-hover:top-full lg:group-hover:opacity-100 dark:lg:border-transparent dark:lg:bg-[#15182A] lg:dark:shadow-card-dark">
                                        <li>
                                            <a
                                                href="#"
                                                className="font-heading inline-flex items-center justify-center text-center text-base text-black hover:text-primary dark:text-white dark:hover:text-primary"
                                                onClick={() =>
                                                    alert(
                                                        "Good things take time. Page Coming up Shortly!"
                                                    )
                                                }
                                            >
                                                Ape Pools
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="font-heading inline-flex items-center justify-center text-center text-base text-black hover:text-primary dark:text-white dark:hover:text-primary"
                                                onClick={() =>
                                                    alert(
                                                        "Good things take time. Page Coming up Shortly!"
                                                    )
                                                }
                                            >
                                                Launchpad
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="submenu-item menu-item group relative">
                                    <a
                                        href="#"
                                        className="submenu-taggler inline-flex items-center text-base font-medium text-black hover:text-primary group-hover:text-primary dark:text-white dark:hover:text-primary lg:py-7"
                                        onClick={() =>
                                            alert("Cooking up something exciting. Stay tuned!")
                                        }
                                    >
                                        ApeFi Product
                                        <span className="pl-3">
                                            <svg
                                                width="14"
                                                height="8"
                                                viewBox="0 0 14 8"
                                                className="fill-current"
                                            >
                                                <path d="M6.54564 5.09128L11.6369 0L13.0913 1.45436L6.54564 8L0 1.45436L1.45436 0L6.54564 5.09128Z" />
                                            </svg>
                                        </span>
                                    </a>
                                    <ul className="submenu hidden space-y-5 pt-5 duration-300 lg:invisible lg:absolute lg:top-[120%] lg:block lg:w-[250px] lg:rounded-lg lg:bg-white lg:px-8 lg:pb-5 lg:text-left lg:opacity-0 lg:shadow-card lg:group-hover:visible lg:group-hover:top-full lg:group-hover:opacity-100 dark:lg:border-transparent dark:lg:bg-[#15182A] lg:dark:shadow-card-dark">
                                        <li>
                                            <a
                                                href="#"
                                                className="font-heading inline-flex items-center justify-center text-center text-base text-black hover:text-primary dark:text-white dark:hover:text-primary"
                                            ></a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="submenu-item menu-item group relative">
                                    <a
                                        href="#"
                                        className="submenu-taggler inline-flex items-center text-base font-medium text-black hover:text-primary group-hover:text-primary dark:text-white dark:hover:text-primary lg:py-7"
                                    >
                                        Cross Chain
                                        <span className="pl-3">
                                            <svg
                                                width="14"
                                                height="8"
                                                viewBox="0 0 14 8"
                                                className="fill-current"
                                            >
                                                <path d="M6.54564 5.09128L11.6369 0L13.0913 1.45436L6.54564 8L0 1.45436L1.45436 0L6.54564 5.09128Z" />
                                            </svg>
                                        </span>
                                    </a>
                                    <ul className="submenu hidden space-y-5 pt-5 duration-300 lg:invisible lg:absolute lg:top-[120%] lg:block lg:w-[250px] lg:rounded-lg lg:bg-white lg:px-8 lg:pb-5 lg:text-left lg:opacity-0 lg:shadow-card lg:group-hover:visible lg:group-hover:top-full lg:group-hover:opacity-100 dark:lg:border-transparent dark:lg:bg-[#15182A] lg:dark:shadow-card-dark">
                                        <li>
                                            <a
                                                href="https://apechain.com/relay-bridge"
                                                className="font-heading inline-flex items-center justify-center text-center text-base text-black hover:text-primary dark:text-white dark:hover:text-primary"
                                            >
                                                Ape Bridge
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <TestnetWrapper>
                        {!isMobile && chainId && NETWORK_LABELS[chainId] && (
                            <NetworkCard>{NETWORK_LABELS[chainId]}</NetworkCard>
                        )}
                    </TestnetWrapper>
                    <AccountElement active={!!account} style={{ pointerEvents: "auto" }}>
                        {account && userEthBalance ? (
                            <BalanceText
                                style={{ flexShrink: 0 }}
                                pl="0.75rem"
                                pr="0.5rem"
                                fontWeight={500}
                            >
                                {userEthBalance?.toSignificant(4)} ETH
                            </BalanceText>
                        ) : null}
                        <Web3Status />
                    </AccountElement>
                    <VersionSwitch />
                    <Settings />
                    {/* Theme Toggle */}
                    {/* <div className="mr-[60px] flex items-center justify-end lg:mr-0">
            <label
              htmlFor="themeSwitcher"
              className="inline-flex cursor-pointer items-center"
              aria-label="themeSwitcher"
              
            >
              <input
                type="checkbox"
                name="themeSwitcher"
                id="themeSwitcher"
                className="sr-only"
              />
              <span className="hidden dark:block">
                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >                
                </svg>
              </span>
              <span className="block dark:hidden">
                <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <g clip-path="url(#clip0_1_11114)">
                   <path d="M11.5658 16.4998C10.1071 16.4998 8.70815 15.9204 7.6767 14.8889C6.64525 13.8575 6.06579 12.4585 6.06579 10.9998C6.06579 9.54115 6.64525 8.1422 7.6767 7.11075C8.70815 6.0793 10.1071 5.49984 11.5658 5.49984C13.0245 5.49984 14.4234 6.0793 15.4549 7.11075C16.4863 8.1422 17.0658 9.54115 17.0658 10.9998C17.0658 12.4585 16.4863 13.8575 15.4549 14.8889C14.4234 15.9204 13.0245 16.4998 11.5658 16.4998ZM11.5658 14.6665C12.5382 14.6665 13.4709 14.2802 14.1585 13.5926C14.8461 12.9049 15.2325 11.9723 15.2325 10.9998C15.2325 10.0274 14.8461 9.09475 14.1585 8.40711C13.4709 7.71948 12.5382 7.33317 11.5658 7.33317C10.5933 7.33317 9.6607 7.71948 8.97306 8.40711C8.28543 9.09475 7.89912 10.0274 7.89912 10.9998C7.89912 11.9723 8.28543 12.9049 8.97306 13.5926C9.6607 14.2802 10.5933 14.6665 11.5658 14.6665ZM10.6491 0.916504H12.4825V3.6665H10.6491V0.916504ZM10.6491 18.3332H12.4825V21.0832H10.6491V18.3332ZM3.78787 4.51809L5.08404 3.22192L7.02829 5.16617L5.73212 6.46234L3.78787 4.519V4.51809ZM16.1033 16.8335L17.3995 15.5373L19.3437 17.4816L18.0475 18.7778L16.1033 16.8335ZM18.0475 3.221L19.3437 4.51809L17.3995 6.46234L16.1033 5.16617L18.0475 3.22192V3.221ZM5.73212 15.5373L7.02829 16.8335L5.08404 18.7778L3.78787 17.4816L5.73212 15.5373ZM21.6491 10.0832V11.9165H18.8991V10.0832H21.6491ZM4.23245 10.0832V11.9165H1.48245V10.0832H4.23245Z" fill="#181C31" />
                 </g>
                 <defs>
                   <clipPath id="clip0_1_11114">
                     <rect width="22" height="22" fill="white" transform="translate(0.565796)" />
                   </clipPath>
                 </defs>
                </svg>
              </span>
            </label>
          </div> */}
                </div>
            </div>
        </header>
    );
}
