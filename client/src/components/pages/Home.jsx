import Header from './Header';
import Content from './Content';
import SideNavigation from  './SideNav';


 function Home(props) {

const loggedInUserData = localStorage.getItem("userData");



   
    return (
       
        <div className="container-fluid">
            
        <div className="row">
           <SideNavigation  currentCategory ={props.currentCategory} setCurrentCategory={props.setCurrentCategory} /> 
            <Content currentCategory ={props.currentCategory}   currentQuestion={props.currentQuestion} /> 
           
        </div>

        </div>
        
    )


}

export default Home;