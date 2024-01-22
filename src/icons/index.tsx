"use client"
import React from "react";

const sizes = {
    xs: "h-auto w-3",
    sm: "h-auto w-4",
    md: "h-auto w-5",
    mid: "h-auto w-6",
    lg: "h-auto w-7",
    xl: "h-auto w-9",
    xxl: "h-auto w-14",
    original: "",
  };
  
  interface iconProp {
    size?: "xs" | "sm" | "md" | "mid" | "lg" | "xl" | "xxl" | "original";
    className?: string;
  }


  export const HomeIcon = ({ size = "original", className }: iconProp) => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" className={`${sizes[size]} ${className ? className : ""}`} width="21" height="21" viewBox="0 0 24 24" id="home"><path fill="none" stroke="" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.65721519,18.7714023 L6.65721519,15.70467 C6.65719744,14.9246392 7.29311743,14.2908272 8.08101266,14.2855921 L10.9670886,14.2855921 C11.7587434,14.2855921 12.4005063,14.9209349 12.4005063,15.70467 L12.4005063,15.70467 L12.4005063,18.7809263 C12.4003226,19.4432001 12.9342557,19.984478 13.603038,20 L15.5270886,20 C17.4451246,20 19,18.4606794 19,16.5618312 L19,16.5618312 L19,7.8378351 C18.9897577,7.09082692 18.6354747,6.38934919 18.0379747,5.93303245 L11.4577215,0.685301154 C10.3049347,-0.228433718 8.66620456,-0.228433718 7.51341772,0.685301154 L0.962025316,5.94255646 C0.362258604,6.39702249 0.00738668938,7.09966612 0,7.84735911 L0,16.5618312 C0,18.4606794 1.55487539,20 3.47291139,20 L5.39696203,20 C6.08235439,20 6.63797468,19.4499381 6.63797468,18.7714023 L6.63797468,18.7714023" transform="translate(2.5 2)"></path></svg>
    )
  }

  export const BellIcon = ({ size = "original", className }: iconProp) => {
    return (
      <svg
        className={`${sizes[size]} ${className ? className : ""}`}
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.66667 23.3333H11.6667C11.6667 23.9522 11.9125 24.5457 12.3501 24.9832C12.7877 25.4208 13.3812 25.6667 14 25.6667C14.6188 25.6667 15.2123 25.4208 15.6499 24.9832C16.0875 24.5457 16.3333 23.9522 16.3333 23.3333H23.3333C23.6427 23.3333 23.9395 23.2104 24.1583 22.9916C24.3771 22.7728 24.5 22.4761 24.5 22.1667C24.5 21.8572 24.3771 21.5605 24.1583 21.3417C23.9395 21.1229 23.6427 21 23.3333 21V12.8333C23.3333 10.358 22.35 7.98401 20.5997 6.23367C18.8493 4.48333 16.4754 3.5 14 3.5C11.5246 3.5 9.15068 4.48333 7.40034 6.23367C5.65 7.98401 4.66667 10.358 4.66667 12.8333V21C4.35725 21 4.0605 21.1229 3.84171 21.3417C3.62292 21.5605 3.5 21.8572 3.5 22.1667C3.5 22.4761 3.62292 22.7728 3.84171 22.9916C4.0605 23.2104 4.35725 23.3333 4.66667 23.3333ZM7 12.8333C7 10.9768 7.7375 9.19634 9.05025 7.88359C10.363 6.57083 12.1435 5.83333 14 5.83333C15.8565 5.83333 17.637 6.57083 18.9497 7.88359C20.2625 9.19634 21 10.9768 21 12.8333V21H7V12.8333Z"
          fill="#2D9CDB"
        />
      </svg>
    );
  };

  export const EmailIcon = ({ size = "original", className }: iconProp) => {
    return (
      <svg
        width="22"
        height="18"
        viewBox="0 0 22 18"
        className={`${sizes[size]} ${className ? className : ""}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.97518e-09 5.124L10.654 10.665C10.7609 10.7206 10.8795 10.7496 11 10.7496C11.1205 10.7496 11.2391 10.7206 11.346 10.665L22 5.125V14.75C22.0001 15.5801 21.6824 16.3788 21.1123 16.9822C20.5422 17.5856 19.7628 17.948 18.934 17.995L18.75 18H3.25C2.41986 18.0001 1.62117 17.6824 1.01777 17.1123C0.414367 16.5422 0.0519987 15.7628 0.00500012 14.934L6.97518e-09 14.75V5.124ZM3.25 6.97519e-09H18.75C19.5801 -5.43467e-05 20.3788 0.317554 20.9822 0.887671C21.5856 1.45779 21.948 2.23719 21.995 3.066L22 3.25V3.434L11 9.154L6.97518e-09 3.434V3.25C-5.43467e-05 2.41986 0.317554 1.62117 0.887672 1.01777C1.45779 0.414367 2.23719 0.0519987 3.066 0.00500012L3.25 6.97519e-09H18.75H3.25Z"
          fill="#2A2A2A"
        />
      </svg>
    );
  };

  export const GearIcon = ({ size = "original", className }: iconProp) => {
    return (
      <svg
        className={`${sizes[size]} ${className ? className : ""}`}
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.0001 9.625C13.1348 9.625 12.2889 9.88159 11.5694 10.3623C10.85 10.8431 10.2892 11.5263 9.95809 12.3258C9.62696 13.1252 9.54032 14.0048 9.70913 14.8535C9.87794 15.7022 10.2946 16.4817 10.9065 17.0936C11.5183 17.7054 12.2979 18.1221 13.1465 18.2909C13.9952 18.4597 14.8749 18.3731 15.6743 18.042C16.4737 17.7108 17.157 17.1501 17.6377 16.4306C18.1185 15.7111 18.375 14.8653 18.375 14C18.3737 12.8401 17.9123 11.7281 17.0921 10.9079C16.272 10.0877 15.16 9.62637 14.0001 9.625ZM14.0001 16.625C13.4809 16.625 12.9734 16.471 12.5417 16.1826C12.11 15.8942 11.7736 15.4842 11.5749 15.0045C11.3762 14.5249 11.3242 13.9971 11.4255 13.4879C11.5268 12.9787 11.7768 12.511 12.1439 12.1438C12.511 11.7767 12.9787 11.5267 13.4879 11.4254C13.9971 11.3241 14.5249 11.3761 15.0046 11.5748C15.4843 11.7735 15.8942 12.1099 16.1827 12.5416C16.4711 12.9733 16.625 13.4808 16.625 14C16.6243 14.696 16.3475 15.3632 15.8554 15.8553C15.3632 16.3474 14.696 16.6242 14.0001 16.625Z"
          fill="#FF5B5B"
        />
        <path
          d="M5.48931 8.55982C5.05905 8.39818 4.58279 8.41024 4.16126 8.59346C3.73974 8.77668 3.40602 9.11668 3.2307 9.54155C3.05538 9.96642 3.0522 10.4428 3.22185 10.87C3.3915 11.2972 3.72066 11.6416 4.13971 11.8304C4.56601 12.0107 4.92974 12.3126 5.18546 12.6984C5.44118 13.0843 5.57756 13.5369 5.57756 13.9997C5.57756 14.4626 5.44118 14.9152 5.18546 15.301C4.92974 15.6869 4.56601 15.9888 4.13971 16.1691C3.72056 16.3579 3.39132 16.7024 3.22165 17.1296C3.05198 17.5569 3.05519 18.0334 3.2306 18.4583C3.40602 18.8833 3.73988 19.2233 4.16153 19.4064C4.58318 19.5896 5.05955 19.6015 5.48983 19.4397C5.91921 19.2648 6.39064 19.2205 6.84506 19.3124C7.29949 19.4042 7.71671 19.6281 8.04446 19.956C8.3722 20.2839 8.59591 20.7013 8.68754 21.1557C8.77918 21.6102 8.73467 22.0816 8.5596 22.5109C8.39271 22.9423 8.40307 23.4222 8.58842 23.846C8.77376 24.2698 9.11908 24.6032 9.54914 24.7736C9.7645 24.8627 9.99531 24.9086 10.2284 24.9086C10.5689 24.911 10.9026 24.8128 11.1875 24.6263C11.4724 24.4399 11.696 24.1735 11.8302 23.8605C12.0105 23.4342 12.3124 23.0705 12.6982 22.8148C13.084 22.559 13.5366 22.4227 13.9995 22.4227C14.4624 22.4227 14.915 22.559 15.3008 22.8148C15.6866 23.0705 15.9885 23.4342 16.1689 23.8605C16.3577 24.2797 16.7022 24.6089 17.1294 24.7786C17.5567 24.9482 18.0332 24.945 18.4581 24.7696C18.883 24.5942 19.223 24.2603 19.4062 23.8387C19.5893 23.417 19.6013 22.9407 19.4394 22.5104C19.2646 22.081 19.2203 21.6096 19.3121 21.1552C19.404 20.7007 19.6279 20.2835 19.9558 19.9558C20.2837 19.628 20.701 19.4043 21.1555 19.3127C21.61 19.221 22.0814 19.2655 22.5107 19.4406C22.9394 19.6071 23.4164 19.5981 23.8386 19.4158C24.2608 19.2334 24.5942 18.8923 24.767 18.466L23.9646 18.1174L23.1683 17.8192C22.4205 17.5137 21.599 17.4361 20.8072 17.5962C20.0154 17.7563 19.2886 18.147 18.7182 18.719C18.1482 19.2936 17.7566 20.0207 17.5906 20.8128C17.4245 21.605 17.4912 22.4282 17.7824 23.1833C17.4703 22.438 16.9446 21.8019 16.2715 21.355C15.5984 20.9082 14.808 20.6706 14.0001 20.6723C13.1904 20.6748 12.3988 20.9119 11.721 21.355C11.0433 21.798 10.5085 22.428 10.1813 23.1686C10.4866 22.4208 10.5641 21.5993 10.404 20.8076C10.244 20.0158 9.85344 19.289 9.28156 18.7185C8.70694 18.1486 7.97978 17.757 7.18769 17.591C6.39561 17.425 5.57241 17.4916 4.81731 17.7828C5.5625 17.4705 6.19857 16.9447 6.64534 16.2715C7.0921 15.5983 7.32956 14.8079 7.32777 14C7.32526 13.1903 7.08814 12.3986 6.64509 11.7209C6.20204 11.0432 5.57207 10.5084 4.8314 10.1812C5.57924 10.4867 6.40071 10.5643 7.19252 10.4042C7.98434 10.2441 8.71115 9.85348 9.28156 9.28144C9.85153 8.70687 10.2431 7.9797 10.4092 7.1876C10.5752 6.39549 10.5086 5.57227 10.2173 4.81719C10.5295 5.56238 11.0554 6.19845 11.7285 6.64521C12.4017 7.09198 13.1921 7.32944 14.0001 7.32765C14.8098 7.32514 15.6014 7.08801 16.2791 6.64497C16.9569 6.20192 17.4917 5.57194 17.8188 4.83127C17.5135 5.57915 17.436 6.40057 17.5961 7.19235C17.7562 7.98412 18.1467 8.71092 18.7186 9.28144C19.2934 9.85111 20.0205 10.2425 20.8126 10.4085C21.6046 10.5745 22.4277 10.5081 23.1829 10.2172C22.4413 10.5287 21.8078 11.0517 21.3614 11.7208C20.9149 12.3899 20.6753 13.1757 20.6724 13.98C20.6695 14.7844 20.9034 15.5719 21.345 16.2442C21.7865 16.9165 22.4162 17.4441 23.1556 17.761C23.158 17.7682 23.158 17.776 23.1556 17.7832L23.9643 18.1169L24.7684 18.4617L24.7731 18.4506C24.9517 18.0268 24.9561 17.5497 24.7852 17.1228C24.6144 16.6959 24.2821 16.3535 23.8605 16.17C23.4342 15.9896 23.0704 15.6877 22.8147 15.3019C22.559 14.9161 22.4226 14.4635 22.4226 14.0006C22.4226 13.5377 22.559 13.0851 22.8147 12.6993C23.0704 12.3135 23.4342 12.0116 23.8605 11.8313C24.2796 11.6425 24.6088 11.298 24.7785 10.8707C24.9482 10.4435 24.945 9.96696 24.7696 9.54203C24.5941 9.1171 24.2603 8.77708 23.8386 8.59393C23.417 8.41078 22.9406 8.39886 22.5103 8.5607C22.081 8.73556 21.6095 8.77984 21.1551 8.68799C20.7007 8.59613 20.2835 8.37223 19.9557 8.04432C19.628 7.71641 19.4043 7.29909 19.3126 6.84462C19.221 6.39015 19.2655 5.91874 19.4406 5.48945C19.6023 5.05918 19.5904 4.58286 19.4072 4.16126C19.224 3.73966 18.884 3.40585 18.4591 3.23048C18.0342 3.05511 17.5578 3.05192 17.1305 3.22159C16.7033 3.39126 16.3589 3.72048 16.1701 4.13959C15.9898 4.56589 15.6879 4.92962 15.302 5.18534C14.9162 5.44106 14.4636 5.57744 14.0007 5.57744C13.5379 5.57744 13.0853 5.44106 12.6994 5.18534C12.3136 4.92962 12.0117 4.56589 11.8314 4.13959C11.6426 3.72044 11.2981 3.3912 10.8708 3.22153C10.4436 3.05186 9.96708 3.05507 9.54215 3.23048C9.11722 3.4059 8.77721 3.73975 8.59406 4.16141C8.41091 4.58306 8.39899 5.05943 8.56082 5.48971C8.73569 5.91909 8.77997 6.39051 8.68811 6.84494C8.59626 7.29937 8.37235 7.71659 8.04444 8.04433C7.71654 8.37208 7.29921 8.59578 6.84474 8.68742C6.39027 8.77905 5.91886 8.73455 5.48957 8.55947L5.48931 8.55982Z"
          fill="#FF5B5B"
        />
      </svg>
    );
  };

  export const EmailsIcon = ({ size = "original", className }: iconProp) => {
    return (
      <svg
        className={`${sizes[size]} ${className ? className : ""}`}
        width="20"
        height="21"
        viewBox="0 0 20 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 10.9667C10.4603 10.9667 10.8334 10.5937 10.8334 10.1334C10.8334 9.67318 10.4603 9.30008 10 9.30008C9.53978 9.30008 9.16669 9.67318 9.16669 10.1334C9.16669 10.5937 9.53978 10.9667 10 10.9667Z"
          fill="#464255"
        />
        <path
          d="M6.66665 10.9667C7.12688 10.9667 7.49998 10.5937 7.49998 10.1334C7.49998 9.67318 7.12688 9.30008 6.66665 9.30008C6.20641 9.30008 5.83331 9.67318 5.83331 10.1334C5.83331 10.5937 6.20641 10.9667 6.66665 10.9667Z"
          fill="#464255"
        />
        <path
          d="M13.3333 10.9667C13.7936 10.9667 14.1667 10.5937 14.1667 10.1334C14.1667 9.67318 13.7936 9.30008 13.3333 9.30008C12.8731 9.30008 12.5 9.67318 12.5 10.1334C12.5 10.5937 12.8731 10.9667 13.3333 10.9667Z"
          fill="#464255"
        />
        <path
          d="M2.54157 19.1919C2.71598 19.2639 2.90289 19.3007 3.09157 19.3003C3.27764 19.3012 3.46201 19.2648 3.63377 19.1932C3.80554 19.1217 3.9612 19.0164 4.09157 18.8836L6.1749 16.8003H14.1666C15.2716 16.8003 16.3314 16.3613 17.1128 15.5799C17.8942 14.7985 18.3332 13.7387 18.3332 12.6336V7.63359C18.3332 6.52852 17.8942 5.46871 17.1128 4.68731C16.3314 3.90591 15.2716 3.46692 14.1666 3.46692H5.83323C4.72816 3.46692 3.66836 3.90591 2.88695 4.68731C2.10555 5.46871 1.66657 6.52852 1.66657 7.63359V17.8753C1.66392 18.1571 1.7459 18.4332 1.90189 18.6679C2.05788 18.9027 2.28072 19.0852 2.54157 19.1919ZM3.33323 7.63359C3.33323 6.97054 3.59662 6.33466 4.06547 5.86582C4.53431 5.39698 5.17019 5.13359 5.83323 5.13359H14.1666C14.8296 5.13359 15.4655 5.39698 15.9343 5.86582C16.4032 6.33466 16.6666 6.97054 16.6666 7.63359V12.6336C16.6666 13.2966 16.4032 13.9325 15.9343 14.4014C15.4655 14.8702 14.8296 15.1336 14.1666 15.1336H5.83323C5.72356 15.133 5.61484 15.154 5.51331 15.1954C5.41178 15.2369 5.31943 15.298 5.24157 15.3753L3.33323 17.2919V7.63359Z"
          fill="#464255"
        />
      </svg>
    );
  };

  export const GiftBoxIcon = ({ size = "original", className }: iconProp) => {
    return (
      <svg
        className={`${sizes[size]} ${className ? className : ""}`}
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M23.625 6.12506H22.75V2.62506C22.75 2.47268 22.7102 2.32295 22.6345 2.19068C22.5589 2.05841 22.45 1.94819 22.3186 1.87093C22.1873 1.79367 22.0381 1.75205 21.8857 1.75019C21.7333 1.74832 21.5831 1.78629 21.4499 1.86031L14 5.99915L6.55007 1.86031C6.41688 1.78629 6.26667 1.74832 6.11431 1.75019C5.96194 1.75205 5.8127 1.79367 5.68136 1.87093C5.55002 1.94819 5.44113 2.05841 5.36547 2.19068C5.28981 2.32295 5.25001 2.47268 5.25 2.62506V6.12506H4.375C3.67904 6.12582 3.01181 6.40263 2.51969 6.89475C2.02757 7.38687 1.75076 8.0541 1.75 8.75006V11.3751C1.75076 12.071 2.02757 12.7383 2.51969 13.2304C3.01181 13.7225 3.67904 13.9993 4.375 14.0001H5.25V23.6251C5.25076 24.321 5.52757 24.9882 6.01969 25.4804C6.51181 25.9725 7.17904 26.2493 7.875 26.2501H20.125C20.821 26.2493 21.4882 25.9725 21.9803 25.4804C22.4724 24.9882 22.7492 24.321 22.75 23.6251V14.0001H23.625C24.321 13.9993 24.9882 13.7225 25.4803 13.2304C25.9724 12.7383 26.2492 12.071 26.25 11.3751V8.75006C26.2492 8.0541 25.9724 7.38687 25.4803 6.89475C24.9882 6.40263 24.321 6.12582 23.625 6.12506ZM21 6.12506H17.3769L21 4.11256V6.12506ZM7 4.11256L10.6231 6.12506H7V4.11256ZM7 23.6251V14.0001H13.125V24.5001H7.875C7.64303 24.4998 7.42064 24.4075 7.25661 24.2434C7.09258 24.0794 7.0003 23.857 7 23.6251ZM21 23.6251C20.9997 23.857 20.9074 24.0794 20.7434 24.2434C20.5794 24.4075 20.357 24.4998 20.125 24.5001H14.875V14.0001H21V23.6251ZM24.5 11.3751C24.4997 11.607 24.4074 11.8294 24.2434 11.9934C24.0794 12.1575 23.857 12.2498 23.625 12.2501H4.375C4.14303 12.2498 3.92064 12.1575 3.75661 11.9934C3.59258 11.8294 3.5003 11.607 3.5 11.3751V8.75006C3.5003 8.51809 3.59258 8.2957 3.75661 8.13167C3.92064 7.96764 4.14303 7.87536 4.375 7.87506H23.625C23.857 7.87536 24.0794 7.96764 24.2434 8.13167C24.4074 8.2957 24.4997 8.51809 24.5 8.75006V11.3751Z"
          fill="#5E6C93"
        />
      </svg>
    );
  };

  export const SearchIcon = ({ size = "original", className }: iconProp) => {
    return (
      <svg
        className={`${sizes[size]} ${className ? className : ""}`}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M23.7871 22.7761L17.9548 16.9437C19.5193 15.145 20.4665 12.7982 20.4665 10.2333C20.4665 4.58714 15.8741 0 10.2333 0C4.58714 0 0 4.59246 0 10.2333C0 15.8741 4.59246 20.4665 10.2333 20.4665C12.7982 20.4665 15.145 19.5193 16.9437 17.9548L22.7761 23.7871C22.9144 23.9255 23.1007 24 23.2816 24C23.4625 24 23.6488 23.9308 23.7871 23.7871C24.0639 23.5104 24.0639 23.0528 23.7871 22.7761ZM1.43149 10.2333C1.43149 5.38004 5.38004 1.43681 10.2279 1.43681C15.0812 1.43681 19.0244 5.38537 19.0244 10.2333C19.0244 15.0812 15.0812 19.035 10.2279 19.035C5.38004 19.035 1.43149 15.0865 1.43149 10.2333Z"
          fill="#A4A4A4"
        />
      </svg>
    );
  };

  export const Moon = ({ size = "original", className }: iconProp) => {
    return ( 
        <svg xmlns="http://www.w3.org/2000/svg"  width="24" height="24" className={`${sizes[size]} ${className ? className : ""}`} fill="" viewBox="0 0 20 20" id="moon"><path d="M13.719 1.8A8.759 8.759 0 1 1 1.8 13.719c3.335 1.867 7.633 1.387 10.469-1.449 2.837-2.837 3.318-7.134 1.45-10.47z"></path></svg>
    );
  };

  export const Sun =  ({ size = "original", className }: iconProp) => {
    return ( 
        <svg xmlns="http://www.w3.org/2000/svg" className={`${sizes[size]} ${className ? className : ""}`} width="25" height="25" fill="" viewBox="0 0 32 32" id="sun"><path d="M16 7c-4.962 0-9 4.037-9 9s4.038 9 9 9c4.963 0 9-4.037 9-9s-4.037-9-9-9zm0 15c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6zm0-16.361a1.5 1.5 0 0 0 1.5-1.5V2a1.5 1.5 0 0 0-3 0v2.139a1.5 1.5 0 0 0 1.5 1.5zM6.552 8.673a1.498 1.498 0 0 0 2.122 0 1.5 1.5 0 0 0 0-2.121L7.16 5.04A1.5 1.5 0 1 0 5.04 7.161l1.512 1.512zM5.638 16a1.5 1.5 0 0 0-1.5-1.5H2a1.5 1.5 0 0 0 0 3h2.138a1.5 1.5 0 0 0 1.5-1.5zm.914 7.327L5.04 24.84a1.5 1.5 0 1 0 2.121 2.121l1.512-1.512a1.5 1.5 0 1 0-2.12-2.12zM16 26.361a1.5 1.5 0 0 0-1.5 1.5V30a1.5 1.5 0 0 0 3 0v-2.139a1.5 1.5 0 0 0-1.5-1.5zm9.448-3.034a1.5 1.5 0 1 0-2.12 2.121l1.51 1.512a1.496 1.496 0 0 0 2.121 0 1.5 1.5 0 0 0 .001-2.121l-1.512-1.512zM30 14.5h-2.139a1.5 1.5 0 0 0 0 3H30a1.5 1.5 0 0 0 0-3zm-5.612-5.388c.383 0 .767-.146 1.06-.44l1.512-1.51a1.5 1.5 0 1 0-2.121-2.122l-1.512 1.512a1.5 1.5 0 0 0 1.06 2.56z"></path></svg>
    );
  };
  
  export const Cog = ({ size = "original", className }: iconProp) => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" className={`${sizes[size]} ${className ? className : ""}`} width="24" height="24" id="settings"><g fill="none" fill-rule="evenodd" stroke=""><path d="m6.281 15.092.178.328-2.227 2.226a.5.5 0 0 0 0 .708l1.414 1.414a.5.5 0 0 0 .708 0L8.58 17.54l.328.178c.392.213.806.384 1.235.512l.357.106V21a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-2.663l.357-.106c.43-.128.843-.3 1.235-.512l.328-.178 2.226 2.227a.5.5 0 0 0 .708 0l1.414-1.414a.5.5 0 0 0 0-.708L17.54 15.42l.178-.328c.213-.392.384-.806.512-1.235l.106-.357H21a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-2.663l-.106-.357a6.457 6.457 0 0 0-.512-1.235l-.178-.328 2.227-2.226a.5.5 0 0 0 0-.708l-1.414-1.414a.5.5 0 0 0-.708 0L15.42 6.46l-.328-.178a6.457 6.457 0 0 0-1.235-.512l-.357-.106V3a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5v2.663l-.357.106c-.43.128-.843.3-1.235.512l-.328.178-2.226-2.227a.5.5 0 0 0-.708 0L4.232 5.646a.5.5 0 0 0 0 .708L6.46 8.58l-.178.328a6.457 6.457 0 0 0-.512 1.235l-.106.357H3a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h2.663l.106.357c.128.43.3.843.512 1.235z"></path><circle cx="12.212" cy="11.788" r="3.191"></circle></g></svg>
    );
  }; 

  export const Courses = ({ size = "original", className }: iconProp) => {
    return(
      <svg xmlns="http://www.w3.org/2000/svg" className={`${sizes[size]} ${className ? className : ""}`} width="20" height="20" viewBox="0 0 30 32" fill="" id="book"><path d="M27.042 0h-22A5.036 5.036 0 0 0 .008 4.968L0 4.958v22A5.043 5.043 0 0 0 5.042 32h17C23.146 32 24 31.104 24 30V9c0-.552-.406-1-.958-1h-18C3.364 8 2 6.718 2 5.042A3.045 3.045 0 0 1 5.042 2H26v23c0 .552.49 1 1.042 1s.958-.448.958-1V1c0-.552-.406-1-.958-1zm-22 10h16.96l.04 20h-17A3.045 3.045 0 0 1 2 26.958V9.022c.84.616 1.89.978 3.042.978z"></path></svg>
    )
  }

  export const Task = ({ size = "original", className }: iconProp) => {
    return(
      <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" className={`${sizes[size]} ${className ? className : ""}`} width="25" height="25" viewBox="0 0 100 100" fill=""  id="task"><path d="M19.625 94.5h60.75a4.108 4.108 0 0 0 4.105-4.104V9.604A4.108 4.108 0 0 0 80.376 5.5H19.625a4.108 4.108 0 0 0-4.104 4.104v80.792a4.108 4.108 0 0 0 4.104 4.104Zm47.84-86v2.913a1.064 1.064 0 0 1-1.063 1.062H33.598a1.064 1.064 0 0 1-1.063-1.062V8.5ZM18.52 9.604A1.105 1.105 0 0 1 19.625 8.5h9.91v2.913a4.067 4.067 0 0 0 4.063 4.062h32.804a4.067 4.067 0 0 0 4.063-4.062V8.5h9.91a1.105 1.105 0 0 1 1.104 1.104v80.792a1.105 1.105 0 0 1-1.104 1.104h-60.75a1.105 1.105 0 0 1-1.105-1.104Z"></path><path d="M57.961 62.795 48.61 74.213l-6.738-5.962a1.5 1.5 0 0 0-1.988 2.248l7.905 6.993a1.5 1.5 0 0 0 .994.377c.04 0 .08-.002.12-.005a1.502 1.502 0 0 0 1.04-.545l10.34-12.622a1.5 1.5 0 1 0-2.322-1.902zM31.657 28.3H57.83a1.5 1.5 0 0 0 0-3H31.657a1.5 1.5 0 0 0 0 3zm0 7.715h36.686a1.5 1.5 0 0 0 0-3H31.657a1.5 1.5 0 0 0 0 3zm0 7.714h36.686a1.5 1.5 0 0 0 0-3H31.657a1.5 1.5 0 0 0 0 3z"></path></svg>
    )
  }

  export const Play = ({ size = "original", className }: iconProp) => {
    return(
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" className={`${sizes[size]} ${className ? className : ""}`} viewBox="0 0 50 50" id="play"><path fill="none" d="M0 0h48v48H0z"></path><path d="m20 33 12-9-12-9v18zm4-29C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm0 36c-8.82 0-16-7.18-16-16S15.18 8 24 8s16 7.18 16 16-7.18 16-16 16z"></path></svg>
    )
  }

  export const Reward = ({ size = "original", className }: iconProp) => {
    return(  
      <svg xmlns="http://www.w3.org/2000/svg" className={`${sizes[size]} ${className ? className : ""}`} width="25" height="25" viewBox="0 0 512 512" fill="" id="reward"><path d="M451,195C451,87.48,363.52,0,256,0S61,87.48,61,195a194.46,194.46,0,0,0,60,140.58V497a15,15,0,0,0,21.71,13.42L256,453.77l113.29,56.65A15,15,0,0,0,391,497V335.58A194.46,194.46,0,0,0,451,195ZM91,195c0-91,74-165,165-165s165,74,165,165S347,360,256,360,91,286,91,195ZM361,472.73l-98.29-49.15a15,15,0,0,0-13.42,0L151,472.73V359.25a194.64,194.64,0,0,0,210,0Z"></path><path d="M167.57,295.49a15,15,0,0,0,23.08,16.77L256,264.79l65.35,47.47a15,15,0,0,0,23.08-16.77l-25-76.82,65.35-47.47A15,15,0,0,0,376,144.06H295.23l-25-76.82a15,15,0,0,0-28.54,0l-25,76.82H136a15,15,0,0,0-8.82,27.14l65.35,47.47Zm14.6-121.43h45.5a15,15,0,0,0,14.27-10.36L256,120.42l14.06,43.28a15,15,0,0,0,14.27,10.36h45.5L293,200.81a15,15,0,0,0-5.45,16.77l14.06,43.28-36.81-26.75a15,15,0,0,0-17.64,0l-36.81,26.75,14.06-43.28A15,15,0,0,0,219,200.81Z"></path></svg>
    )
  }  

  export const Board = ({ size = "original", className }: iconProp) => {
    return(  
      <svg xmlns="http://www.w3.org/2000/svg" className={`${sizes[size]} ${className ? className : ""}`} width="25" height="25" viewBox="0 0 52 52" id="board"><g fill="none" stroke="" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><path d="M10.984 19.654h5.428v13.509h-5.428zM23.286 15.26h5.428v17.903h-5.428zM35.588 10.317h5.428v22.846h-5.428z"></path><path d="M44.7 33.163H7.3A2.563 2.563 0 0 1 4.736 30.6V4.563A2.563 2.563 0 0 1 7.299 2h37.402a2.563 2.563 0 0 1 2.562 2.563V30.6a2.563 2.563 0 0 1-2.562 2.563zM39.675 50l-8.931-16.834M21.256 33.166 12.325 50M26 33.163V50"></path></g><g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><path d="M10.984 19.654h5.428v13.509h-5.428zM23.286 15.26h5.428v17.903h-5.428zM35.588 10.317h5.428v22.846h-5.428z"></path><path d="M44.7 33.163H7.3A2.563 2.563 0 0 1 4.736 30.6V4.563A2.563 2.563 0 0 1 7.299 2h37.402a2.563 2.563 0 0 1 2.562 2.563V30.6a2.563 2.563 0 0 1-2.562 2.563zM39.675 50l-8.931-16.834M21.256 33.166 12.325 50M26 33.163V50"></path></g></svg>
    )
  }  

  export const ArrowDown = ({ size = "original", className }: iconProp) => {
    return( 
      <svg className={`${sizes[size]} ${className ? className : ""}`} fill="none" stroke="#8884d8" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
      </svg>
    )
  } 

  export const Calender = ({ size = "original", className }: iconProp) => {
    return( 
      <svg xmlns="http://www.w3.org/2000/svg" className={`${sizes[size]} ${className ? className : ""}`} fill="none" stroke="#8884d8"  data-name="Layer 1" viewBox="0 0 48 48" id="calender"><path d="M42,44H6V8H42ZM8,42H40V10H8Z"></path><path d="M38,40H10V14H38ZM12,38H36V16H12Z"></path><path d="M23 26H15V18h8zm-6-2h4V20H17zM33 26H25V18h8zm-6-2h4V20H27zM23 36H15V28h8zm-6-2h4V30H17zM33 36H25V28h8zm-6-2h4V30H27zM17.5 13A4.5 4.5 0 1122 8.5H20A2.5 2.5 0 1017.5 11zM30.5 13A4.5 4.5 0 1135 8.5H33A2.5 2.5 0 1030.5 11z"></path></svg>
    )
  } 

  export const PlusCircle = ({ size = "original", className }: iconProp) => {
    return( 
      <svg xmlns="http://www.w3.org/2000/svg" className={`${sizes[size]} ${className ? className : ""}`} viewBox="0 0 24 24" id="plus"><g data-name="Layer 2"><g data-name="plus-circle"><rect width="24" height="24" opacity="0"></rect><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"></path><path d="M15 11h-2V9a1 1 0 0 0-2 0v2H9a1 1 0 0 0 0 2h2v2a1 1 0 0 0 2 0v-2h2a1 1 0 0 0 0-2z"></path></g></g></svg>
    )
  } 

  export const FileComplete = ({ size = "original", className }: iconProp) => {
    return( 
      <svg xmlns="http://www.w3.org/2000/svg" className={`${sizes[size]} ${className ? className : ""}`}  viewBox="0 0 16 16" id="file"><path fill="#231f20" d="M3.752.034C2.785.034 2 .82 2 1.788v10.515c0 .967.785 1.752 1.752 1.752H8.27c.007 0 .011-.006.02-.007a3.252 3.252 0 0 0 2.98 1.962 3.254 3.254 0 0 0 3.25-3.25 3.252 3.252 0 0 0-2.02-3.003V4.305c0-.008-.009-.014-.01-.023a.244.244 0 0 0-.062-.176l-4-4c-.052-.05-.124-.064-.194-.06-.01-.001-.017-.012-.027-.012H3.752zm0 .5H8v2.262c0 .959.78 1.738 1.738 1.738H12V9.6a3.204 3.204 0 0 0-.73-.09 3.254 3.254 0 0 0-3.25 3.25c0 .276.044.54.109.795H3.752c-.69 0-1.252-.564-1.252-1.254V1.788c0-.691.562-1.254 1.252-1.254zM8.5.926l3.125 3.108H9.738A1.24 1.24 0 0 1 8.5 2.796V.926zm2.77 9.084a2.752 2.752 0 0 1 2.75 2.75 2.752 2.752 0 0 1-2.75 2.75 2.752 2.752 0 0 1-2.75-2.75 2.752 2.752 0 0 1 2.75-2.75zm1.11 1.696-1.484 1.482-.74-.738-.351.353 1.091 1.092 1.838-1.838-.353-.351z"></path></svg>
    )
  }

  export const FileUncomplete = ({ size = "original", className }: iconProp) => {
    return( 
      <svg xmlns="http://www.w3.org/2000/svg"  className={`${sizes[size]} ${className ? className : ""}`} id="file" x="0" y="0" enable-background="new 0 0 16 16" version="1.1" viewBox="0 0 16 16" xmlSpace="preserve"><path id="rect7" fill="#231f20" stroke="none" d="M3.754 0C2.787 0 2 .787 2 1.754V12.27c0 .967.787 1.751 1.754 1.751H8.27c.007 0 .011-.006.02-.007a3.252 3.252 0 0 0 2.98 1.963 3.254 3.254 0 0 0 3.25-3.25 3.251 3.251 0 0 0-2.02-3.004V4.27c0-.009-.009-.014-.01-.023a.246.246 0 0 0-.062-.176l-4-4c-.051-.05-.12-.064-.192-.06C8.226.01 8.22 0 8.21 0H3.754Zm0 .5H8v2.262C8 3.72 8.78 4.5 9.738 4.5H12v5.066a3.204 3.204 0 0 0-.73-.09 3.254 3.254 0 0 0-3.25 3.25c0 .277.044.54.109.795H3.754A1.255 1.255 0 0 1 2.5 12.27V1.754C2.5 1.063 3.063.5 3.754.5ZM8.5.893c.763.759 2.289 2.274 3.125 3.107H9.738A1.24 1.24 0 0 1 8.5 2.762V.892zm2.77 9.084a2.752 2.752 0 0 1 2.75 2.75 2.752 2.752 0 0 1-2.75 2.75 2.752 2.752 0 0 1-2.75-2.75 2.752 2.752 0 0 1 2.75-2.75zm-1.518 2.498v.5h2.992v-.5H9.752z"></path></svg>
    )
  }
  export const FileAssign = ({ size = "original", className }: iconProp) => {
    return( 
      <svg xmlns="http://www.w3.org/2000/svg" className={`${sizes[size]} ${className ? className : ""}`} id="file" x="0" y="0" enable-background="new 0 0 16 16" version="1.1" viewBox="0 0 16 16" xmlSpace="preserve"><path id="path7" fill="#231f20" stroke="none" d="M3.754.5C2.787.5 2 1.287 2 2.254v10.992C2 14.213 2.787 15 3.754 15h7.992c.967 0 1.754-.787 1.754-1.754V4.771c0-.007-.007-.012-.008-.019a.244.244 0 0 0-.064-.158l-4-4a.246.246 0 0 0-.153-.067C9.252.52 9.232.5 9.207.5H3.754zm0 .5H9v2.281c0 .96.78 1.74 1.738 1.74H13v8.225c0 .691-.564 1.254-1.254 1.254H3.754c-.69 0-1.254-.563-1.254-1.254V2.254C2.5 1.563 3.064 1 3.754 1zm5.748.395 3.144 3.126h-1.908a1.24 1.24 0 0 1-1.236-1.24V1.395zm.682 8.294a.252.252 0 0 0-.18.079L8.529 11.33l.364.344 1.044-1.106v2.694h.5v-2.703l1.086 1.117.36-.35-1.518-1.56c-.048-.05-.097-.07-.181-.077z"></path></svg>
    )
  }

  export const Team = ({ size = "original", className }: iconProp) => {
    return( 
      <svg xmlns="http://www.w3.org/2000/svg" className={`${sizes[size]} ${className ? className : ""}`} width="38" height="38" fill="" viewBox="0 0 50 50" id="discussion-teamwork"><path d="M45 41H3c-1.103 0-2-.897-2-2V3c0-1.103.897-2 2-2h42c1.103 0 2 .897 2 2v36c0 1.103-.897 2-2 2zM3 3v36h42.002L45 3H3z"></path><path d="M47 35H1V3c0-1.103.897-2 2-2h42c1.103 0 2 .897 2 2v32zM3 33h42V3H3v30zm30 14H15v-8h18v8zm-16-2h14v-4H17v4z"></path><path d="M34 47H14a1 1 0 1 1 0-2h20a1 1 0 1 1 0 2zM17 25c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zm0-4a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm3 14h-6c-1.103 0-2-.897-2-2v-3c0-1.654 1.346-3 3-3h4c1.654 0 3 1.346 3 3v3c0 1.103-.897 2-2 2zm-5-6a1 1 0 0 0-1 1v3h6.002L20 30a1 1 0 0 0-1-1h-4zm16-4c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zm0-4a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm3 14h-6c-1.103 0-2-.897-2-2v-3c0-1.654 1.346-3 3-3h4c1.654 0 3 1.346 3 3v3c0 1.103-.897 2-2 2zm-5-6a1 1 0 0 0-1 1v3h6.002L34 30a1 1 0 0 0-1-1h-4zm-5-18c-.13 0-.26-.03-.38-.08s-.23-.12-.33-.21A.99.99 0 0 1 23 10c0-.26.109-.521.29-.71l.149-.12a.782.782 0 0 1 .181-.0... 1-1-1c0-.13.02-.26.08-.38.05-.13.12-.23.21-.33.37-.37 1.04-.37 1.42 0 .09.1.16.2.21.33a.995.995 0 0 1-.21 1.09.994.994 0 0 1-.71.29zm16 0a.99.99 0 0 1-1-1c0-.13.02-.26.08-.38.05-.13.12-.23.21-.33.1-.09.2-.16.33-.21.37-.16.81-.07 1.09.21.09.1.16.2.21.33a.995.995 0 0 1-.21 1.09.994.994 0 0 1-.71.29zm-4 0a.99.99 0 0 1-.92-1.38c.05-.13.12-.24.21-.33.05-.04.1-.09.149-.12a.782.782 0 0 1 .181-.09.885.885 0 0 1 .57-.061c.07.011.13.03.19.061.06.02.12.05.17.09.06.03.11.08.15.12.1.1.17.2.22.33.05.12.08.25.08.38 0 .27-.101.52-.3.71a.954.954 0 0 1-.7.29z"></path><path d="M31 16.997a2 2 0 0 1-1.199-.397L27.667 15h-7.334l-2.134 1.6a2.01 2.01 0 0 1-2.398 0L13.667 15H13c-1.103 0-2-.897-2-2V7c0-1.103.897-2 2-2h22c1.103 0 2 .897 2 2v6c0 1.103-.897 2-2 2h-.667l-2.134 1.6a2 2 0 0 1-1.199.397zM20.333 13h7.334c.43 0 .856.143 1.2.4L31 15l2.134-1.6c.343-.258.77-.4 1.199-.4H35V7H13v6h.667c.43 0 .856.143 1.2.4L17 15l2.134-1.6c.343-.257.769-.4 1.199-.4z"></path><path fill="none" d="M0 0h48v48H0z"></path></svg>
    )
  }

  export const DotMenu = ({ size = "original", className }: iconProp) => {
    return( 
      <svg xmlns="http://www.w3.org/2000/svg" className={`${sizes[size]} ${className ? className : ""}`} width="38" height="38" fill=""  enable-background="new 0 0 24 24" viewBox="0 0 24 24" id="menu"><path d="M5,10c-1.1045532,0-2,0.8954468-2,2s0.8954468,2,2,2c1.1040039-0.0014038,1.9985962-0.8959961,2-2C7,10.8954468,6.1045532,10,5,10z M5,13c-0.5523071,0-1-0.4476929-1-1s0.4476929-1,1-1c0.552124,0.0003662,0.9996338,0.447876,1,1C6,12.5523071,5.5523071,13,5,13z M12,10c-1.1045532,0-2,0.8954468-2,2s0.8954468,2,2,2c1.1040039-0.0014038,1.9985962-0.8959961,2-2C14,10.8954468,13.1045532,10,12,10z M12,13c-0.5523071,0-1-0.4476929-1-1s0.4476929-1,1-1c0.552124,0.0003662,0.9996338,0.447876,1,1C13,12.5523071,12.5523071,13,12,13z M19,10c-1.1045532,0-2,0.8954468-2,2s0.8954468,2,2,2c1.1040039-0.0014038,1.9985962-0.8959961,2-2C21,10.8954468,20.1045532,10,19,10z M19,13c-0.5523071,0-1-0.4476929-1-1s0.4476929-1,1-1c0.552124,0.0003662,0.9996338,0.447876,1,1C20,12.5523071,19.5523071,13,19,13z"></path></svg>
    )
  }

  export const Chat = ({ size = "original", className }: iconProp) => {
    return( 
      <svg xmlns="http://www.w3.org/2000/svg" className={`${sizes[size]} ${className ? className : ""}`} viewBox="0 0 64 64" id="chat"><path fill="" d="M18 54.4h-2.5l1.5-2.1c1.1-1.6 1.9-3.5 2.3-6-7.1-3.2-10.9-9.2-10.9-17.1 0-12.1 9.1-19.6 23.8-19.6C46.9 9.6 56 17.1 56 29.2c0 12.2-8.9 19.6-23.8 19.6h-1c-2.4 2.6-6.4 5.6-13.2 5.6zm14-42.2c-13.3 0-21.2 6.3-21.2 17 0 9.1 5.6 13.2 10.2 15.1l.9.4-.1 1c-.3 2.3-.8 4.3-1.6 6 4.8-.6 7.6-3 9.1-5l.4-.5h2.2c19.1 0 21.2-11.9 21.2-17 .1-10.6-7.8-17-21.1-17z"></path></svg>
    )
  }

  export const LinkIcon = ({ size = "original", className }: iconProp) => {
    return(
      <svg xmlns="http://www.w3.org/2000/svg" className={`${sizes[size]} ${className ? className : ""}`} width="24" height="12" viewBox="0 0 24 12" id="link"><g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><g stroke="" stroke-width="2" transform="translate(-919 -1753)"><g transform="translate(920 1754)"><path d="M14 0h3a5 5 0 010 10h-3m-6 0H5A5 5 0 015 0h3M7 5h8"></path></g></g></g></svg>
    )
  }

  export const Edit = ({ size = "original", className }: iconProp) => {
    return(
      <svg xmlns="http://www.w3.org/2000/svg" className={`${sizes[size]} ${className ? className : ""}`} width="16" height="16" viewBox="0 0 16 16" id="edit"><path fill="" d="M13.6568542,2.34314575 C14.4379028,3.12419433 14.4379028,4.39052429 13.6568542,5.17157288 L6.27039414,12.558033 C5.94999708,12.87843 5.54854738,13.105727 5.10896625,13.2156223 L2.81796695,13.7883721 C2.45177672,13.8799197 2.12008033,13.5482233 2.21162789,13.182033 L2.78437771,10.8910338 C2.894273,10.4514526 3.12156995,10.0500029 3.44196701,9.72960586 L10.8284271,2.34314575 C11.6094757,1.56209717 12.8758057,1.56209717 13.6568542,2.34314575 Z M10.1212441,4.46435931 L4.14907379,10.4367126 C3.95683556,10.6289509 3.82045738,10.8698207 3.75452021,11.1335694 L3.38388341,12.6161166 L4.86643062,12.2454798 C5.1301793,12.1795426 5.37104912,12.0431644 5.56328736,11.8509262 L11.5352441,5.87835931 L10.1212441,4.46435931 Z M11.5355339,3.05025253 L10.8282441,3.75735931 L12.2422441,5.17135931 L12.9497475,4.46446609 C13.3402718,4.0739418 13.3402718,3.44077682 12.9497475,3.05025253 C12.5592232,2.65972824 11.9260582,2.65972824 11.5355339,3.05025253 Z"></path></svg>
    )
  }

  export const Delete = ({ size = "original", className }: iconProp) => {
    return(
      <svg xmlns="http://www.w3.org/2000/svg" className={`${sizes[size]} ${className ? className : ""}`} width="16" height="16" fill="" enable-background="new 0 0 60 60" viewBox="0 0 60 60" id="delete"><path d="M18.3,56h23.6c2.7,0,4.8-2.2,4.8-4.8V18.7h2.1c0.6,0,1-0.4,1-1v-2.3c0-2.1-1.7-3.7-3.7-3.7h-8.5V9.1c0-1.7-1.4-3.1-3.1-3.1
      h-8.9c-1.7,0-3.1,1.4-3.1,3.1v2.6H14c-2.1,0-3.7,1.7-3.7,3.7v2.3c0,0.6,0.4,1,1,1h2.1v32.5C13.4,53.8,15.6,56,18.3,56z M44.7,51.2
      c0,1.6-1.3,2.8-2.8,2.8H18.3c-1.6,0-2.8-1.3-2.8-2.8V18.7h29.3V51.2z M24.5,9.1C24.5,8.5,25,8,25.6,8h8.9c0.6,0,1.1,0.5,1.1,1.1v2.6
      h-11V9.1z M12.3,15.4c0-1,0.8-1.7,1.7-1.7h32c1,0,1.7,0.8,1.7,1.7v1.3H12.3V15.4z"></path><path d="M37.9 49.2c.6 0 1-.4 1-1V24.4c0-.6-.4-1-1-1s-1 .4-1 1v23.8C36.9 48.8 37.4 49.2 37.9 49.2zM30.1 49.2c.6 0 1-.4 1-1V24.4c0-.6-.4-1-1-1s-1 .4-1 1v23.8C29.1 48.8 29.5 49.2 30.1 49.2zM22.2 49.2c.6 0 1-.4 1-1V24.4c0-.6-.4-1-1-1s-1 .4-1 1v23.8C21.2 48.8 21.6 49.2 22.2 49.2z"></path></svg>
    )
  }

  export const Mark = ({ size = "original", className }: iconProp) => {
    return(
      <svg xmlns="http://www.w3.org/2000/svg" className={`${sizes[size]} ${className ? className : ""}`} width="16" height="16" fill="" viewBox="0 0 48 48" id="check-mark"><g data-name="Layer 2"><path d="M24 0a24 24 0 1 0 24 24A24 24 0 0 0 24 0Zm0 44a20 20 0 1 1 20-20 20 20 0 0 1-20 20Z"></path><path d="m20 29.17-6.59-6.58-2.82 2.82L20 34.83l17.41-17.42-2.82-2.82L20 29.17z"></path></g></svg>
    )
  }

  export const Cancel = ({ size = "original", className }: iconProp) => {
    return(
      <svg
        className={`${sizes[size]} ${className ? className : ""}`}
        width="8"
        height="8"
        viewBox="0 0 8 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z"
          fill=""
        />
      </svg>
    )
  }

