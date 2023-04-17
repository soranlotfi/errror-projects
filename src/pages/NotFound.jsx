import {Link} from "react-router-dom";

const NotFound = ()=>{
    return(
        <div className="not-found-page">
            <div className="notFound-message">
                <h1>Error 404</h1>
                <p>صفحه ی مورد نظر یافت نشد </p>
                <Link to="/" className="btn">بازگشت به صفحه ی اصلی </Link>
            </div>
        </div>
    )
}

export default NotFound;