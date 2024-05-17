import { GoogleOAuthProvider } from "@react-oauth/google";
import React from "react";
import ReactDOM from "react-dom/client";
import { RelayEnvironmentProvider } from "react-relay";
import App from "./App.tsx";
import ErrorBoundary from "./components/ErrorBoundary.tsx";
import "./index.css";
import { RelayEnvironment } from "./RelayEnvironment";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <RelayEnvironmentProvider environment={RelayEnvironment}>
    <React.StrictMode>
      <ErrorBoundary>
        <GoogleOAuthProvider clientId={import.meta.env.VITE_CLIENT_ID}>
          <App />
        </GoogleOAuthProvider>
      </ErrorBoundary>
    </React.StrictMode>
  </RelayEnvironmentProvider>
);
