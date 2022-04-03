import documentTile from "../documentTile";
import Header from "../components/Header";
import HomePageBanner from "../components/HomePageBanner";
import AnimeList from "../components/AnimeList";
import AnimiaFooter from "../components/Footer";

export default function HomePage(){
    documentTile("Animia")

    return (
        <div style={{
            background: "black",
            height: "100vh",
            overflowX:"hidden",
        }}>
            <Header/>
            <HomePageBanner/>
            <AnimeList/>
            <div style={{marginBottom:"6vh"}}/>
            <AnimiaFooter/>
        </div>
    );
}