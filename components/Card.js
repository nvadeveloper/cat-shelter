import Link from "next/link"
import CardСarousel from "./CardСarousel"

const Card = ({ images, name, tag, price, people, slug, rating }) => {

    return (
        <Link href={slug}>
            <a className="relative">
                <span class="z-10 absolute right-3 top-3 rounded-3xl px-3 py-1.5 bg-blue-500 text-white font-medium text-xs">
                    5.0
                </span>
                <CardСarousel images={images} />
                <div className="flex justify-between mt-2">
                    <div>
                        <p className="font-bold text-xl">{name}</p>
                        <p className="text-sm text-gray-600">{tag}</p>
                    </div>
                    <div className="flex flex-col items-end">
                        <p className="text-sm text-gray-900 mt-2">{price} руб/час</p>
                        <p className="text-sm text-gray-600">{people}</p>
                    </div>
                </div>
                
            </a>
        </Link>
    )
}

export default Card