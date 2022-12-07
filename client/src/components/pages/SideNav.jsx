import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { getLocalUserData } from '../utility.js';

function SideNavigation(props) {

  const [backEndData, setBackEndData] = useState({});
  const [newCategoryData, setNewCategoryData] = useState("");

  const [currentCategoryName, setCurrentCategoryName] = useState('');

  const [currentCategoryID, setCurrentCategoryID] = useState('');

  const [addedCategory, setAddedCategory] = useState('');
  const navigate = useNavigate();


  useEffect(() => { getCategories() }, [addedCategory, newCategoryData]);

  // const loggedInUserData = localStorage.getItem("userData");


  async function getCategories() {
    await fetch("/api")
      .then(response => response.json())
      .then(data => { setBackEndData(data) })

  }


  function handleAddCategory(e) {
    setNewCategoryData(e.target.value)

  };

  function getCategoryInputData(e) {
    e.preventDefault();
    let userId = null;
    let userStoredData = getLocalUserData();
    if (userStoredData !== null && newCategoryData !== '') {

      userId = userStoredData.id;


      fetch('/addCatagories', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          category: newCategoryData,
          userID: userId
        }),
      })
        .then((res) => res.json())
        .then(setAddedCategory(newCategoryData))
        .then(getCategories())
        .then(setNewCategoryData(''))
        // .then((result) => setData(result.rows))
        .catch((err) => console.log('error'));

    }
  };

  //const handleClick = async (id, name) => {
  const handleClick = (category) => {
    alert("in " + category)
    try {
      props.setCurrentCategory(category);
      navigate('/');
      // await fetch(`getQuestions?id=${category.id}`)
      //   .then(response => response.json())
      //   // .then(data => { setAllQuestionByCategory(data) })
      //   .then(data => { props.setAllQuestionByCategory(data) })
      //   .then(navigate('/', { replace: true }), [navigate])
      //   .then(myJson => {

      //   });

    } catch (err) {
      console.log(err.message)
    }
  };







  return (



    <div className="col-2 g-3  " >

      <form onSubmit={getCategoryInputData}>
        <div className="form-group border border-secondary rounded p-2">
          <div className='row '>
            <div className='col mb-1'>
              <input type="text" className="form-control" name="newCategory" value={newCategoryData} placeholder="Category" aria-label="Category" onChange={handleAddCategory} />
            </div>
          </div>
          <div className='row'>
            <div className='col text-center'>
              <button type="submit" className="btn btn-secondary">Add Category</button>
            </div>
          </div>
        </div>

      </form>




      <div className="list-group mt-2 border border-secondary rounded p-0">

        {
          (Object.keys(backEndData).length === 0) ? (<p>Loading....</p>) :
            (

              backEndData.map(function (category, index) {

                return (<div>
                  {/* <li className="list-group-item" key={category.id}><a href='#' onClick={() => handleClick(category)}>{category.name}</a></li> */}
                  {/* <button type="button" className="list-group-item list-group-item-action" onClick={() => handleClick(category)}>A second item</button> */}

                  <button type='button' className="list-group-item list-group-item-action list-group-item-primary" onClick={() => handleClick(category)} key={category.id}>{category.name} </button>
                </div>
                )
              })
            )
        }

      </div>

    </div>


  )

}

export default SideNavigation;