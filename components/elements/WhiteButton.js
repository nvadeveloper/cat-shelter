import Link from "next/link"

const WhiteButton = ({ href, text }) => {

    return (
        <Link href={href}>
            <a className="rounded-xl bg-white py-4 px-6 hover:bg-gray-200">{text}</a>
        </Link>
    )
}

export default WhiteButton
