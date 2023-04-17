import {BookList} from "../data/data";
import {Link, NavLink, Outlet} from "react-router-dom";
const Books = ()=>{
    const books = BookList();
    console.log(
        books.map(book=>{
            return book.name
        })
    )
    return(

        <div className="container">
            <section className="books-container">
                <div className="bookLinks">
                    {
                        books.map((book)=>(
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