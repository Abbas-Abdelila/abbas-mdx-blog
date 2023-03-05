import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const BlogCard = ({ post }) => {
  return (
    <article className="blog-card">
            <Image
              alt="Lava"
              src={post.frontmatter.image}
              className="h-36 w-full rounded-xl object-cover shadow-xl transition hover:grayscale-[50%]"
              width={1000}
              height={5000}            
            />

            <div className="p-4">
              <Link href={`blog/${post.slug}`}>
                <h3 className="text-lg font-medium text-gray-900">
                  {post.frontmatter.title}
                </h3>
              </Link>

              <p className="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3">
                {post.frontmatter.description}
              </p>
            </div>
          </article>

  )
}

export default BlogCard