import AllBlogCard from "@/components/AllBlogCard";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const AllPost = ({ posts }) => {
  return (
    <div className="w-4/5 flex justify-center items-center mx-auto gap-10">
      <div className="side-bar w-[25%]">
        <nav aria-label="Main Nav" className="flex flex-col space-y-1">
          <p className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 cursor-pointer">
            All
          </p>

          <p className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 cursor-pointer">
            Level-A1
          </p>

          <p className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 cursor-pointer">
            Level-A2
          </p>

          <p className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 cursor-pointer">
            Level-B1
          </p>

          <p className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 cursor-pointer">
            Level-B2
          </p>
        </nav>
      </div>
      <div className="all-posts w-[75%]">
        <h3 className="text-center my-4 text-xl font-thin text-gray-700">
          All Posts
        </h3>

        {posts.map((post, index) => (
          <AllBlogCard key={index} post={post} />
        ))}
      </div>
    </div>
  );
};

export default AllPost;

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("src", "posts"));

  const posts = files.map((filename) => {
    // Create slug
    const slug = filename.replace(".mdx", "");
    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join("src", "posts", filename),
      "utf-8"
    );
    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
}
