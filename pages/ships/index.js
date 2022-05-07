

const Ships = ({ data }) => {

    // fetch('https://rent-boat-strapi-backend.herokuapp.com/api/yachts?populate=images', {
    //     method: 'GET',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    // })
    //     .then(response => response.json())
    //     .then(data => console.log(data.data[0].attributes.images.data));

    const yachts = data.data

    return (
        <section>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <p className="my-10 font-bold text-3xl">Теплоходы</p>
                <div className="flex">
                    {yachts.map((yacht, key) => (
                        <div key={key} className='font-mono mr-10'>
                            <p>{yacht.id}</p>
                            <p>{yacht.attributes.name}</p>
                            <p>{yacht.attributes.person}</p>
                            <p>{yacht.attributes.price}</p>
                            <p>{yacht.attributes.rating}</p>
                            <p>{yacht.attributes.tag}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Ships

export async function getStaticProps() {

    const res = await fetch('https://rent-boat-strapi-backend.herokuapp.com/api/yachts?populate=images')
    const data = await res.json()

    return {
        props: {
            data,
        },
    }
}