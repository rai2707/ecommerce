const ProductReducer = (state, action) => {
    switch (action.type) {
        case "LOADING":
          return {
            ...state,
            isLoading: true,
          };
    
        case "API_DATA":
          const featureData = action.payload.filter((ele) => {
            return ele.featured === true;
        });
        console.log("=====", featureData);
    
          return {
            ...state,
            isLoading: false,
            products: action.payload,
            featureProducts: featureData,
          };
    
        case "ERROR":
          return {
            ...state,
            isLoading: false,
            isError: true,
          };

          case "SINGLE_LOADING":
          return {
            ...state,
            isSingleLoading: true,
          };

          case "SINGLE_PRODUCT":
          return {
            ...state,
            isSingleLoading: false,
            singleProduct: action.payload,
          };

          case "SINGLE_ERROR":
          return {
            ...state,
            isSingleLoading: false,
            isError: true,
          };
    
        default:
          return state;
      }
};

export default ProductReducer;
