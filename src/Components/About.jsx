import React from "react";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section className="relative bg-black text-white">
        <div className="relative">
          <img
            src="https://via.placeholder.com/1500x500" // Replace with a relevant hero image
            alt="Store Hero"
            className="w-full h-[50vh] object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center p-6">
            <h1 className="text-4xl font-bold mb-4">About Us</h1>
            <p className="text-lg">
              Pioneering style, performance, and innovation—crafted for your
              every step.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 px-6 lg:px-24 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Our Story
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Our journey began with a single step, driven by the desire to
            revolutionize the world of sportswear and e-commerce. Since our
            inception, we have been committed to crafting products that blend
            style, innovation, and sustainability. We believe in empowering
            individuals to reach their highest potential, both in sports and in
            life.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            To inspire and innovate for athletes worldwide. Whether you're a
            professional athlete or someone who enjoys an active lifestyle, we
            are here to support you. Every product we create is designed with
            passion, precision, and performance in mind.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-6 lg:px-24 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Our Values
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Innovation
              </h3>
              <p className="text-gray-600">
                We continuously push boundaries to deliver cutting-edge
                products.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Sustainability
              </h3>
              <p className="text-gray-600">
                We are committed to reducing our environmental impact every step
                of the way.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Performance
              </h3>
              <p className="text-gray-600">
                Designed to perform, our products cater to athletes at every
                level.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-900 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">
          Ready to take the next step?
        </h2>
        <p className="text-lg mb-8">
          Explore our collection and find the perfect gear for your journey.
        </p>
        <button
          className="px-6 py-3 bg-red-600 rounded-lg hover:bg-red-700 transition duration-300"
          onClick={() => navigate("/products")}
        >
          Shop Now
        </button>
      </section>
    </div>
  );
}

export default About;
