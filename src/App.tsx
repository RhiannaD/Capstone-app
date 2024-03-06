import { Route, Routes } from "react-router-dom";
import "./App.css";
import Tab from "./components/Tab/Tab";
import Profile from "./views/Profile/Profile";
import Tour from "./views/Tour/Tour";
import Merch from "./views/Merch/Merch";

const App = () => {
    return (
        <>
            <center>
                <img
                    src="http://www.fillster.com/images/dividers/65s.gif"
                    alt="chain"
                />
                <br />
            </center>

            <Tab />
            <Routes>
                <Route path="/" element={<Profile />} />
                <Route path="/tour" element={<Tour />} />
                <Route path="/merch" element={<Merch />} />
            </Routes>

            <div>
                <style
                    type="text/css"
                    dangerouslySetInnerHTML={{
                        __html: "table, tr, td { background-color:transparent;}div table tr td {background-color: FF0000 !important;}div table tr td a:link,div table tr td a:visited,div table tr td a:hover {color: 7FFF00 !important; font-weight: bold !important;}table {background-color: transparent !important;}table table table td {background-color: 2A2A2A !important;}table table table table td {color: FFFFFF !important;}.clearfix {background-color: 2A2A2A !important;}.profileInfo {border: FF0000 2px solid !important;}.interestsAndDetails, .userProfileDetail, .contactTable {background-color: 2A2A2A !important; border: FF0000 2px solid !important; width: 300px !important;}.extendedNetwork , .latestBlogEntry, .blurbs, .friendSpace,.friendsComments {background-color: 2A2A2A !important; border: FF0000 2px solid !important;}span, .btext, .orangetext15 {background-color: transparent !important;}a {font-weight: normal !important; color: BEA703 !important;}b, span, .btext, .orangetext15, .whitetext12  {color: FFFFFF !important;}.text  {color: FFFFFF !important;}.lightbluetext8 {color: B2DFEE !important;}a.text:link, a.text:visited {font-weight: bold; color:FF0000 !important;}div object {background-color: 2A2A2A !important; border: FF0000 2px solid !important;}ul li div span div {background-color: 2A2A2A !important; border: FF0000 2px solid !important;}table.contactTable tr td.text {background-color: 2A2A2A !important;}table.contactTable td.tdborder table td{background-color: E0E1E2 !important;}table.contactTable td.tdborder{background-color: E0E1E2 !important;}div ul li a.open:link,div ul li a.open:visited,div ul li a.open:hover{background-color: 1548ae !important;}div ul li small{color: ffccdd !important;}.bodyContent{background-color: transparent;}body {background:url(http://www.fillster.com/images/backgrounds/285e.gif);background-attachment:fixed;background-repeat:repeat;}table tr td div, div div a.text:link, div div a.text:visited, div div a.text:hover, div div a.text:active, div div p a:link, div div p a:visited, div div p a:hover, div div p a:active {color: FF69B4 !important;}",
                    }}
                />
                <center></center>
            </div>
        </>
    );
};

export default App;
