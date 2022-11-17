import { createContext, useContext, useState } from "react";

const CategoryContext = createContext({});

const CategoryContextProvider = ({ children }) => {

    const [categories, setcategories] = useState({})

    const [dataToDisplay, setdataToDisplay] = useState([])

    const [categoryList, setcategoryList] = useState([])

    const updateCategory = (cat, data) =>{
      // setcategories(data)
      if (categories[cat]){
        setdataToDisplay(categories[cat])
      }
      else{
        let catInstance  = categories
        catInstance[cat] = data
        setcategories(catInstance)

        setdataToDisplay(data)

        // setcategories((prev)=> ({
        //   prev[cat] })
      }

    }

    return (
        <CategoryContext.Provider value={{
          categories,
          updateCategory,
          categoryList,
          setcategoryList,
          dataToDisplay,
        }}>
          {children}
        </CategoryContext.Provider>
      );
}
export default CategoryContextProvider;

export const useCategoryContext = () => useContext(CategoryContext);
