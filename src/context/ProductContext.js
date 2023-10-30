import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from '../reducer/prodReducer'

const AppContext = createContext();

const API = "https://api.pujakaitem.com/api/products";

const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    featureProducts: [],
    isSingleLoading: false,
    singleProduct: {},

}

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getProducts = async (url) => {
    dispatch({ type: "LOADING" });
    try {
      const res = await axios.get(url);
      const products = await res.data;
      dispatch({ type: "API_DATA", payload: products });
    } catch (error) {
      dispatch({ type: "ERROR" });
    }
  };

  // calling second api for single product

const getSingleProduct = async(url) =>{
    console.log("========== url ", url);
    dispatch({type: "SINGLE_LOADING"});
    try{
        const response = await axios.get(url);
        const singleProduct = await response.data;
        dispatch({type: "SINGLE_PRODUCT", payload: singleProduct});
    }catch(error){
        dispatch({type:'SINGLE_ERROR'})

    }
}

  useEffect(() => {
    getProducts(API);
  }, []);

  return(
    <AppContext.Provider value={{ ...state, getSingleProduct }}>
    {children}
    </AppContext.Provider>
  )
};

const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };


