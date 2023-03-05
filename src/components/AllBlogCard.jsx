import Link from "next/link";
import { parseISO, format } from 'date-fns'


export default function AllBlogCard( {post}) {

  const  formated_date = format(parseISO(post.frontmatter.date), 'MMMM dd, yyyy');
  return (
    <div className="mt-3">
        <div className="card py-2">
            <div className="card-body ">
                <Link href={`${post.slug}`}>
                <p className="text-lg font-normal text-gray-900 hover:underline underline-offset-4 hover:text-blue-600">
                    {post.frontmatter.title}
                </p>
                </Link>
                <p className="text-md font-thin text-gray-700">{formated_date}</p>
            </div>
        </div>    
    </div>
  )
}


