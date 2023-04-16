import {Outlet, useParams} from "react-router-dom";
import {getBook} from "../data/data";
const Book = ()=>{
    const params = useParams();
    const book = getBook(parseInt(params.bookId))
    console.log("bookId : "  + Number(params.bookId))
    console.log(book)
    return(
        <section className="book-info">
            {/*<h2>{book.name}</h2>*/}
        </section>
    )
}

export default Book;