import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Faq = () => {
  useEffect(() => {
    AOS.init({ duration: "500", delay: "70" });
  }, []);
  return (
    <div data-aos="fade-up">
      <section className=" bg-[#05a081] bg-opacity-10 rounded mb-12">
        <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
          <h2 className="mb-12 text-4xl text-[#05a081] font-bold leading-none text-center sm:text-5xl">
            Frequently Asked Questions
          </h2>
          <div className="collapse collapse-arrow space-y-4 ">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              1. How do I search for properties on your website?
            </div>
            <div className="collapse-content">
              <p>
                To search for properties, simply use our intuitive search bar
                located on the homepage. You can enter keywords, locations,
                property types, price ranges, and more to narrow down your
                options.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow ">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              2. Can I save my favorite properties for later viewing?
            </div>
            <div className="collapse-content">
              <p>
                Yes, you can create an account on our website and save your
                favorite properties to your personal account. This allows you to
                easily access and compare properties at any time.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow ">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              3. Are your listings up-to-date and accurate?
            </div>
            <div className="collapse-content">
              <p>
                We strive to keep our listings as up-to-date and accurate as
                possible. Our team regularly updates the website with new
                properties and removes listings that are no longer available.
                However, we recommend contacting the property agent directly for
                the most current information.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faq;
