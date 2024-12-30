
const Header = () => {
  return (
    <>
        <div className="bg-green-600">
            <div className="h-12 mx-7 flex justify-center">
                <ul className="flex w-full items-center justify-between">
                    <li className="text-3xl stylish-regular">GR Books</li>
                    <li className="w-1/2">
                        <div className="flex ">
                            <select className="bg-gray-300  h-8 outline-none" name="" id="">
                                <option value="">All</option>
                                <option value="">Books</option> 
                                <option value="">Fiction</option> 
                                <option value="">Nonfiction</option> 
                                <option value="">eBooks</option> 
                                <option value="">Audiobooks</option> 
                                <option value="">Kids</option> 
                                <option value="">Teens & YA</option> 
                                <option value="">Toys & Games</option> 
                                <option value="">Stationery & Gifts</option> 
                                <option value="">Music & Movies</option>
                            </select>
                            <input className="w-full h-8 p-2 outline-none" type="text" name="hel" id="" />
                            <i className="bi bi-search h-8 bg-gray-300 flex justify-center items-center w-1/12"></i>
                        </div>
                    </li>
                    <li className="bg-gray-300 flex px-2 pl-3 gap-3 justify-center items-center">
                        <div className="font-bold">0</div>
                        <i className="bi bi-cart4 text-2xl"></i>
                    </li>
                </ul>
            </div>
        </div>
        <div className="bg-green-600">
            <div className="h-12 mx-7">
                <ul className="flex w-full items-center justify-between h-full font-medium">
                    <li>Books</li> ||
                    <li>Fiction</li> |
                    <li>Nonfiction</li> |
                    <li>eBooks</li> |
                    <li>Audiobooks</li> |
                    <li>Kids</li> |
                    <li>Teens & YA</li> |
                    <li>Toys & Games</li> |
                    <li>Stationery & Gifts</li> |
                    <li>Music & Movies</li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Header