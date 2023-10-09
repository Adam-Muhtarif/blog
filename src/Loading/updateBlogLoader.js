import ContentLoader from "react-content-loader";

const UpdateBlogLoader = (props) => (
  <div className="mx-auto mt-14 w-full lg:w-1/2 sm:w-full">
    <ContentLoader
      backgroundColor={"#ddd"}
      foregroundColor={"#eee"}
      viewBox="0 0 300 500"
    >
      <rect x="120" y="0" rx="4" ry="4" width="50" height="8" />
      <rect x="0" y="20" rx="5" ry="5" width="300" height="130" />
      <rect x="0" y="160" rx="4" ry="4" width="300" height="13" />
      <rect x="0" y="180" rx="5" ry="5" width="300" height="130" />
      <rect x="250" y="320" rx="4" ry="4" width="50" height="13" />
    </ContentLoader>
  </div>
);

export default UpdateBlogLoader;
