import Header from "../components/Header";
import { Link,Outlet } from "react-router-dom";
import Footer from "../components/Footer";


export default function Root() {
    return (
      <>
        
        <Header/>




        

        <div id="detail">

            <Outlet/>

        </div>


        <Footer/>




      </>
    );
  }