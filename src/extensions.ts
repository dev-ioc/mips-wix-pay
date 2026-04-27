import { app } from "@wix/astro/builders";

import mipsPayButton from "./extensions/site/widgets/mips-pay-button/mips-pay-button.extension.ts";

import credentialsPage from "./extensions/dashboard/pages/credentials-page/credentials-page.extension.ts";

import dashboardPage from "./extensions/dashboard/pages/dashboard-page/dashboard-page.extension.ts";

import login from "./extensions/dashboard/pages/login/login.extension.ts";

import register from "./extensions/dashboard/pages/register/register.extension.ts";

export default app()
  .use(mipsPayButton)
  .use(credentialsPage)
  .use(dashboardPage)
  .use(login)
  .use(register);
