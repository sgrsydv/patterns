import { motion } from "framer-motion";

const Content = props => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
    >
        {props.children}
    </motion.div>
);

export default Content;