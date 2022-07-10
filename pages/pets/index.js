import Image from 'next/image';
import Link from 'next/link';

const Pets = () => {
    return (
        <section className="container mx-auto px-4 sm:px-6 lg:px-8  mb-8">
            <h1 className="font-bold text-2xl mb-8">Питомцы</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                    <Link href="/pets/id">
                        <a>
                            <div className="w-full h-64 sm:h-96 relative object-cover bg-gray-100">
                                <Image
                                    src="https://sun1-20.userapi.com/impg/rHQ9DpMVXODYNuI67UAPYLlOKKqSGKTZ7JLUIA/y8HrvE59Bgw.jpg?size=1040x0&quality=95&sign=19028bf2c30f644cda3aa154d49d101a"
                                    className="rounded-lg"
                                    layout="fill"
                                    objectFit="cover"
                                    alt="image"
                                />
                            </div>
                        </a>
                    </Link>

                    <div className="mt-2 flex items-center justify-between">
                        <p className="text-2xl font-bold">Чивас</p>
                        <div className="flex space-x-2">
                            <span className="py-2 px-4 bg-gray-100 rounded-full">Мальчик</span>
                            <span className="py-2 px-4 bg-gray-100 rounded-full">Один год</span>
                        </div>
                    </div>
                </div>

                <div>
                    <Link href="/pets/id">
                        <a>
                            <div className="w-full h-64 sm:h-96 relative object-cover	">
                                <Image
                                    src="https://sun1-20.userapi.com/impg/rHQ9DpMVXODYNuI67UAPYLlOKKqSGKTZ7JLUIA/y8HrvE59Bgw.jpg?size=1040x0&quality=95&sign=19028bf2c30f644cda3aa154d49d101a"
                                    className="rounded-lg"
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>
                        </a>
                    </Link>
                    <div className="mt-2 flex items-center justify-between">
                        <p className="text-2xl font-bold">Чивас</p>
                        <div className="flex space-x-2">
                            <span className="py-2 px-4 bg-gray-100 rounded-full">Мальчик</span>
                            <span className="py-2 px-4 bg-gray-100 rounded-full">Один год</span>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="w-full h-64 sm:h-96 relative object-cover	">
                        <Image
                            src="https://sun1-20.userapi.com/impg/rHQ9DpMVXODYNuI67UAPYLlOKKqSGKTZ7JLUIA/y8HrvE59Bgw.jpg?size=1040x0&quality=95&sign=19028bf2c30f644cda3aa154d49d101a"
                            className="rounded-lg"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                    <div className="mt-2 flex items-center justify-between">
                        <p className="text-2xl font-bold">Чивас</p>
                        <div className="flex space-x-2">
                            <span className="py-2 px-4 bg-gray-100 rounded-full">Мальчик</span>
                            <span className="py-2 px-4 bg-gray-100 rounded-full">Один год</span>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="w-full h-64 sm:h-96 relative object-cover	">
                        <Image
                            src="https://sun1-20.userapi.com/impg/rHQ9DpMVXODYNuI67UAPYLlOKKqSGKTZ7JLUIA/y8HrvE59Bgw.jpg?size=1040x0&quality=95&sign=19028bf2c30f644cda3aa154d49d101a"
                            className="rounded-lg"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                    <div className="mt-2 flex items-center justify-between">
                        <p className="text-2xl font-bold">Чивас</p>
                        <div className="flex space-x-2">
                            <span className="py-2 px-4 bg-gray-100 rounded-full">Мальчик</span>
                            <span className="py-2 px-4 bg-gray-100 rounded-full">Один год</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pets;
