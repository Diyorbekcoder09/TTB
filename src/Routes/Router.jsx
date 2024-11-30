import Header from "../components/Header/header"
import Footer from "../components/Footer/footer"
import Bosh_sahifa from "./Bosh sahifa/bosh_sahifa"
import Shifikorlar from "./Shifokorlar/Shifokorlar"
import Ilovalar from "./Ilovalar/Ilovalar"
import Yangiliklar from "./yangiliklar/yangiliklar"
import Bosh_ish_orni from "./Bo'sh ish o'rni/bosh_ish_orni"
import QVP from "./QVP/QVP"
import Aloqa from "./Aloqa/Aloqa"


import { Route } from "react-router-dom"



const Router = () => {
    return (
        <>

            <Header />

            <Route exact path="/">
                <Bosh_sahifa  />
            </Route>

            <Route path="/shifokorlar">
                <Shifikorlar  />
            </Route>

            <Route path="/ilovalar">
                <Ilovalar  />
            </Route>

            <Route path="/yangiliklar">
                <Yangiliklar  />
            </Route>

            <Route path="/bosh_ish_orni">
                <Bosh_ish_orni  />
            </Route>

            <Route path="/QVP">
                <QVP  />
            </Route>
            
            <Route path="/aloqa"> 
                <Aloqa  />
            </Route>


            <Footer />


        </>
    )
}

export default Router