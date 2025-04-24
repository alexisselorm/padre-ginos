import { defineWorkspace } from "vitest/config";

export default defineWorkspace([{
  extends:"./vite.config.js",
  test:{
    include:["**/*.node.test.{js,jsx.ts.tsx}"],
    name:"happy-dom",
    environment:"happy-dom",
    coverage:["text","html","json"]
  }
}, 
{
  extends:"./vite.config.js",
  test:{
    setupFiles:["vitest-browser-react"],
    include:["**/*.browser.test.{js,jsx,ts,tsx}"],
    name:"browser",
    browser:{
      provider:"playwright",
      enabled:true,
      // name:"chromium"
      name:"firefox"
    },
    coverage:["text","html","json"]

  }
}
])