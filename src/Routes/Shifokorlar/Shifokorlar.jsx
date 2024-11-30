import "./shifokorlar.css"
import d_img from "../../assets/images/doctor2.jpg"
import d_img2 from "../../assets/images/doktor.jpg"
import d_img3 from "../../assets/images/doctor3.jpg"
import d_img4 from "../../assets/images/doctor4.jpg"

const Shifokorlar = () => {
  return (
    <div>
      <h2>Shifokorlar</h2>
      <div className="img_group">
        <img src={d_img} alt="" className="d_img" />
        <img src={d_img2} alt="" className="d_img" />
        <img src={d_img3} alt="" className="d_img" />
        <img src={d_img4} alt="" className="d_img" />
      </div>
    </div>
  )
}

export default Shifokorlar