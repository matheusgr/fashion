import { withLive } from "$live/live.ts";

export const handler = withLive({
  siteId: 265,
  site: "teststore11",
  domains: ["matheusgr-fashion.deno.dev", "deco.cx"],
});
