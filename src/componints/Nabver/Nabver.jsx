import { useState } from "react";
import Link from "../Link/Link";
import { HiMenuAlt1} from "react-icons/hi";
import { IoClose } from "react-icons/io5";


const Nabver = () => {
    const [open, setOpen] = useState(false)

    let arrayOfObjects = [
        { id: 1, name: 'Item 1', path: 'Home' },
        { id: 2, name: 'Item 2', path: 'Item' },
        { id: 3, name: 'Item 3', path: 'Item Name' },
        { id: 4, name: 'Item 4', path: 'Contact' },
        { id: 5, name: 'Item 5', path: 'About' }
    ];
    return (
        <div>
            <nav className="font-semibold bg-orange-300 p-3">
                <div className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
                    {
                        open !== false ? <IoClose></IoClose> : <HiMenuAlt1></HiMenuAlt1>
                    }
                
                </div>
                <ul className={`md:flex p-4 absolute duration-1000 md:static
                ${open ? 'top-11' : '-top-60'}
                bg-orange-300`}>
                    {
                        arrayOfObjects.map(item => <Link key={arrayOfObjects.id} item={item}></Link>)
                    }
                </ul>
            </nav>
        </div>
    );
};

export default Nabver;