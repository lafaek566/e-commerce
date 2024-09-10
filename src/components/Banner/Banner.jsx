import React from "react";
import BannerImg from "../../assets/ImageDataHouse/house3.png";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          {/* image section */}
          <motion.div
            data-aos="zoom-in"
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={BannerImg}
              alt=""
              className="max-w-[400px] h-[350px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover"
            />
          </motion.div>

          {/* text details section */}
          <div className="flex flex-col justify-center gap-6 sm:pt-0">
            <h1 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold">
              House's Sale upto 50% Off
            </h1>
            <p
              data-aos="fade-up"
              className="text-sm text-gray-500 tracking-wide leading-5"
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
              reiciendis inventore iste ratione ex alias quis magni at optio
            </p>

            <div className="flex flex-col gap-4">
              <motion.div
                data-aos="fade-up"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="flex items-center gap-4"
              >
                <GrSecure className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400" />
                <p>Quality Products Material</p>
              </motion.div>

              <motion.div
                data-aos="fade-up"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="flex items-center gap-4"
              >
                <IoFastFood className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400" />
                <p>Fast Response</p>
              </motion.div>

              <motion.div
                data-aos="fade-up"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="flex items-center gap-4"
              >
                <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100 dark:bg-green-400" />
                <p>Easy Payment Method</p>
              </motion.div>

              <motion.div
                data-aos="fade-up"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="flex items-center gap-4"
              >
                <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-100 dark:bg-yellow-400" />
                <p>Get Offers</p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
