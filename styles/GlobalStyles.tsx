import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
   html {
        --font: "Circular";
        --bg-color: #FFFFFF;
        --text-color-white: #fff;
        --text-color-black: #3C3C3C;
        --eerie-black-primary:#0F1623;
        --slate-gray-secondary:#6A768A
        --bright-gray-divider:#E4EAEF;
        --fire-opal-error:#E95454;
        --purple: #916CFF;

        // border radius
        --border-radius-sm: 0.5rem;

        // Font Weight
        --fw-sm: 400;
        --fw-md: 500;
        --fw-xl: 800;

        //Transform
        --left-50: 50%;
        --top-50: 50%;
        --transform-center: translate(-50%, -50%);

        //Colors
        --white: #ffffff;
    }

    body[data-device='mobile'] {
        // Font Size
        --fs-sm: 1rem;
        --fs-landing-heading: 1.5rem;
        --fs-landing-subheading: 0.875rem;
    }

    body[data-device='tab'] {
      // Font Size
        --fs-sm: 1.25rem;
        --fs-landing-heading: 2.5rem;
        --fs-landing-subheading: 1.375rem;
    }

    body[data-device='desktop'] {
      // Font Size
        --fs-sm: 1.25rem;
        --fs-landing-heading: 3.5rem;
        --fs-landing-subheading: 1.75rem;
    }

    body {
        margin: 0;
        padding: 0;
		    font-family: var(--font);
        background: var(--bg-color) !important;
        input[type=number] {
            -moz-appearance:textfield;
        }
         h1, h2, h3, h5, h6, p, ol {
            margin: 0;
            padding: 0;
        }
 
        input[type='radio'] {
          -webkit-appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          outline: none;
          transform: translateY(3px);
          margin-right: 5px;
          border: 2px solid gray;         
        }
        video::-internal-media-controls-overlay-cast-button {
          display: none;
        }
        input[type='radio']:before {
          content: '';
          display: block;
          width: 60%;
          height: 60%;
          margin: 20% auto;
          border-radius: 50%;
          cursor: pointer;
        }

        input[type="radio"]:checked:before {
            background: var(--eerie-black-primary);
        }
    
        input[type="radio"]:checked {
          border-color:var(--eerie-black-primary);
        }
        
        h1, h2, h3, h4, h5, h6, p {
            margin: 0
        }

        .lottie-animation---mweb {
          display: none;
        }

        .lottie-wrapper {
          position: fixed;
          left: 0%;
          top: 0%;
          right: 0%;
          bottom: 0%;
          z-index: -1;
          display: block;
          width: 100%;
          height: auto;
          max-height: 100vh;
          max-width: 100vw;
          min-height: 100vh;
        }

        .lottie-animation---web {
          position: absolute;
          left: 0%;
          top: 0%;
          right: 0%;
          bottom: 0%;
          z-index: 0;
          overflow: hidden;
          width: 100%;
          height: auto;
          max-height: 100vh;
          max-width: 100vw;
          min-height: auto;
          -o-object-fit: cover;
          object-fit: cover;
        }

        .mb-2{
          margin-bottom: 0.5rem !important;
        }

        @media screen and (max-width: 991px) {
          .lottie-wrapper {
            display: block;
            max-height: 100%;
            max-width: 100%;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            -webkit-flex-direction: column;
            -ms-flex-direction: column;
            flex-direction: column;
            -webkit-box-pack: justify;
            -webkit-justify-content: space-between;
            -ms-flex-pack: justify;
            justify-content: space-between;
            -o-object-position: 50% 50%;
            object-position: 50% 50%;
        }

        .image {
          width: 28%;
        }
        }

        @media screen and (max-width: 767px) {
          .lottie-animation---web {
            display: none;
            width: 170vw;
          }

          .lottie-animation---mweb {
            display: block;
            overflow: visible;
            padding-right: 0px;
            -o-object-fit: none;
            height: 100%;
            object-fit: none;
            -o-object-position: 0% 50%;
            object-position: 0% 50%;
          }

          .image {
            width: 37%;
            max-width: none;
            padding-top: 0rem;
            padding-bottom: 0rem;
          }
        }

        a, a:visited, a:hover, a:active {
          color: inherit;
        }

        @media screen and (max-width: 479px) {
          .lottie-animation---mweb {
            position: fixed;
            width: 100vw;
            height: 100%;
          }

          .image {
            width: 46%;
          }
        }

        .logoutModal{
          
          min-height: fit-content !important;
        }
    }

    body a, body a:visited, body a:hover, body a:active {
      color: inherit;
      text-decoration:none;  
    }

    .hide-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: transparent transparent;

          &::-webkit-scrollbar {
            width: 1px;
          }

          &::-webkit-scrollbar-track {
            background: transparent;
          }

          &::-webkit-scrollbar-thumb {
            background-color: transparent;
          }

          ::-webkit-scrollbar {
            display: none; 
          }
    }

    .loadingLottie {
      position: absolute;
      height: 100px;
      width: 100px;
    }

    .zsiq_floatmain{
      position: fixed !important;
      bottom: 150px !important;
      @media screen and (max-width: 471px){
        bottom: 100px !important;
      }
    }
`;

export default GlobalStyles;
