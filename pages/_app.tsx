import type { AppContext, AppProps } from "next/app";
import { wrapper } from "../slices/store";
import "../styles/globals.css";
import { Provider } from "react-redux";
import Header from "@/components/common/header";
import GlobalStyles from "@/styles/GlobalStyles";
import { Wrapper } from "@/styles/HomeStyles";
import ScreenSize from "@/components/common/ScreenSize";
import { useEffect } from "react";
import { getAllUrlParams } from "@/utils/helper";
import AppHeaderHomepage from "@/components/common/AppHeaderHomepage";

declare global {
  interface Window {
    WURFL: {
      form_factor: string;
      is_mobile: boolean;
    };
  }
}

const App = ({ Component, ...rest }: AppProps) => {
  const { store, props } = wrapper.useWrappedStore(rest);
  useEffect(() => {
    getAllUrlParams(window.location.search);
  }, []);

  return (
    <Provider store={store}>
      <Header
        canonicalPath={props.canonicalPath === "/" ? "" : props.canonicalPath}
      />
      <GlobalStyles />
      <ScreenSize>
        <Wrapper>
          <AppHeaderHomepage />
          <Component {...props.pageProps} id="root-body" />
        </Wrapper>
      </ScreenSize>
    </Provider>
  );
};
App.getInitialProps = async (appContext: AppContext) => {
  return { canonicalPath: appContext.ctx.asPath };
};
export default App;
