import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: '0934cd049f6469eebea41b08338e3d566926a0cd', queries,  });
export default client;
  