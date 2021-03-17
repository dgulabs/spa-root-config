import { registerApplication, registerParcel, start } from "single-spa";

registerApplication({
  name: "spa-parcel-react",
  app: () => System.import("http://localhost:8500/JnJ-HelloWorld.js"),
  activeWhen: ["/"],
  customProps: { propFromUser: "David" },
});

registerApplication({
  name: "spa-parcel-angular",
  app: () => System.import("http://localhost:8600/main.js"),
  activeWhen: ["/"],
  customProps: {},
});

start({
  urlRerouteOnly: true,
});
