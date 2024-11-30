import "./footer.css"
import footer_logo from "../../assets/images/footer_logo.png"
import xarita from "../../assets/images/Снимок экрана 2024-11-30 153526.png"

const footer = () => {
    return (
        <div>
            <div className="footer">
                <div className="footer_g">
                    <img src={footer_logo} alt="" className="footer_logo" />
                    <p className="footer_text"><i class="fa-solid fa-location-dot"></i>Manzil</p>
                    <p className="footer_text1">Samarqand viloyati Ishtixon tumani</p>
                    <p className="footer_text2"><i class="fa-solid fa-phone"></i>Telefon</p>
                    <p className="footer_text3">+998666291000</p>
                    <p className="footer_text3">+998666291000</p>
                </div>
                <div className="footer_g">
                    <p className="footer_text4">Menu</p>
                    <ul className="item">
                        <li className="item_text">Bosh sahifa</li>
                        <li className="item_text">Shifokorlar</li>
                        <li className="item_text">Ilovalar</li>
                        <li className="item_text">Yangiliklar</li>
                        <li className="item_text">Bo'sh ish o'rni</li>
                        <li className="item_text">QVP</li>
                        <li className="item_text">Aloqa</li>
                    </ul>
                </div>
                <div className="footer_g">
                    <img src={xarita} alt="" className="xarita" />
                    <p className="footer_text5"><i class="fa-solid fa-globe"></i>Ishtixonttb.uz</p>
                    <p className="footer_text6">Bizni kuzatib boring!</p>
                    <div className="group">
                        <a href="https://t.me/IshtixonTTBaxborotxizmati"><i class="fa-brands fa-telegram"></i></a>
                        <a href="https://www.facebook.com/Ishtixonttb?mibextid=ZbWKwL"><i class="fa-brands fa-facebook"></i></a>
                       <a href="https://www.ishtixonttb.uz/"> <i class="fa-solid fa-envelope"></i></a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default footer