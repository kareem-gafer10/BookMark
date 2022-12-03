import React from "react";
import chrome from "../images/logo-chrome.svg";
import firefox from "../images/logo-firefox.svg";
import opera from "../images/logo-opera.svg";
import dots from "../images/bg-dots.svg";

const Download = () => {
  return (
    <>
      <section className="max-w-7xl mx-auto px-8 py-20">
        <div className="text-center" 
        data-aos="fade-left"
        >
          <h2 className="text-3xl mb-8 lg:text-4xl">Download the extension</h2>
          <p className="md:mx-auto md:w-96">
            We’ve got more browsers in the pipeline. Please do let us know if
            you’ve got a favourite you’d like us to prioritize.
          </p>
        </div>

        <article className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 my-10"
         data-aos="flip-left"
         >
          <div className="bg-white shadow-2xl text-center p-8 rounded">
            <img src={chrome} alt="" className="block mx-auto mb-4" />
            <h3 className="text-xl mb-4">Add to Chrome</h3>
            <p>Minimum version 62</p>
            <img src={dots} alt="" className="block mx-auto my-4" />
            <button className="btn-blue text-white py-2 px-4 rounded shadow-lg hover:opacity-75">
              Add & Install Extension
            </button>
          </div>

          <div className="bg-white shadow-2xl text-center p-8 rounded lg:transform lg:translate-y-10">
          <img src={firefox} alt="" className="block mx-auto mb-4" />
            <h3 className="text-xl mb-4">Add to Firefox</h3>
            <p>Minimum version 55</p>
            <img src={dots} alt="" className="block mx-auto my-4" />
            <button className="btn-blue text-white py-2 px-4 rounded shadow-lg hover:opacity-75">
              Add & Install Extension
            </button>
          </div>

          <div className="bg-white shadow-2xl text-center p-8 rounded lg:transform lg:translate-y-20">
          <img src={opera} alt="" className="block mx-auto mb-4" />
            <h3 className="text-xl mb-4">Add to Opera</h3>
            <p>Minimum version 46</p>
            <img src={dots} alt="" className="block mx-auto my-4" />
            <button className="btn-blue text-white py-2 px-4 rounded shadow-lg hover:opacity-75">
              Add & Install Extension
            </button>
          </div>
        </article>
      </section>
    </>
  );
};

export default Download;
