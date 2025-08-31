import LinkAsButton from "../components/Button";
import { NavigationMenuDemo } from "../components/Navbar";
import ButtonDemo from "../components/Button";
import Cards from "../components/Cards";
import data from "../data.json";
import imgData from "../img.json";

export default function Page() {
  return (
    <div>
      <NavigationMenuDemo />
      <main className="container mx-auto mt-10 px-4 sm:px-6 lg:px-20 mb-8 ">
        <section className="flex flex-col lg:flex-row items-center gap-8">
          <div className="flex-1  ">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold">
              Scalable Apps
              <br /> with frameworks
            </h1>
            <p className="mt-6 sm:mt-8 lg:mt-10 text-base sm:text-lg lg:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              voluptate et neque earum iste hic <br /> consequatur nulla
              deserunt architecto numquam!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8 lg:mt-10">
              <ButtonDemo>Download for Free</ButtonDemo>
              <ButtonDemo className="bg-white text-black border hover:bg-indigo-100">
                Github Repo
              </ButtonDemo>
            </div>
          </div>

          <div className="flex-1 flex justify-center">
            <img
              src="./hero-source.svg"
              alt="hero"
              className="max-w-xs sm:max-w-md lg:max-w-3xl h-auto"
            />
          </div>
        </section>
        <div className="mt-10">
          <h2 className="font-semibold text-4xl mb-1">
            Everything you need to start a website
          </h2>
          <p className="font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
            consequuntur.
          </p>
        </div>
        <div className="mt-10 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {data.map((item) => (
            <Cards
              key={item.id}
              src={item.icon}
              title={item.title}
              Description={item.description}
            />
          ))}
        </div>
        <div className="flex justify-center  font-semibold mt-3 ">
          <p>Works with your technologies</p>
        </div>
        <section className="mt-10 flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-24">
          {imgData.map((images) => (
            <img
              key={images.id}
              src={images.src}
              alt=""
              loading="lazy"
              className="transition-all duration-300 hover:scale-150"
            />
          ))}
        </section>

        <section className="mb-8  justify-center  flex mt-10 ">
          <div className=" bg-black w-5xl   text-white  flex  gap-7  flex-col px-28 py-25  rounded-2xl ">
            <h2 className="flex justify-center font-semibold text-6xl ">
              Build faster websites
            </h2>
            <p className="flex justify-center">
              Pull content from anywhere and serve it fast with Astro's next-gen
              island architecture
            </p>
            <div className="flex justify-center items-center ">
              <ButtonDemo className="bg-white  text-black hover:bg-white">
                Get Started
              </ButtonDemo>
            </div>
          </div>
        </section>
      </main>
      <footer className="container mx-auto mt-10 px-4 sm:px-6 lg:px-20 mb-10  justify-center  flex ">
        <div className="flex flex-col mb-15">
          <p className="font-[400]    text-[20px] ">
            Copyright © 2024. All rights reserved
          </p>
          <p className="flex text-center justify-center font-[400] ">
            Made by Web3Templates
          </p>
        </div>
      </footer>
    </div>
  );
}
