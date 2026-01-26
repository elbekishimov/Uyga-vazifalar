function MainPage() {
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
                <div className="grid grid-cols-3 gap-x-28">
                    <div>
                        <img className="rounded-lg w-100 h-96" src="https://images.unsplash.com/photo-1656944227421-416b1d2186c9?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWlyJTIwam9yZGFufGVufDB8fDB8fHww" alt="" />
                        <h1 className="font-bold text-3xl">Classic Sneakers</h1>
                        <h3>Footwear</h3>
                        <h2 className="text-2xl">$129.99</h2>
                    </div>
                    <div>
                        <img className="rounded-lg w-100 h-96" src="https://images.unsplash.com/photo-1656944227421-416b1d2186c9?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWlyJTIwam9yZGFufGVufDB8fDB8fHww" alt="" />
                        <h1 className="font-bold text-3xl">Classic Sneakers</h1>
                        <h3>Footwear</h3>
                        <h2 className="text-2xl">$129.99</h2>
                    </div>
                    <div>
                        <img className="rounded-lg w-100 h-96" src="https://images.unsplash.com/photo-1656944227421-416b1d2186c9?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWlyJTIwam9yZGFufGVufDB8fDB8fHww" alt="" />
                        <h1 className="font-bold text-3xl">Classic Sneakers</h1>
                        <h3>Footwear</h3>
                        <h2 className="text-2xl">$129.99</h2>
                    </div>
                    <div>
                        <img className="rounded-lg w-100 h-96" src="https://images.unsplash.com/photo-1656944227421-416b1d2186c9?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWlyJTIwam9yZGFufGVufDB8fDB8fHww" alt="" />
                        <h1 className="font-bold text-3xl">Classic Sneakers</h1>
                        <h3>Footwear</h3>
                        <h2 className="text-2xl">$129.99</h2>
                    </div>
                    <div>
                        <img className="rounded-lg w-100 h-96" src="https://images.unsplash.com/photo-1656944227421-416b1d2186c9?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWlyJTIwam9yZGFufGVufDB8fDB8fHww" alt="" />
                        <h1 className="font-bold text-3xl">Classic Sneakers</h1>
                        <h3>Footwear</h3>
                        <h2 className="text-2xl">$129.99</h2>
                    </div>
                    <div>
                        <img className="rounded-lg w-100 h-96" src="https://images.unsplash.com/photo-1656944227421-416b1d2186c9?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWlyJTIwam9yZGFufGVufDB8fDB8fHww" alt="" />
                        <h1 className="font-bold text-3xl">Classic Sneakers</h1>
                        <h3>Footwear</h3>
                        <h2 className="text-2xl">$129.99</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainPage