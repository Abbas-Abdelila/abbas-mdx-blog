import Link from "next/link"


export const Nav = () => {
  return (
    <div className="flex w-full justify-start gap-10 md:gap-20 border-b py-4 border-slate-200 ">
        <Link className="text-2xl text-slate-700 font-thin italic" href="/">Abbas Abdelila</Link>
        <Link className="text-xl font-normal pt-1 text-slate-700" href="/bio">Bio</Link>
    </div>
  )
}
