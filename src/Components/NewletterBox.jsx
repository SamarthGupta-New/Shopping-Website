import React from "react";

const NewletterBox = () => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-gray-800">
        Subscribe Now & get 20% off
      </p>
      <p className="text-gray-400 mt-3">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil totam,
        voluptate iste aliquam earum, illo voluptas amet nostrum ut molestias
        commodi fugiat eaque sunt? Nulla aliquid molestias doloribus officiis
        quasi?
      </p>
      <form
        onSubmit={onSubmitHandler}
        className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3"
      >
        <input
          className="w-full sm:flex-1 outline-none"
          type="email"
          placeholder="Enter your Email"
          required
        />
        <button
          className="bg-black text-white py-4 text-xs px-10"
          type="submit"
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default NewletterBox;
