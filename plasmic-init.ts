import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
import First from "./components/First";
import Second from "./components/Second";
import Third from "./components/Third";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ContactForm from "./components/ContactForm";
import CTA from "./components/CTA";
export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "cwy2RV6W22tvCtmN3hQX5Q",
      token: "r2gkq7HAPegFpVKAUeenmfgvFMpOIrGrSj7XQzJUTPVKtNiwLkAPxIZvPr10WNxOlbMG009K5pTw5DGJdw",
    },
  ],

  // By default Plasmic will use the last published version of your project.
  // For development, you can set preview to true, which will use the unpublished
  // project, allowing you to see your designs without publishing.  Please
  // only use this for development, as this is significantly slower.
  preview: true,
});

// You can register any code components that you want to use here; see
// https://docs.plasmic.app/learn/code-components-ref/
// And configure your Plasmic project to use the host url pointing at
// the /plasmic-host page of your nextjs app (for example,
// http://localhost:3000/plasmic-host).  See
// https://docs.plasmic.app/learn/app-hosting/#set-a-plasmic-project-to-use-your-app-host

PLASMIC.registerComponent(Header,{
  name:"Header",
  props: {}
});
PLASMIC.registerComponent(First,{
  name:"First",
  props: {}
});
PLASMIC.registerComponent(Second,{
  name:"Second",
  props: {}
});
PLASMIC.registerComponent(Third,{
  name:"Third",
  props: {}
});
PLASMIC.registerComponent(ContactForm,{
  name:"ContactForm",
  props: {}
});
PLASMIC.registerComponent(CTA,{
  name:"CTA",
  props: {}
});
PLASMIC.registerComponent(Footer,{
  name:"Footer",
  props: {}
});
