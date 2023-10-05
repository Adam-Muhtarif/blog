import React from "react";
import ContentLoader from "react-content-loader";

const HomeLoader = (props) => (
  <ContentLoader
    speed={1}
    backgroundColor={"#ddd"}
    foregroundColor={"#eee"}
    viewBox="0 0 400 600"
    height={600}
    width={400}
    {...props}
  >
    <circle cx="30" cy="258" r="30" />
    <rect x="75" y="233" rx="4" ry="4" width="100" height="13" />
    <rect x="75" y="260" rx="4" ry="4" width="50" height="8" />
    <rect x="0" y="20" rx="5" ry="5" width="400" height="200" />
    {/* New shapes */}
    <rect x="0" y="300" rx="5" ry="5" width="400" height="200" />
    <circle cx="30" cy="543" r="30" />
    <rect x="75" y="518" rx="4" ry="4" width="100" height="13" />
    <rect x="75" y="545" rx="4" ry="4" width="50" height="8" />
  </ContentLoader>
);

export default HomeLoader;
