import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import * as config from "../auth_config.json";
import * as api_config from "../api_config.json";

const audience = config.audience;
const trialfunction_url = api_config.trialfunction.url;

const Trialfunction = () => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [TrialFunctionData, setTrialFunction_data] = useState(null);

  useEffect(() => {
    const getTrialResponse = async () => {
      // console.log(user)
      try {
        const accessToken = await getAccessTokenSilently({
          audience: audience,
        });
        // console.log('accesstoken: ', accessToken)

        const trialFunctionResponse = await fetch(trialfunction_url, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        setTrialFunction_data(await trialFunctionResponse.json());
      } catch (e) {
        // console.log(e.message);
      }
    };

    getTrialResponse();
  }, [getAccessTokenSilently, user?.sub]);

  return isAuthenticated && TrialFunctionData ? (
    <div>{TrialFunctionData.message}</div>
  ) : (
    <div>No message</div>
  );
};

export default Trialfunction;
