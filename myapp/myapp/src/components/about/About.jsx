import Back from "../common/header/Back";
import Heading from "../common/header/Heading";
import img from "../home/images/about.jpg";
import immio from "/images/immio.jpg";
import "./About.css";

const About = () => {
  return (
    <>
      <section className="about">
        <Back name="About Us" title="About Us - Who We Are?" cover={img} />
        <div className="container flex mtop">
          <div className="left row">
            <Heading
              title="Our Agency Story"
              subtitle="Check out our company story and work process"
            />

            <p style={{ color: "black" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p style={{ color: "black" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip.
            </p>
            <button className="btn2">More About Us</button>
          </div>
          <div className="right row">
            <img src={immio} style={{ borderRadius: "10px" }} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
