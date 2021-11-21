"use strict";

module.exports.pages = async (event, context) => {
  var permissions = event.requestContext.authorizer.jwt.claims.permissions;
  permissions = permissions.substring(1, permissions.length - 1);
  const permissionsArray = permissions.split(" ");
  const pages = permissionsArray.filter((x) => {
    return !x.includes(":");
  });
  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
    },
    body: JSON.stringify({
      message: pages,
      input: event,
    }),
  };
};
