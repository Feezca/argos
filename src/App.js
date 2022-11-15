import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Layout from "./component/layout/Layout";
import Footer from "./component/footer/Footer";
import Navbar from "./component/navbar/Navbar";
import { Contenido } from "./component/contenido/Contenido";
import Nosotros from "./component/contenido/Nosotros";


function App() {
  return (
    //encierra los componentes
    <Layout>
      {/* componentes */}
      <Navbar />
      <Nosotros/>
      <Contenido/>
      <Footer />
    </Layout>
  );
}

export default App;
