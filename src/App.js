import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Advanture from "./Pages/Main/Advanture/Advanture";
import Services from "./Pages/Main/Services/Services";
import Testimon from "./Pages/Main/Testimon/Testimon";
import Footer from "./Pages/Shared/Footer/Footer";
import Collection from "./Pages/Main/Collection/Collection";
import Slider from "./Pages/Main/Slider/Slider";
import Login from "./Pages/Main/Login/Login";
import AuthProvider from "./Context/AuthProvider";
import Booking from "./Pages/Main/Booking/Booking";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Myorder from "./Pages/Main/Myorder/Myorder";
import Manageorder from "./Pages/Main/Manageorder/Manageorder";
import Addservice from "./Pages/Main/Addservice/Addservice";

function App() {
  return (
    <AuthProvider>
      <div className="container">
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Home></Home>
              <Slider></Slider>
              <Advanture></Advanture>
              <Services></Services>
              <Testimon></Testimon>
              <Footer></Footer>
            </Route>
            <Route exact path="/collection">
              <Home></Home>
              <Collection></Collection>
              <Footer></Footer>
            </Route>
            <Route exact path="/login">
              <Home></Home>
              <Login></Login>
            </Route>
            <PrivateRoute exact path="/myOrder">
              <Home></Home>
              <Myorder></Myorder>
              <Footer></Footer>
            </PrivateRoute>
            <PrivateRoute exact path="/manageOrder">
              <Home></Home>
              <Manageorder></Manageorder>
              <Footer></Footer>
            </PrivateRoute>
            <PrivateRoute exact path="/booking/:id">
              <Home></Home>
              <Booking></Booking>
              <Footer></Footer>
            </PrivateRoute>
            <PrivateRoute exact path="/addService">
              <Home></Home>
              <Addservice></Addservice>
              <Footer></Footer>
            </PrivateRoute>
          </Switch>
        </BrowserRouter>
      </div>
    </AuthProvider>
  );
}

export default App;
