// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';

// function CategoryDetails() {
//   const { serviceName } = useParams();
//   const [category, setCategory] = useState(null);

//   useEffect(() => {
//     const fetchCategory = async () => {
//       try {
//         const response = await axios.get(`http://localhost:5000/api/services/${serviceName}`);
//         setCategory(response.data);
//       } catch (error) {
//         console.error('Error fetching category details:', error);
//       }
//     };

//     fetchCategory();
//   }, [serviceName]);

//   if (!category) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="container mt-5">
//       <h2 className="text-center mb-4">{category.name}</h2>
//       <p className="text-center mb-4">{category.description}</p>
//       <div className="row">
//         {category.treatments.map((treatment) => (
//           <div className="col-md-6 mb-4" key={treatment.treatmentName}>
//             <div className="card shadow-sm">
//               <div className="card-body">
//                 <h4 className="card-title">{treatment.treatmentName}</h4>
//                 <p className="card-text">{treatment.description}</p>
//                 <p className="card-text">Price: ${treatment.price}</p>
//                 <p className="card-text">Estimated Time: {treatment.estimatedTime} minutes</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default CategoryDetails;