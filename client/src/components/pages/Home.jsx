import Header from './Header';
import Content from './Content';
import SideNavigation from  './SideNav';


 function Home(props) {


   
    return (
       
        <div className="container-fluid">
        <div className="row">
           <SideNavigation  currentCategory ={props.currentCategory} setCurrentCategory={props.setCurrentCategory} /> 
            <Content currentCategory ={props.currentCategory}  /> 
           
        </div>

        </div>
        
    )


}

export default Home;