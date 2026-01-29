function MainPage({ car }) {

    console.log(car);

    return (
        <div className="bg-slate-200 flex items-start gap-10 px-20 20 py-10">
            <div className="w-30 bg-white py-0 5 px-5 5 rounded-lg shadow-2xl">
                <h1 className="py-5 5 text-xl">Categories</h1>
                <h3 className="text-3xl bg-black text-white px-2 2 rounded-lg cursor-pointer">All Products</h3>
                <h3 className="text-3xl py-2 2 px-2 2 cursor-pointer hover:bg-slate-300 duration-700 rounded-lg m-3 3">Footwear</h3>
                <h3 className="text-3xl py-2 2 px-2 2 cursor-pointer hover:bg-slate-300 duration-700 rounded-lg m-3 3">Electronic</h3>
                <h3 className="text-3xl py-2 2 px-2 2 cursor-pointer hover:bg-slate-300 duration-700 rounded-lg m-3 3">Accesories</h3>
            </div>
            <div >
                <h1 className="text-2xl">All Products</h1>
                <h3 className="text-gray-800">6 products</h3>
                <div className="grid grid-cols-6 gap-4">

                    <div className="w-full">
                        <img src={car.img} alt="" />
                        <h1>{car.title}</h1>
                        <h3>{car.price}</h3>
                    </div>
                    <div>
                        <img src={car.img} alt="" />
                        <h1>{car.title}</h1>
                        <h3>{car.price}</h3>
                    </div>
                    <div>
                        <img src={car.img} alt="" />
                        <h1>{car.title}</h1>
                        <h3>{car.price}</h3>
                    </div>
                    <div>
                        <img src={car.img} alt="" />
                        <h1>{car.title}</h1>
                        <h3>{car.price}</h3>
                    </div>
                    <div>
                        <img src={car.img} alt="" />
                        <h1>{car.title}</h1>
                        <h3>{car.price}</h3>
                    </div>
                    <div>
                        <img src={car.img} alt="" />
                        <h1>{car.title}</h1>
                        <h3>{car.price}</h3>
                    </div>
                    <div>
                        <img src={car.img} alt="" />
                        <h1>{car.title}</h1>
                        <h3>{car.price}</h3>
                    </div>
                    <div>
                        <img src={car.img} alt="" />
                        <h1>{car.title}</h1>
                        <h3>{car.price}</h3>
                    </div>
                    <div>
                        <img src={car.img} alt="" />
                        <h1>{car.title}</h1>
                        <h3>{car.price}</h3>
                    </div>
                    <div>
                        <img src={car.img} alt="" />
                        <h1>{car.title}</h1>
                        <h3>{car.price}</h3>
                    </div>
                    <div>
                        <img src={car.img} alt="" />
                        <h1>{car.title}</h1>
                        <h3>{car.price}</h3>
                    </div>
                    <div>
                        <img src={car.img} alt="" />
                        <h1>{car.title}</h1>
                        <h3>{car.price}</h3>
                    </div>
                    <div>
                        <img src={car.img} alt="" />
                        <h1>{car.title}</h1>
                        <h3>{car.price}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainPage