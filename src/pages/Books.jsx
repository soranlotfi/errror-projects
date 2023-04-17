import {BookList} from "../data/data";
import {Link, NavLink, Outlet, useSearchParams} from "react-router-dom";

const Books = () => {
    const books = BookList();
    const [searchParams, setSearchParams] = useSearchParams()
    return (

        <div className="container">
            <section className="books-container">
                <div className="bookLinks">
                    <input type="text" placeholder="جستجوی کتاب ..." value={searchParams.get("filter" || "")}
                           onChange={event => {
                               let filter = event.target.value;
                               if (filter) {
                                   setSearchParams({filter})
                               }else{
                                   setSearchParams({})
                               }
                           }
                           }/>
                    {/*{*/}
                    {/*    books.filter((book))*/}
                    {/*}*/}
                    {
                        books.map((book) => (
                            <NavLink key={book.number} to={`book/${book.number}`}>{book.name}</NavLink>
                        ))
                    }
                </div>
                <Outlet/>
            </section>
        </div>

    )
}
export default Books;