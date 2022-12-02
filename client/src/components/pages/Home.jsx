import Header from './Header';
import Content from './Content';
import SideNavigation from  './SideNav';


 function Home(props) {

const loggedInUserData = localStorage.getItem("userData");
if(loggedInUserData !== null){
    alert(loggedInUserData);
}


   
    return (
       
        <div className="container-fluid">
            
        <div className="row">
           <SideNavigation  currentCategory ={props.currentCategory} setCurrentCategory={props.setCurrentCategory} /> 
            <Content currentCategory ={props.currentCategory}   /> 
           
        </div>

        </div>
        
    )


}

export default Home;