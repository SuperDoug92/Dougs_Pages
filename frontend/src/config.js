import configJson from "./auth_config.json";

export function getConfig() {
  const audience =
    configJson.audience && configJson.audience !== "YOUR_API_IDENTIFIER"
      ? configJson.audience
      : null;
  
  const config = {
    domain: configJson.domain,
    clientId: configJson.clientId,
    redirectUri: window.location.origin,
    scope: "read:response",
    ...(audience ? { audience } : null),
  };

  return config
}
