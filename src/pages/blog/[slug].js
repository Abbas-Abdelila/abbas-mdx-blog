import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Markdown from "markdown-to-jsx";

export const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join("src", "posts"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".mdx", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const markdownWithMeta = fs.readFileSync(
    path.join("src", "posts", slug + ".mdx"),
    "utf-8"
  );

  const { data: frontmatter, content: source } = matter(markdownWithMeta);
  // use next-mdx-remote to convert mdx to jsx

  return {
    props: {
      source,
      slug,
      frontmatter,
    },
  };
};

export default function BlogDetails({ source, frontmatter }) {
  return (
    
    <div className="flex flex-col justify-center items-center mx-auto mt-16">
    
    <p className="hidden md:flex text-slate-700 text-center ">{frontmatter.description}</p>
    <p className="hidden md:flex text-red-900 ">{frontmatter.date}</p>
    <article className="prose prose-lg max-w-[260px] xs:max-w-[320px] sm:max-w-[481px] md:max-w-[623px] lg:max-w-[769px] 2xl:max-w-[1024px]">
      <Markdown className="">{source}</Markdown>
    </article>
    </div>
  );
}
