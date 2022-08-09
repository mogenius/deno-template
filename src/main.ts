import "https://deno.land/x/dotenv@v3.2.0/load.ts";
import { serve } from "https://deno.land/std@0.151.0/http/server.ts";

const port = Deno.env.get("PORT") ? +Deno.env.get("PORT")! : 8080;

const handler = (request: Request): Response => {
  const body = "Welcome to Deno on mogenius";
  return new Response(body, { status: 200 });
};

await serve(handler, { port });
