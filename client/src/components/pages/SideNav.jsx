import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getLocalUserData } from '../utility.js';

function SideNavigation(props) {

  // const [backEndData, setBackEndData] = useState({});
  const [newCategoryData, setNewCategoryData] = useState("");
  const [addedCategory, setAddedCategory] = useState('');
  const [addCat, setAddCat] = useState(false);
  const navigate = useNavigate();


  useEffect(() => { if (Object.keys(props.backEndData).length === 0 ) { getCategories() } }, [addedCategory]);


  async function getCategories() {
    await fetch("/api")
      .then(response => response.json())
      .then(data => { props.setBackEndData(data) }

      )
      .catch((err) => console.log(err));

      setAddCat(false);
      setAddedCategory('');
  }


  function handleAddCategory(e) {
    setNewCategoryData(e.target.value)

  };

  async function getCategoryInputData(e) {
    e.preventDefault();
    let userId = null;
    let userStoredData = getLocalUserData();
    if (userStoredData !== null && newCategoryData !== '') {

      userId = userStoredData.id;


      await fetch('/addCatagories', {
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
         .then(  getCategories())
        //.then(setAddCat(true))
        .then(setNewCategoryData(''))
        // .then((result) => setData(result.rows))
        .catch((err) => console.log(err));

    }
    setAddCat(true);
  };

  const handleClick = (category) => {
    try {
      props.setCurrentCategory(category);
      navigate('/');

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
          (Object.keys(props.backEndData).length === 0) ? (<p >Add A Category</p>) :
            (

              props.backEndData.map(function (category, index) {

                return (
                  <div key={category.id}>
                    <button type='button' className="list-group-item list-group-item-action list-group-item-primary" onClick={() => handleClick(category)}>{category.name} </button>
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