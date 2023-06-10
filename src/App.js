import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import Footer from "./components/Footer";
import { AlertProvider } from "./context/alertContext";
import Alert from "./components/Alert";
import "./App.css";
import Projects from "./components/Projects"
//import ProjectsSection from "./components/ProjectsSection";

function App() {
 return (
   <ChakraProvider theme={theme}>
     <AlertProvider>
       <main>
         <Header />
         <LandingSection />
         <Projects />
         <Footer />
         <Alert />
       </main>
     </AlertProvider>
   </ChakraProvider>
 );
}

export default App;