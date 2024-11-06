// import { Routes, Route, useLocation } from "react-router-dom";
// import Home from "./pages/Home/Home.jsx";
// import About from "./pages/About/About";
// import Skills from "./pages/Skills/Skills";
// import Portfolio from "./pages/Portfolio/Portfolio";
// import Work from "./components/PortfolioWorks/Work";
// import Contact from "./pages/Contact/Contact";
// import Header from "./components/Header/Header";
// import { AnimatePresence } from "framer-motion";
// import Page404 from "./pages/Page404/Page404.jsx";
// import BackToTop from "./components/BackToTop/BackToTop.jsx";

// function App() {
//   const location = useLocation();

//   return (
//     <div className="App">
//       <Header />
//       <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
//         <Routes location={location} key={location.pathname}>
//           <Route path="/" exact element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/skills" element={<Skills />} />
//           <Route path="/portfolio" element={<Portfolio />} />
//           <Route path="/portfolio/:id" exact element={<Work />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/*" element={<Page404 />} />
//         </Routes>
//       </AnimatePresence>
//       <BackToTop />
//     </div>
//   );
// }


// export default App;

import { Routes, Route, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About";
import Skills from "./pages/Skills/Skills";
import Portfolio from "./pages/Portfolio/Portfolio";
import Contact from "./pages/Contact/Contact";
import Header from "./components/Header/Header";
import BackToTop from "./components/BackToTop/BackToTop.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <Home />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <About />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <Skills />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <Portfolio />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <Contact />
      </motion.div>

      <BackToTop />
    </div>
  );
}

export default App;
