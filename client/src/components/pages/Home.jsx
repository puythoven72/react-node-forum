
import Content from './Content';
import SideNavigation from  './SideNav';


 function Home(props) {

    return (
       
        <div className="container-fluid">
            
        <div className="row">
           <SideNavigation backEndData={props.backEndData} setBackEndData={props.setBackEndData} currentCategory ={props.currentCategory} setCurrentCategory={props.setCurrentCategory} /> 
            <Content currentCategory ={props.currentCategory}   currentQuestion={props.currentQuestion} /> 
           
        </div>

        </div>
        
    )


}

export default Home;