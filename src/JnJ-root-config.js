import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@JnJ/HelloWorld",
  app: () => System.import("http://localhost:8500/JnJ-HelloWorld.js"),
  activeWhen: ["/"],
});

registerApplication({
  name: "Search",
  app: () => System.import("http://localhost:8600/main.js"),
  activeWhen: ["/"],
});

start({
  urlRerouteOnly: true,
});
