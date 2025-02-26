import React from "react";
import Title from "../Components/Title";
import { assets } from "../assets/assets";
import NewletterBox from "../Components/NewletterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-gray-200 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt="about us"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-700">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga enim,
            ab distinctio beatae id eaque officia assumenda quo! Quisquam labore
            error quasi culpa nobis quibusdam at omnis voluptatibus dicta nisi.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim saepe
            necessitatibus laboriosam officia dolorem, ab similique sequi
            reprehenderit iusto, quae voluptatem, neque modi doloribus aut qui
            animi consectetur harum obcaecati.
          </p>
          <b className="text-gray-800"> Our Mission</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            aut laborum eligendi alias id sed possimus in, ex numquam a dolores
            voluptatibus, iusto minima quos non consequatur. Quo, voluptatibus
            recusandae!
          </p>
        </div>
      </div>
      <div className="text-2xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20 ">
        <div className="border border-gray-200 px-10 md:px-16 py-8 sm:py-20 flex flex-xol gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. In
            corporis ea magnam et adipisci, deleniti deserunt odio laboriosam
            exercitationem eos. Quo nostrum ratione porro et delectus corporis
            commodi aut! Non.
          </p>
        </div>
        <div className="border border-gray-200 px-10 md:px-16 py-8 sm:py-20 flex flex-xol gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. In
            corporis ea magnam et adipisci, deleniti deserunt odio laboriosam
            exercitationem eos. Quo nostrum ratione porro et delectus corporis
            commodi aut! Non.
          </p>
        </div>
        <div className="border border-gray-200 px-10 md:px-16 py-8 sm:py-20 flex flex-xol gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. In
            corporis ea magnam et adipisci, deleniti deserunt odio laboriosam
            exercitationem eos. Quo nostrum ratione porro et delectus corporis
          </p>
        </div>
      </div>
      <NewletterBox />
    </div>
  );
};

export default About;
