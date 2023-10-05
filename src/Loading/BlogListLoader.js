import ContentLoader from "react-content-loader";

const BlogListLoader = (props) => (
  <ContentLoader
    className="mt-5"
    viewBox="0 0 400 100"
    backgroundColor={"#ddd"}
    foregroundColor={"#eee"}
  >
    <circle cx="10" cy="20" r="8" />
    <rect x="25" y="15" rx="5" ry="5" width="400" height="10" />
    <circle cx="10" cy="50" r="8" />
    <rect x="25" y="45" rx="5" ry="5" width="400" height="10" />
    <circle cx="10" cy="80" r="8" />
    <rect x="25" y="75" rx="5" ry="5" width="400" height="10" />
    <circle cx="10" cy="110" r="8" />
    <rect x="25" y="105" rx="5" ry="5" width="400" height="10" />
  </ContentLoader>
);

export default BlogListLoader;
