import { extensions } from "@wix/astro/builders";

export default extensions.customElement({
  id: "89524915-e3e8-4ffe-879a-4ac5d4db49c9",
  name: "MiPS Pay Button",
  width: {
    defaultWidth: 450,
    allowStretch: true,
  },
  height: {
    defaultHeight: 250,
  },
  installation: {
    autoAdd: true,
  },
  presets: [
    {
      id: "ed62c660-90ed-413d-95de-17d9d990b0bd",
      name: "default",
      thumbnailUrl: "{{BASE_URL}}/mips-pay-button-thumbnail.png",
    },
  ],

  tagName: "mips-pay-button",
  element: "./extensions/site/widgets/mips-pay-button/mips-pay-button.tsx",
  settings:
    "./extensions/site/widgets/mips-pay-button/mips-pay-button.panel.tsx",
});
