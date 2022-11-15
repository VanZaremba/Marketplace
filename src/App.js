import React from "react";
import ApplicationRoutes from "./routes/routes";
import { GlobalStyle } from "./styles/GlobalStyle";

function App() {
  return (
    <React.Fragment>
      <ApplicationRoutes />
      <GlobalStyle />
    </React.Fragment>
  );
}

export default App;
