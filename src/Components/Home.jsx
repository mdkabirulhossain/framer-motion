import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
    return (
        <div>
            <motion.h2 animate={{ fontSize: 50 }}>
                Welcome to pizza joint
            </motion.h2>
        </div>
    );
};

export default Home;
