import { useEffect, useState } from 'react';
function SideNavigation(props) {

  const [backEndData, setBackEndData] = useState({});
  const [newCategoryData, setNewCategoryData] = useState("");

  useEffect(function () {
    fetch("/api")
        .then(response => response.json())
        .then(data => { setBackEndData(data) })
}, [newCategoryData]);

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
      // .then((result) => setData(result.rows))
      .catch((err) => console.log('error'));
  setNewCategoryData('')
};





 



  return (



    <div className="col-2">

      <form onSubmit={getCategoryInputData}>
        <input className="form-control" name="newCategory" value={newCategoryData} placeholder="Category" aria-label="Category" onChange={handleAddCategory} />
        <button type="submit"  >Add Category</button>
        {/* <button type="submit" className="btn btn-primary   " id="addCategory" onClick={props.addCategory}>Add Category</button> */}

      </form>





      {
        (Object.keys(backEndData).length === 0) ? (<p>Loading....</p>) :
          (

            backEndData.map(function (category, index) {
              return( <div>

                 <button type='button' onClick={() => props.handleClick(category.id,category.name)} key={category.id}>{category.name} </button> 
              </div>
              )


            })



          )

      }

    </div>


  )

}

export default SideNavigation;