import ContentLoader from "react-content-loader";

const BlogLoader = (props) => (
  <div className="flex my-5 space-x-5">
    <ContentLoader
      className="flex-1  w-full"
      viewBox="0 0 1020 850"
      backgroundColor={"#ddd"}
      foregroundColor={"#eee"}
      title={"Loading"}
    >
      <rect className="w-full" x="3" y="3" rx="10" ry="10" height="480" />
      <circle cx="55" cy="550" r="55" />
      <rect x="130" y="520" rx="50" ry="500" width="260" height="20" />
      <rect x="130" y="550" rx="0" ry="0" width="150" height="20" />
      <rect x="3" y="630" rx="0" ry="0" width="700" height="20" />
      <rect x="3" y="670" rx="0" ry="0" width="600" height="20" />
      <rect x="3" y="700" rx="0" ry="0" width="670" height="20" />
      <rect x="3" y="730" rx="0" ry="0" width="500" height="20" />
      <rect x="3" y="760" rx="0" ry="0" width="320" height="20" />
      <rect x="3" y="790" rx="0" ry="0" width="420" height="20" />
    </ContentLoader>

    <ContentLoader
      className="basis-1/4"
      viewBox="0 0  850"
      backgroundColor={"#ddd"}
      foregroundColor={"#eee"}
    >
      <circle cx="30" cy="50" r="30" />
      <rect x="70" y="30" rx="0" ry="0" width="55" height="10" />
      <rect x="70" y="50" rx="0" ry="0" width="50" height="10" />
      <rect x="0" y="120" rx="0" ry="0" width="400" height="10" />
      <rect x="0" y="140" rx="0" ry="0" width="400" height="10" />
      <rect x="0" y="160" rx="0" ry="0" width="400" height="10" />
      <rect x="0" y="180" rx="0" ry="0" width="400" height="10" />
    </ContentLoader>
  </div>
);

BlogLoader.metadata = {
  name: "RJavlonbek",
  github: "RJavlonbek",
  description: "Blog item",
  filename: "BlogLoader",
};

export default BlogLoader;
