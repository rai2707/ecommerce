const filterReducer = (state, action) => {
  switch (action.type) {
    case "LOADING_FILTER_PRODUCTS":
      let priceArr = action.payload.map((curElem) => curElem.price);
      // console.log(priceArr)

      let maxPrice = Math.max(...priceArr);
      // console.log( maxPrice)

      return {
        ...state,
        filter_products: [...action.payload],
        all_products: [...action.payload],
        filters: { ...state.filters, maxPrice, price: maxPrice },
      };

    case "SET_GRID_VIEW":
      return {
        ...state,
        grid_view: true,
      };

    case "SET_LIST_VIEW":
      return {
        ...state,
        grid_view: false,
      };

    case "SORT_VALUE":
      return {
        ...state,
        sorting_value: action.payload,
      };

    case "SORTING_PRODUCTS":
      let newSortData;

      const { filter_products } = state;
      let tempSortData = [...filter_products];

      // console.log("====temp data", tempSortData);

      const sortingProducts = (a, b) => {
        if (state.sorting_value === "lowest") {
          return a.price - b.price;
        }
        if (state.sorting_value === "highest") {
          return b.price - a.price;
        }
        if (state.sorting_value === "a-z") {
          return a.name.localeCompare(b.name);
        }
        if (state.sorting_value === "z-a") {
          return b.name.localeCompare(a.name);
        }
      };

      newSortData = tempSortData.sort(sortingProducts);

      return {
        ...state,
        filter_products: newSortData,
      };

    case "UPDATE_FILTERS_VALUE":
      const { name, value } = action.payload;

      console.log("=====name inside update filter", name, value);

      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };

    case "FILTER_PRODUCTS":
      let { all_products } = state;
      let tempFilterProduct = [...all_products];

      const { text, category, company, color, price } = state.filters;

      if (text) {
        tempFilterProduct = tempFilterProduct.filter((curEle) => {
          return curEle.name.toLowerCase().includes(text);
        });
      }

      if (category !== "all") {
        tempFilterProduct = tempFilterProduct.filter(
          (curElem) => curElem.category === category
        );
      }
      console.log("=====temp", tempFilterProduct);

      if (company !== "all") {
        tempFilterProduct = tempFilterProduct.filter(
          (curElem) => curElem.company.toLowerCase() === company.toLowerCase()
        );
      }
      if (color !== "all") {
        tempFilterProduct = tempFilterProduct.filter((curElem) =>
          curElem.colors.includes(color)
        );
      }

      if(price == 0){
        tempFilterProduct = tempFilterProduct.filter(
          (curEle) => curEle.price == price
        )
      }else{
        tempFilterProduct = tempFilterProduct.filter(
          (curEle) => curEle.price <= price
        )
      }

      return {
        ...state,
        filter_products: tempFilterProduct,
      };

      case "CLEAR_FILTERS":
        return{
          ...state,
          filters:{
            ...state.filters,
            text: "",
            category: "all",
            company: "all",
            color: "all",
            maxPrice: 0,
            price: state.filters.maxPrice,
            minPrice: state.filters.maxPrice,
          }
        }


    default:
      return state;
  }
};

export default filterReducer;
