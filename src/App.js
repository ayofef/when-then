import "./App.css";


import Header from "./components/UI/Header/Header";
import Layout from "./containers/Layout/Layout";
import Footer from "./components/UI/Footer/Footer";


function App() {
    return (
        <div className="App">
            <Header />
            <Layout />
            <Footer />
        </div>
    );
}

export default App;
