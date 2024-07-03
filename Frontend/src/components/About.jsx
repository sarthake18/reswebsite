import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we are serious about is food.</p>
            </div>
            <p className="mid">
            Welcome to [Restaurant Name]

Nestled in the heart of [City], [Restaurant Name] is your destination for [cuisine type] cuisine. Since opening our doors in [Year], we have been committed to providing our guests with a memorable dining experience.

Our Story

Founded by [ALIJHA JAMES], [TRIPLE_A] started as a dream to bring authentic [cuisine type] flavors to the local community. Over the years, we have grown from a small eatery to a beloved dining spot, thanks to our loyal customers and dedicated team.

Our Mission and Values

At [Restaurant Name], our mission is to serve delicious, high-quality food while fostering a warm and welcoming environment. We believe in using fresh, locally-sourced ingredients and sustainable practices to create dishes that are both tasty and responsible.

Meet Our Chef

Our head chef, [Abhi Verma], brings over [8] years of culinary expertise to our kitchen. Trained in [specific culinary school or region], Chef [Name] is passionate about crafting innovative dishes that honor traditional flavors.

What Makes Us Unique

From our signature [Afgani chicken] to our [unique cooking technique], we strive to offer something special for every palate. Our menu features a blend of classic and contemporary dishes, each prepared with the utmost care.

Ambiance and Experience

Step into [TRIPLE_A] and you will find a cozy, elegant setting perfect for any occasion. Whether you are here for a romantic dinner or a family gathering, our attentive staff and inviting atmosphere will make you feel right at home.


Feel free to personalize this template with details specific to your restaurant!
            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
