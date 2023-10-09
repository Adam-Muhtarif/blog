import ContentLoader from "react-content-loader";

const HomeLoader = (props) => (
  <div className="mx-auto w-full lg:w-1/2 sm:w-full">
    <ContentLoader
      backgroundColor={"#ddd"}
      foregroundColor={"#eee"}
      viewBox="0 0 400 300"
      className="mx-auto"
    >
      <rect x="0" y="20" rx="5" ry="5" width="400" height="200" />
      <circle cx="20" cy="250" r="20" />
      <rect x="50" y="233" rx="4" ry="4" width="100" height="13" />
      <rect x="75" y="260" rx="4" ry="4" width="50" height="8" />
    </ContentLoader>
    <ContentLoader
      backgroundColor={"#ddd"}
      foregroundColor={"#eee"}
      viewBox="0 0 400 300"
      className="mx-auto"
    >
      <circle cx="30" cy="258" r="30" />
      <rect x="75" y="233" rx="4" ry="4" width="100" height="13" />
      <rect x="75" y="260" rx="4" ry="4" width="50" height="8" />
      <rect x="0" y="20" rx="5" ry="5" width="400" height="200" />{" "}
    </ContentLoader>
  </div>
);

export default HomeLoader;
