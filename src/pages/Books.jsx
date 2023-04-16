import {BookList} from "../data/data";
import {Link, Outlet} from "react-router-dom";
const Books = ()=>{
    const books = BookList();
    console.log(
        books.map(book=>{
            return book.name
        })
    )
    return(

        <section className="books-container">
           <div className="bookLinks">
               {
                   books.map((book)=>(
                       <Link key={book.number} to={`book/${book.number}`}>{book.name}</Link>
                   ))
               }
           </div>
            <Outlet/>
        </section>

    )
}
export default Books;