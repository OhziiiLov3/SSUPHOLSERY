import React from 'react'
import aboutImage from "../images/ComboLogo01.png";
function About() {
  return (
    <div id="about" className="cracontainer py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12 py-5 mx-auto">
          <div className="photo-wrap mb-4 py-3">
            <img
              className="aboutimage w-50"
              style={{ height: 350 }}
              src={aboutImage}
              alt="aboutimage"
            />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading mx-auto py-3">What We Do</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam est
            harum sequi enim facere quia cumque tempora velit molestiae dolore
            eos quod eius aut dolorum rerum suscipit ad, repudiandae, quibusdam
            assumenda corrupti at facilis reprehenderit minima! Reiciendis
            dolores cum esse animi, omnis natus laborum rem autem optio hic
            minus officia temporibus! Voluptate velit sunt repellat iusto ullam
            veniam eum quasi accusamus alias, dolore dolorum perferendis enim
            cum illo corrupti dolor sint earum tenetur ducimus amet nulla cumque
            nihil eveniet eius. Molestiae suscipit beatae laboriosam labore quae
            mollitia. Velit aliquam ut dolores vitae libero illum dignissimos!
            Illo ea doloremque dolor architecto.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About