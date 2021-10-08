import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
// const authConfig = () =>("../auth_config.json")

const Trialfunction = () => {
  const {user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [TrialFunctionData, setTrialFunction_data] = useState(null);

  useEffect(() => {
    const getTrialResponse = async () => {
      // const domain = "dev-3nlm70j6.us.auth0.com";
      // const client_id = "qeP60CKwhTbTPNvxjESeUkhCf8pHkNkm"
      // const client_secret = "Ykn1z9FWPpY4nKmjfB_mR16_uiNu5P5LMslMpHohfn8tYfnUmev-rsmLzxZLKPmz"

      console.log(user)  
      try {
        const accessToken = await getAccessTokenSilently({
          // domain: authConfig.domain,
          audience: "https://p8ybzhtnn1.execute-api.us-east-1.amazonaws.com/dev/v1/trialfunction",
          // client_id: client_id,
          // client_secret: client_secret,
          // audience: `https://${domain}/api/v2/`,
          scope: "read:response",
        });
        console.log('accesstoken: ', accessToken)

        // const trialFunctionUrl = `https://p8ybzhtnn1.execute-api.us-east-1.amazonaws.com/dev/v1/trialfunction`;
  
        const trialFunctionResponse = await fetch('https://p8ybzhtnn1.execute-api.us-east-1.amazonaws.com/dev/v1/trialfunction', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
  
        // const { trialFunction_data } = await trialFunctionResponse.json();
  
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