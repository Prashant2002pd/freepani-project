import React from "react";

const Home = () => {
  return (
    <div className=" bg-primary-black">
      <div className="flex justify-center text-start content-center items-center ">
        <div>
          <h1 className=" text-primary-green m-5 p-4 text-8xl font-bold">
            THE FUTURE OF ADVERTISING
          </h1>
          <span className="text-primary-white ml-5 py-4 pl-4  text-3xl font-bold">
            Why pay when you can
          </span>
          <span className="text-primary-green  text-3xl font-bold">
            #DrinkFree.
          </span>
          <p className=" text-primary-white m-5 p-4 text-lg">
            In a crowded digital landscape where ad blindness and oversaturation
            are prevalent, we offer a unique, engaging, and personalized
            approach to connect with your audience. Our water bottle canvases
            and QR code integration set us apart. In a world where consumers are
            inundated with ads, Drinkfree offers a refreshing and unmissable way
            for brands to stand out and make a lasting impact. We're not just
            advertising; we're a brand's opportunity to be in every hand,
            delivering tailored messages and exclusive offers directly to
            consumers.
          </p>
          <button className="m-5 px-4 py-2 w-[40vh] border-4 border-primary-green rounded-lg text-primary-green hover:bg-primary-white hover:border-primary-black hover:text-primary-black transition ease-in-out delay-150">
            Advertise with us
          </button>
        </div>
        <img
          className=" w-[100vh] m-3 p-2"
          src="https://static.wixstatic.com/media/79ba6e_5001254e4d5d4c7eae01257e2fa9006a~mv2.jpg/v1/fill/w_899,h_1021,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/df-bannery_edited_edited_edited_edited_j.jpg"
        />
      </div>
      <div className="flex justify-center text-start content-center items-center bg-primary-white ">
        <div className="bg-primary-white">
          <h1 className=" text-primary-black  text-5xl font-bold m-10 mb-0 px-5">
            REVOLUTIONIZE ADVERTISING
          </h1>
          <h2 className=" text-primary-green text-5xl font-bold m-10 mt-0 px-5">
            YOUR BRAND,OUR CANVAS
          </h2>
          <p className=" text-primary-black text-lg m-10 p-5 font-semibold">
            We turned our bottles into canvases for a brand's message and offer
            everything for free to consumers. A simple scan of our QR code
            connects them to your brand's world, allowing you to reach your
            target audience directly and track real-time campaign performance
          </p>
        </div>
        <img
          className=" w-[110vh]"
          src="https://static.wixstatic.com/media/79ba6e_ba37cb740dd44199a81cb40e565e53c6~mv2.jpg/v1/fill/w_951,h_800,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/79ba6e_ba37cb740dd44199a81cb40e565e53c6~mv2.jpg"
        />
      </div>
      <div>
        <img src="https://static.wixstatic.com/media/79ba6e_f4116e10d46f40e5b6a273f535ca9400~mv2.png/v1/fill/w_1864,h_799,al_c,q_90,enc_auto/79ba6e_f4116e10d46f40e5b6a273f535ca9400~mv2.png" />
      </div>
      <div>
        <img
          src="https://static.wixstatic.com/media/79ba6e_142791273fb34ea1b3b2be11b26acab5~mv2.png/v1/fill/w_1899,h_898,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/79ba6e_142791273fb34ea1b3b2be11b26acab5~mv2.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Home;
