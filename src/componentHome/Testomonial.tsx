import './Testomonial.scss'; // Make sure to have your styles file in the same directory

const Testimonial = ({ quote, image, name }) => {
    return (
        <div className="card">
            <span><i className="ri-double-quotes-l"></i></span>
            <p>{quote}</p>
            <hr />
            <img src={image} alt="user" />
            <p className="name">{name}</p>
        </div>
    );
};

const Testimonials = () => {
    return (
        <section className="testimonials" id="testimonials">
            <div className="section__container">
                <div className="header">
                    <p>TESTIMONIALS</p>
                    <h1>Addiction Stories</h1>
                </div>
                <div className="testimonials__grid">
                    <Testimonial
                        quote="I can't express enough gratitude for the life-changing experience I had at Nasha Mukti Kendra. Before entering the facility, my life was spiraling out of control due to addiction. I had lost all hope and didn't think I could ever break free from the chains of substance abuse."
                        image="/src/componentHome/img.jpeg"
                        name="Aryan Saxena"
                    />
                    <Testimonial
                        quote="From the moment I walked through the doors of Nasha Mukti Kendra, I was welcomed with open arms by a caring and compassionate staff. They provided me with the support and guidance I needed to embark on my journey to recovery."
                        image="/src/componentHome/img2.jpeg"
                        name="Kapil Gautam"
                    />
                    <Testimonial
                        quote="The therapy and counseling sessions were instrumental in helping me understand the root causes of my addiction and develop healthier coping mechanisms. The program at Nasha Mukti Kendra is comprehensive, addressing not only the physical aspects of addiction but also the emotional and psychological factors that contribute to it."
                        image="/src/componentHome/img3.jpeg"
                        name="Sohum Grant"
                    />
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
