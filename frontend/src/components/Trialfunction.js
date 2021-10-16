import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const audience = () =>("../auth_config.json").audience
const trialfunction_url = ()=>("../api_config.json").trialfunction.url

const Trialfunction = () => {
  const {user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [TrialFunctionData, setTrialFunction_data] = useState(null);

  useEffect(() => {
    const getTrialResponse = async () => {
      console.log(user)  
      try {
        const accessToken = await getAccessTokenSilently({
          audience: audience,
        });
        console.log('accesstoken: ', accessToken)
  
        const trialFunctionResponse = await fetch(trialfunction_url, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
    
        setTrialFunction_data(await trialFunctionResponse.json());
      } catch (e) {
        console.log(e.message);
      }
    };
  
    getTrialResponse();
  }, [getAccessTokenSilently, user?.sub]); 

  return (
    (isAuthenticated && TrialFunctionData) ? 
    (<div>
        {TrialFunctionData.message}
      </div>
    ):
    <div>No message</div>
  );
};

export default Trialfunction;