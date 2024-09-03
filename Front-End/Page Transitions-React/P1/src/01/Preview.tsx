import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ease } from "./animations";

import image from "./LH2.jpg";
import AnimatedText from "./AnimatedText";

function Preview() {
  return (
    <div className="relative w-full h-full flex justify-center items-center">
      <h3 className="absolute top-[6%] text-1xl font-semibold text-gray-400">
        [ Page After Transition ]
      </h3>

      <motion.div
        className="w-[500px] h-[300px]"
        animate={{
          x: "-50%",
          width: "680px",
          height: "450px",
        }}
        transition={{ duration: 1.5, ...ease }}
      >
        <Link to="/">
          <img src={image} className="w-full h-full object-cover" />
        </Link>
      </motion.div>

      <div className="absolute left-[52%]">
        <AnimatedText
          text="Lewis Hamilton"
          className="text-6xl font-darker font-bold mb-3 text-amber-100"
        />

        <div className="overflow-hidden text-lg">
          <motion.p className="text-white text-sm"
            initial={{ y: "100%", opacity: 0 }}
            animate={{
              y: "0",
              opacity: 1,
            }}
            transition={{ duration: 1, delay: 1.3 }}
          >
            -<b>A seven-time World Champion 🏆.</b>< br/><br />
           The most wins, pole positions, and podium finishes in Formula One history. Is he the G.O.A.T? Few would deny that he’s in the conversation – and what’s more he’s got there his way, twinning his relentless speed with a refusal to conform to stereotypes for how a racing driver should think, dress or behave.

          </motion.p>
        </div>
      </div>
    </div>
  );
}

export default Preview;
