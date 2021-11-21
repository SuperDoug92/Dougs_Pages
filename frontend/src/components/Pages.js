import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import * as config from "../auth_config.json";
import * as api_config from "../api_config.json";
import { Fragment } from "react";
import { Nav } from "react-bootstrap";
import Lists from "./Lists";
import { Switch, Route, useRouteMatch } from "react-router-dom";

const audience = config.audience;
const pages_url = api_config.pages.url;
const pageLookup = {
  lists: Lists,
};

const Pages = () => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [PagesData, setPagesData] = useState(null);

  useEffect(() => {
    const getPages = async () => {
      // console.log(user)
      try {
        const accessToken = await getAccessTokenSilently({
          audience: audience,
        });
        // console.log('accesstoken: ', accessToken)

        const PagesData = await fetch(pages_url, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        setPagesData(await PagesData.json());
      } catch (e) {
        // console.log(e.message);
      }
    };

    getPages();
  }, [getAccessTokenSilently, user?.sub]);

  let match = useRouteMatch();
  return isAuthenticated && PagesData ? (
    <Fragment>
      <Nav justify variant="tabs" defaultActiveKey="/pages">
        {PagesData.message.map((page) => (
          <Nav.Item key={page}>
            <Nav.Link href={match.url + "/" + page}>{page}</Nav.Link>
          </Nav.Item>
        ))}
      </Nav>
      <Switch>
        {PagesData.message.map((page) => (
          <Route
            key={page}
            path={match.url + "/" + page}
            component={Lists}
            // {pageLookup[":page".toLowerCase()]}
          />
        ))}
      </Switch>
      <div id="pageBody"></div>
    </Fragment>
  ) : (
    <div>No message</div>
  );
};

export default Pages;
