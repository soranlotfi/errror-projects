
import './App.css';
import {BrowserRouter, createBrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Books from "./pages/Books";
import Book from "./pages/Book";
import NotFound from "./pages/NotFound";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}>
              <Route path="/about" element={<About/>}/>
              <Route path="/Books" element={<Books/>}>
                  <Route index element={<h1>کتاب مورد نظر را انتخاب کنید</h1>}></Route>
                  <Route path = "book/:bookId" element={<Book/>}/>
              </Route>
          </Route>
            <Route path = "*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );


}

export default App;
