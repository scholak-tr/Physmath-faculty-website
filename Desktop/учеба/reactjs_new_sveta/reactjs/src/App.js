import React from "react";
import { BrowserRouter as Router, Route, Routes, Outlet } from "react-router-dom";
import Users from "./components/Users";
import Header from "./components/Header";
import Footer from "./components/Footer";
import History from "./pages/history/History";
import Council from "./pages/council/Council";
import Management from "./pages/management/Management";
import Departments from "./pages/departments/Departments";
import Contacts from "./pages/contacts/Contacts";
import Department1 from "./pages/departments/Department1";
import Department2 from "./pages/departments/Department2";
import Department3 from "./pages/departments/Department3";
import Department4 from "./pages/departments/Departments4";
import Department5 from "./pages/departments/Departments5";
import Department6 from "./pages/departments/Department6";
//import Smi from "./components/Smi";
import NewsSmiDetail from "./components/NewsSmiDetails";
import VideoPage from "./components/VideoPage";
import Schedule from "./components/Schedule";
import Schedule1 from "./components/Schedule1";
import Schedule2 from "./components/Schedule2";
import Schedule3 from "./components/Schedule3";
import Schedule4 from "./components/Schedule4";
import Applicnews from "./pages/applicants/Applicnews";
import ApplicnewsDetail from "./pages/applicants/ApplicnewsDetail";
import Rules from "./pages/applicants/Rules";
import Deadlines from "./pages/applicants/Deadlines";
import Entrance from "./pages/applicants/Entrance";
import Areas from "./pages/applicants/Areas";
import Areas1 from "./pages/applicants/Areas1";
import Areas2 from "./pages/applicants/Areas2";
import Areas3 from "./pages/applicants/Areas3";
import Areas4 from "./pages/applicants/Areas4";
import Areas5 from "./pages/applicants/Areas5";
import Areas6 from "./pages/applicants/Areas6";
import Areas7 from "./pages/applicants/Areas7";
//import Areas8 from "./pages/applicants/Areas8";
import Areas9 from "./pages/applicants/Areas9";
import Areas10 from "./pages/applicants/Areas10";
import Areas11 from "./pages/applicants/Areas11";
import Areas12 from "./pages/applicants/Areas12";
import Areas13 from "./pages/applicants/Areas13";
import Areas14 from "./pages/applicants/Areas14";
//import Areas15 from "./pages/applicants/Areas15";
//import Areas16 from "./pages/applicants/Areas16";
import Areas17 from "./pages/applicants/Areas17";
import Price from "./pages/applicants/Price";
import Documents from "./pages/applicants/Documents";
import SWSH from "./pages/applicants/SWSH";
import Contest from "./pages/applicants/Contest";
import Bachelor from "./pages/applicants/Bachelor";
import Specialty from "./pages/applicants/Specialty";
import Masterdegree from "./pages/applicants/Masterdegree";
import NewsDetail from "./components/NewsDetail";
import Pineapples from "./components/Pineapples";
import Studentscien from "./components/Studentscien";
import Studentlife from "./pages/students/Studentlife";
import Studentproject from "./pages/students/Studentproject";
import Studentelder from "./pages/students/Studentelder";
import Vr from "./pages/teachers/Vr";
import UMR from "./pages/teachers/UMR";
import KiA from "./pages/teachers/KiA";
import CategoryCards from "./pages/applicants/CategoryCards";
//import MultiSlideCarousel from "./components/MultiSlideCarousel";
import Studentgovern from "./components/Studentgovern";
import { useNavigate } from "react-router-dom";
import Tradeunion from "./components/Tradeunion";
import Volunteer from "./components/Volunteer";
import MediaCommittee from "./components/MediaComittee";
import CreativeCommittee from "./components/CreativeComittee";
import EditorialBoard from "./components/EditorialBoard";
import SportsCommittee from "./components/SportsComittee";
import RecruitPlan from "./pages/applicants/RecruitPlan";
//import ScienceCommittee from "./components/ScienceComitte";
{/*const Ticker = ({news}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/news/85")
    }

    return (
        <div className="ticker" onClick={handleClick}>
            <marquee>{news}</marquee>
        </div>
    )
}*/ }


const Layout = () => {
   //const news = "Дорогие будущие студенты! Приглашаем вас на день открытых дверей нашего факультета! Это уникальная возможность познакомиться с нашим факультетом, задать интересующие вопросы и узнать о студенческой жизни из первых уст. "
    return (<>
    <Header />
    {/**<Ticker news={news}/> */}
    <div className="name">
            <main>
                <CategoryCards title="Наши программы"/>
                {/*<MultiSlideCarousel title="Новости факультета"/>*/}
                <Users type = "" title = "Новости факультета" />
                <Outlet />
            </main>
        </div>
    <Footer />
    </>
        
    )
}

const NotFound = () => {
    return (<div className="name">
        <Header />
        <main>
        <h1>
            Страница не найдена
        </h1>
        </main>
            <Footer />
    </div>)
}

