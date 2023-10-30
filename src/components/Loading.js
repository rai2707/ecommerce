// import React from "react";

// import { ColorRing } from  'react-loader-spinner'

// const Loading = () => {
//   return (
//     <div className="d-flex justify-content-center">
//       <ColorRing
//         visible={true}
//         height="100"
//         width="100"
//         color="#808080"
//       />
//     </div>
//   );
// };
// export default Loading;

import React from "react";


import { FallingLines } from "react-loader-spinner";


function Loding() {
  return (
    <div>
      <div className="d-flex justify-content-center">
        <FallingLines
          color="orange"
          width="100"
          visible={true}
          ariaLabel="falling-lines-loading"
        />
      </div>
      
    </div>
  );
}

export default Loding;
