import Headerhome from "../../componentHome/Headerhome"
import Testimonials from "../../componentHome/Testomonial"
import "../../styles/homePage.scss"


const HomePage = () => {
  return (
    <div className="app">
        <Headerhome/>
        <Testimonials/>
    </div>
  )
}

export default HomePage