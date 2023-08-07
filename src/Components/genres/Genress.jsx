// import React from 'react';

// import './style.scss'
// import { useSelector } from 'react-redux';

// function Genress({ data }) {
//   const { genres } = useSelector((state) => state.home)
//   return <div>
//       {data?.map((g)=>{
//         if(!genres[g]?Genress.name) return;
//         return(
//           <div key={g} className='genres'>
//             {genres[g]?Genress.name}
//           </div>
//         )
//       })}
//   </div>
// }

// export default Genress;

import React from "react";
import { useSelector } from "react-redux";

import "./style.scss";

const Genress = ({ data }) => {
    const { genres } = useSelector((state) => state.home);

    return (
        <div className="genres">
            {data?.map((g) => {
                if (!genres[g]?.name) return;
                return (
                    <div key={g} className="genre">
                        {genres[g]?.name}
                    </div>
                );
            })}
        </div>
    );
};

export default Genress;