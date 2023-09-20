import BlogAuthor from "../Components/BlogAuthor";
import BlogContent from "../Components/BlogContent";

export default function Blog() {
  return (
    <div className="flex my-5 space-x-5">
      <BlogContent />
      <BlogAuthor />
    </div>
  );
}
