import "./App.css";
import NavigationBar from "./component/NavigationBar";
import MovieSurf from "./pages/MovieSurf";
import Categorize from "./pages/Categorize";
import DetailPage from "./pages/DetailPage";
import { Route, Routes } from "react-router";
import Footer from "./component/Footer";

//url 들고오기--->
//api.js 에 공통되는 부분 넣어주고, interceptor추가
//movieaction 에 url 정리하고 promise.all로 한번에 호출해주기
//data잘 들고왔나 useEffect로 확인하기
function App() {

  return (
    <div className="background-color">
      <div className="background-size">
        <NavigationBar />
        <Routes>
          <Route path="/" element={<MovieSurf />} />
          <Route path="/categorize" element={<Categorize />} />
          <Route path="/:id" element={<DetailPage/>} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
