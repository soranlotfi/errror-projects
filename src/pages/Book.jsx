// import {Outlet, useParams} from "react-router-dom";
// import {getBook} from "../data/data";
// const Book = ()=>{
//     const params = useParams();
//     const book = getBook(parseInt(params.bookId))
//     console.log("bookId : "  + Number(params.bookId))
//     console.log(book)
//     return(
//         <section className="book-info">
//             {/*<h2>{book.name}</h2>*/}
//         </section>
//     )
// }
//
// export default Book;

import {useParams} from "react-router-dom";
// import books from "./books";
import {getBook} from "../data/data";

const Book = () => {
    const params = useParams()
    const book = getBook(parseInt(params.bookId))

    if(book){
        return (
            <div className="book-interduce" style={{padding: "1rem"}}>
                <h2>قیمت : {`${book.amount} تومان`}</h2>
                <p>
                    نام کتاب : {" "}{book.name}
                </p>
                <p>تاریخ انتشار: {book.due}</p>
                <button>حذف کتاب</button>
            </div>
        )
    }else{
        return (
            <h2>کتاب با چنین مشخصاتی یافت نشد..!</h2>
        )
    }

}
export default Book;