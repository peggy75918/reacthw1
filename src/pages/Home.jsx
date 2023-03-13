import Header from "../components/Header";
import ImageList from "../components/ImageList";
import Footer from "../components/Footer";
import images from "../json/images.json";

function Home(){
    return (
        <div className="container main-layout">
            <Header
                className="layout-header"
                title="NAME"
                slogan="SLOGAN"
            />
            <ImageList
                className="layout-content"
                images={images}
            />
            <Footer className="layout-footer" />
        </div>
    );
}

export default Home;