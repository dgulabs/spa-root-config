import React from "react";
import ReactDOM from "react-dom";
import { registerApplication, registerParcel, start } from "single-spa";

import Root from "./Root";

registerApplication({
  name: "spa-parcel-react",
  app: () => System.import("http://localhost:8500/JnJ-HelloWorld.js"),
  activeWhen: ["/"],
  customProps: {
    propFromUser: "David",
    domElementGetter: () => document.getElementById("react-parcel-placeholder"),
  },
});

registerApplication({
  name: "spa-parcel-angular",
  app: () => System.import("http://localhost:8600/main.js"),
  activeWhen: ["/"],
  customProps: {
    domElementGetter: () =>
      document.getElementById("angular-parcel-placeholder"),
  },
});

start({
  urlRerouteOnly: true,
});

// React start up
ReactDOM.render(<Root />, document.getElementById("app"));
