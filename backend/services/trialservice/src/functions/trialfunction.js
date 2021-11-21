"use strict";

module.exports.trialfunction = async (event, context) => {
  console.log(JSON.stringify(event));
  console.log(context);
  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
    },
    body: JSON.stringify({
      message: "Trial function executed successfully!",
      input: event,
    }),
  };
};
