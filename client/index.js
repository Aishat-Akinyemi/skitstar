import { createReactClient } from '@livepeer/react';
import { studioProvider } from 'livepeer/providers/studio';
 
const LivepeerClient = createReactClient({
  provider: studioProvider({ apiKey: import.meta.env.VITE_LIVEPEER_API_KEY  }),
});  
 
export default LivepeerClient;