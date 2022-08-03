import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Rinkeby;
const container = document.getElementById("root");
const root = createRoot(container!);
import {store} from './store/store'
import {Provider} from 'react-redux'
import './index.css'
root.render(
  <React.StrictMode>
     <Provider store={store}>
      <ThirdwebProvider desiredChainId={activeChainId}>
        <App />
      </ThirdwebProvider>
    </Provider>
  </React.StrictMode>
);
