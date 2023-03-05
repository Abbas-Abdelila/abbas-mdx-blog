import AllBlogCard from '@/components/AllBlogCard'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const AllPost = ( {posts}) => {
  return (
    <div className='w-4/5 flex justify-center items-center mx-auto gap-10'>
        <div className='side-bar w-[25%]'></div>
        <div className='all-posts w-[75%]' >
            {posts.map((post, index) => (
                <AllBlogCard key={index} post={post} />))}
        </div>
    </div>
  )
}

export default AllPost


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

