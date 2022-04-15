import CardСarousel from "./CardСarousel"


const Card = ({images, name, tag, price, people}) => {

    return (
        <>
            <CardСarousel images={images} />
            <div className="flex justify-between mt-2">
            <div>
                <p className="font-medium text-xl">{name}</p>
                <p className="text-sm text-gray-500">{tag}</p>
            </div>
            <div className="flex flex-col items-end">
                <p className="text-sm text-gray-900 mt-2">{price}</p>
                <p className="text-sm text-gray-900">{people}</p>
            </div>
            </div>

            {/* <div>
                <p className="font-medium text-xl">Chaparral</p>
                <p className="text-sm text-gray-500">Бизнес класс</p>
            </div>
            <div className="flex flex-col items-end">
                <p className="text-sm text-gray-900 mt-2">10 000 руб/час</p>
                <p className="text-sm text-gray-900">8 человек</p>
            </div>
            </div> */}
        </>
    )}
    
export default Card