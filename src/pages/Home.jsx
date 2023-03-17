import Header from "../components/Header";
import ImageList from "../components/ImageList";
import Description from "../components/Description";
import Footer from "../components/Footer";
import images from "../json/images.json";

function Home(){
    return (
        <div className="container mainLayout" >
            <Header
                className="layoutHeader"
                title="NAME"
                slogan="SLOGAN"
            />
            <ImageList
                className="layoutContent"
                images={images}
            />
            <Description className="layoutDescription"/>
            <Footer className="layoutFooter" />
        </div>
    );
}

export default Home;