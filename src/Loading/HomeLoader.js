import ContentLoader from "react-content-loader";

const HomeLoader = (props) => (
  <div className="mx-auto w-full lg:w-1/2">
    <ContentLoader
      backgroundColor={"#ddd"}
      foregroundColor={"#eee"}
      viewBox="0 0 400 370"
      className="mx-auto"
    >
      <rect x="0" y="20" rx="5" ry="5" width="400" height="210" />
      <circle cx="30" cy="260" r="20" />
      <rect x="60" y="245" rx="4" ry="4" width="100" height="13" />
      <rect x="60" y="265" rx="4" ry="4" width="50" height="8" />
      <rect x="60" y="300" rx="4" ry="4" width="160" height="13" />
    </ContentLoader>
    <ContentLoader
      backgroundColor={"#ddd"}
      foregroundColor={"#eee"}
      viewBox="0 0 400 370"
      className="mx-auto"
    >
      <rect x="0" y="20" rx="5" ry="5" width="400" height="210" />
      <circle cx="30" cy="260" r="20" />
      <rect x="60" y="245" rx="4" ry="4" width="100" height="13" />
      <rect x="60" y="265" rx="4" ry="4" width="50" height="8" />
      <rect x="60" y="300" rx="4" ry="4" width="160" height="13" />
    </ContentLoader>
  </div>
);

export default HomeLoader;
