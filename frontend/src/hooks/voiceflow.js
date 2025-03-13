import { useEffect } from 'react';

export const useVoiceflowBot = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.onload = function() {
      window.voiceflow.chat.load({
        verify: { projectID: '67d056afd3bcd1a045d1fff4' },
        url: 'https://general-runtime.voiceflow.com',
        versionID: 'production',
        voice: {
          url: "https://runtime-api.voiceflow.com"
        }
      });
    };
    script.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs";
    document.body.appendChild(script);
    
    return () => {
      // Clean up on component unmount
      document.body.removeChild(script);
    };
  }, []);
};
