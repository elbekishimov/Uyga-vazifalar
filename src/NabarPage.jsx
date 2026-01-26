import NavbarCart from "../public/shopping-cart.png"

function NavbarPage() {
    return (
        <div className="flex items-center gap-10 justify-between px-10 10 py 10 0">
            <div className="flex items-center gap-10">
                <h1>STOREFRONT</h1>
                <h3>New Arrivals</h3>
                <h3>Men</h3>
                <h3>Women</h3>
                <h3>Accessories</h3>
            </div>
            <div className="flex items-center gap-10 ">
                <input className="border-solid border-2 border-sky-500 rounded-lg px-5 15 py-2 2" type="text" placeholder="search"/>
                <img className="w-[50px]" src={NavbarCart} alt="" />
            </div>
        </div>
    )
}

export default NavbarPage