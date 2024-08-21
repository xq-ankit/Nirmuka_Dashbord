import BoxHome from "./BoxHome";
import image1 from '../images/s1.png';
import image2 from '../images/s2.png';

const Services = () => {
  return (
    <div id="services">
        <div className="s-heading">
            <h1>Features</h1>
            <p>Hea=re are some feature of the software</p>
        </div>
        <div className="b-container">
            <BoxHome image={image1} alte='image1' button='Python' />
            <BoxHome image={image2} alte='image1' button='Python' />
        </div>
    </div>
  )
}

export default Services