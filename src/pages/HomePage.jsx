import documentTile from "../documentTile";
import Header from "../components/Header";

export default function HomePage(){
    documentTile("Anime")
    return (
        <div style={{
            background: "black",
            height: "100vh",
            overflowX:"hidden",
        }}>
            <Header/>
            {/*<HomePageBanner/>*/}
            {/*<HomePageCarousel index={"Trending in India"}/>*/}
            {/*<HomePageCarousel index={"Science Fiction"}/>*/}
            {/*<HomePageCarousel index={"Action"}/>*/}
            {/*<HomePageCarousel index={"Drama"}/>*/}
            <div style={{marginBottom:"6vh"}}/>
            {/*<SumplayFooter/>*/}
        </div>
    );
}