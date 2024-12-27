import React from 'react';
import { motion } from "motion/react"
// import { motion } from "motion/react"

const Home = () => {
    return (
        <div>
            <motion.h2
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.4,
                    scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                }}
                className='text-center font-bold text-3xl text-blue-600'>
                Welcome to pizza joint
            </motion.h2>

            {/* Gestures example */}
            <motion.div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                className='bg-[#9911ff] w-24 h-24 rounded-md mx-auto mt-10 flex items-center justify-center'>
                <p >Md. Kabirul</p>
            </motion.div>

            {/* Keyframes exapmple  */}
            <motion.div

                animate={{
                    scale: [1, 2, 2, 1, 1],
                    rotate: [0, 0, 180, 180, 0],
                    borderRadius: ["0%", "0%", "50%", "50%", "0%"],
                }}
                transition={{
                    duration: 2,
                    ease: "easeInOut",
                    times: [0, 0.2, 0.5, 0.8, 1],
                    repeat: Infinity,
                    repeatDelay: 1,
                }}
                className='bg-orange-500 w-24 h-24 rounded-md mx-auto mt-20 flex items-center justify-center'>
                <p className='text-red-600 font-bold text-xl' >45% off</p>
            </motion.div>

            <motion.div className='mt-20'
                initial={{ x: '100%' }}
                animate={{ x: '0%' }}
                transition={{ duration: 1 }} // Optional: controls animation speed
                style={{

                    // width: '100%', // Ensures it takes the full screen width
                    textAlign: 'center', // Centers text horizontally

                }}
            >

                <p className='text-xl font-bold text-pink-600'>Lorem ipsum dolor sit amet.</p>

            </motion.div>

            <motion.div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                className='bg-[#9911ff] w-24 h-24 rounded-md mx-auto mt-10 flex items-center justify-center'>
                <p >Md. Kabirul</p>
            </motion.div>

        </div>
    );
};

export default Home;
