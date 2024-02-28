import { BIG_TEN } from "utils/bigNumber";
import BigNumber from "bignumber.js";

export const BASE_URL = "https://wildbase.farm";
export const ALCHEMY_ID = "86wTK178jC4XNO9sh-iVI7P5fV1tg_Dx";

export const CHAIN_ID = 900;
export const TESTNET_CHAIN_ID = 901;

export const DEFAULT_GAS_LIMIT = 2000000;
export const DEFAULT_GAS_PRICE = 2;
export const DEFAULT_TOKEN_DECIMAL = BIG_TEN.pow(18);
export const NUMBER_OF_FARMS_VISIBLE = 12;
export const wildWethFarmPid = 0;
export const wethUsdcFarmPid = 1;
export const YEAR = 60 * 60 * 24 * 365;
export const YEAR_BN = new BigNumber(YEAR);

export const mainTokenSymbol = "3WiLD";

export const BASE_EXCHANGE_URL_BY_CHAIN = {
  56: "https://pancakeswap.finance/",
};

export const BASE_EXCHANGE_URL = BASE_EXCHANGE_URL_BY_CHAIN[CHAIN_ID];

export const BASE_ADD_LIQUIDITY_URL = `${BASE_EXCHANGE_URL}/liquidity`;
export const BASE_SWAP_URL = `${BASE_EXCHANGE_URL}/swap`;
export const ARCHIVED_NODE = "https://developer-access-mainnet.base.org";

// export const YEAR = 60 * 60 * 24 * 365
// export const YEAR_BN = new BigNumber(YEAR)

export const socials = [
  {
    icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-discord" viewBox="0 0 16 16">
        <path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612"/>
      </svg>
    ),
    name: "Discord",
    href: "https://discord.gg/FhPtvYXnBQ",
  },
  {
    icon: () => (
      <svg
        width="17"
        height="14"
        viewBox="0 0 17 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.6496 0.782335C14.8421 0.706071 15.0523 0.680283 15.2587 0.707613C15.465 0.734943 15.6601 0.814408 15.8239 0.937868C15.9877 1.06133 16.1143 1.22434 16.1908 1.41022C16.2673 1.59609 16.291 1.79813 16.2593 1.99565C15.8029 4.8435 14.9661 10.062 14.5218 12.8321C14.4911 13.0238 14.4093 13.2046 14.2845 13.3571C14.1596 13.5096 13.9958 13.6286 13.8089 13.7026C13.6221 13.7766 13.4185 13.8031 13.2179 13.7796C13.0172 13.756 12.8263 13.6832 12.6636 13.5682C11.0922 12.4574 8.7362 10.7921 7.54005 9.94627C7.44774 9.881 7.3715 9.79709 7.31669 9.70046C7.26189 9.60383 7.22987 9.49683 7.2229 9.38702C7.21592 9.27722 7.23415 9.16728 7.27631 9.06497C7.31847 8.96267 7.38353 8.87049 7.46689 8.79495C8.56293 7.80183 10.7459 5.82385 12.2479 4.46286C12.2833 4.4306 12.3048 4.38683 12.3083 4.34013C12.3118 4.29342 12.297 4.24715 12.2668 4.21038C12.2366 4.1736 12.1931 4.14898 12.145 4.14133C12.0968 4.13368 12.0474 4.14356 12.0065 4.16902C10.0807 5.37407 7.13128 7.21941 5.68576 8.12385C5.41486 8.29336 5.1104 8.40739 4.79145 8.45879C4.47249 8.5102 4.1459 8.49787 3.83214 8.42258C3.03618 8.2317 1.88809 7.95627 0.86638 7.71127C0.706418 7.67293 0.563147 7.58713 0.456973 7.46611C0.3508 7.34509 0.287138 7.19501 0.275056 7.03724C0.262974 6.87948 0.303088 6.72209 0.389683 6.58748C0.476279 6.45286 0.604941 6.3479 0.757343 6.28753C4.31403 4.87807 11.2744 2.12003 14.6496 0.782335Z"
          fill="#9199B0"
        />
      </svg>
    ),
    name: "Telegram",
    href: "https://t.me/TheCyberDefendersDAO",
  },
  {
    icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
      </svg>
    ),
    name: "Linkedin",
    href: "https://www.linkedin.com/company/101417069",
  },
  {
    icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-youtube" viewBox="0 0 16 16">
        <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/>
      </svg>
    ),
    name: "Youtube",
    href: "https://www.youtube.com/@TheCyberDefendersDAO",
  },
  {
    icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
        <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
      </svg>
    ),
    name: "Twitter",
    href: "https://twitter.com/TCDToken",
  },
  {
    icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
      </svg>
    ),
    name: "Facebook",
    href: "https://www.facebook.com/Thecyberdefendersdao",
  },
  {
    icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
    </svg>
    ),
    name: "Github",
    href: "https://github.com/TheCyberDefenders",
  },
];