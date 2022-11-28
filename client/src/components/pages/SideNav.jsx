import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
function SideNavigation(props) {

  const [backEndData, setBackEndData] = useState({});
  const [newCategoryData, setNewCategoryData] = useState("");

  const [currentCategoryName, setCurrentCategoryName] = useState('');

  const [currentCategoryID, setCurrentCategoryID] = useState('');

  const [addedCategory, setAddedCategory] = useState('');
  const navigate = useNavigate();

  useEffect(() => { getCategories() }, [addedCategory,newCategoryData]);




  async function getCategories() {
    await fetch("/api")
      .then(response => response.json())
      .then(data => { setBackEndData(data) })

  }


  function handleAddCategory(e) {
    setNewCategoryData(e.target.value)

  };

  function getCategoryInputData(e) {
    e.preventDefault()
    fetch('/addCatagories', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        category: newCategoryData,
      }),
    })
      .then((res) => res.json())
      .then(setAddedCategory(newCategoryData))
      .then(getCategories())
      .then(setNewCategoryData(''))
      // .then((result) => setData(result.rows))
      .catch((err) => console.log('error'));


  };

  //const handleClick = async (id, name) => {
  const handleClick = (category) => {
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



    <div className="col-2">

      <form onSubmit={getCategoryInputData}>
        <input className="form-control" name="newCategory" value={newCategoryData} placeholder="Category" aria-label="Category" onChange={handleAddCategory} />
        <button type="submit"  >Add Category</button>


      </form>


      {addedCategory}


      {
        (Object.keys(backEndData).length === 0) ? (<p>Loading....</p>) :
          (

            backEndData.map(function (category, index) {

              return (<div>

                <button type='button' onClick={() => handleClick(category)} key={category.id}>{category.name} </button>
              </div>
              )


            })



          )

      }

    </div>


  )

}

export default SideNavigation;