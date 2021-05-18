import { motion } from "framer-motion";

const Content = props => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}>

        {props.children}

    </motion.div>
);

export default Content;