class App extends React.Component {
    render() {
        return (
            <Router>
                <Routes>
                    {/*<Route path="/" element={<CategoryCards />} /> */}
                    <Route path="/category/:category" element={<Areas />} />
                    <Route path="/users" element={<Users type = "" title = "Новости факультета" />} />

                    <Route path="/" element={<Layout />} />
                    <Route path="/news/:id" element={<NewsDetail />}/>
                    <Route path="/history" element={<History />} />
                   <Route path="/council" element={<Council />} /> 
                    <Route path="/management" element={<Management />} />
                    <Route path="/departments" element={<Departments />} />
                    <Route path="/departments/department1" element={<Department1 />}/>
                    <Route path="/departments/department2" element={<Department2 />}/>
                    <Route path="/departments/department3" element={<Department3 />}/>
                    <Route path="/departments/department4" element={<Department4 />}/>
                    <Route path="/departments/department5" element={<Department5 />}/>
                    <Route path="/departments/department6" element={<Department6 />}/>
                    <Route path="/uvc" element={<Department6 />} /> 
                    <Route path="/contacts" element={<Contacts />} />
                  {/**<Route path="/smi" element={<Smi />} /> */}  
                    <Route path="/newssmi/:id" element={<NewsSmiDetail />} />
                    <Route path="/video/:id" element={<VideoPage />} />
                    <Route path="/schedule" element={<Schedule />} />
                    <Route path="/schedule1" element={<Schedule1 />} />
                    <Route path="/schedule2" element={<Schedule2 />} />
                    <Route path="/schedule3" element={<Schedule3 />} />
                    <Route path="/schedule4" element={<Schedule4 />} />
                    <Route path="/applicnews" element={<Applicnews />} />
                    <Route path="/applicnews/:id" element={<ApplicnewsDetail />} />
                    <Route path="/rules" element={<Rules />} />
                    <Route path="/recruitplan" element={<RecruitPlan />} />
                    <Route path="/deadlines" element={<Deadlines />} />
                    <Route path="/entrance" element={<Entrance />} />
                    <Route path="/areas" element={<Areas />} />
                    <Route path="/areas/areas1" element={<Areas1 />} />
                    <Route path="/areas/areas2" element={<Areas2 />} />
                    <Route path="/areas/areas3" element={<Areas3 />} />
                    <Route path="/areas/areas4" element={<Areas4 />} />
                    <Route path="/areas/areas5" element={<Areas5 />} />
                    <Route path="/areas/areas6" element={<Areas6 />} />
                    <Route path="/areas/areas7" element={<Areas7 />} />
                    {/*<Route path="/areas/areas8" element={<Areas8 />} />*/}
                    <Route path="/areas/areas9" element={<Areas9 />} />
                    <Route path="/areas/areas10" element={<Areas10 />} />
                    <Route path="/areas/areas11" element={<Areas11 />} />
                    <Route path="/areas/areas12" element={<Areas12 />} />
                    <Route path="/areas/areas13" element={<Areas13 />} />
                    <Route path="/areas/areas14" element={<Areas14 />} />
                    {/*<Route path="/areas/areas15" element={<Areas15 />} />
                    <Route path="/areas/areas16" element={<Areas16 />} />*/}
                    <Route path="/areas/areas17" element={<Areas17 />} />
                    <Route path="/price" element={<Price />} />
                    <Route path="/documents" element={<Documents />} />
                    <Route path="/SWSH" element={<SWSH />} />
                    <Route path="/contest" element={<Contest />} />
                    <Route path="/contest/bachelor" element={<Bachelor />} />
                    <Route path="/contest/specialty" element={<Specialty />} />
                    <Route path="/contest/masterdegree" element={<Masterdegree />} />

                    <Route path="/pineapples" element={<Pineapples />} />
                    <Route path="/studentscien" element={<Studentscien />} />
                    <Route path="/masterdegree" element={<Masterdegree />} />

                    <Route path="/studentlife" element={<Studentlife />} />
                    <Route path="/studentgovern" element={<Studentgovern />} />
                    <Route path="/studentproject" element={<Studentproject />} />
                    <Route path="/studentelder" element={<Studentelder />} />
                    <Route path="/tradeunion" element={<Tradeunion />}/>
                    <Route path="/volunteer" element={<Volunteer />} />
                    <Route path="/media-committee" element={<MediaCommittee />} />
                    <Route path="/creative-committee" element={<CreativeCommittee />} />
                    <Route path="/editorial-board" element={<EditorialBoard />} />
                    <Route path="/sports-committee" element={<SportsCommittee />} />
                 {/** <Route path="/science-committee" element={<ScienceCommittee />} />*/}   
                    
                    <Route path="/vr" element={<Vr />} />
                    <Route path="/umr" element={<UMR />} />
                    <Route path="/KiA" element={<KiA />} />

                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Router>
        )
    }
}

export default App;