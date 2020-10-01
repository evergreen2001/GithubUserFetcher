import React from "react";

// const List = ({ items }) => {
//   const itemLIst = items.map((item) => {
//     return (
//       <div>
//         <p>{item.value}</p>
//         <p>{item.label}</p>
//       </div>
//     );
//   });

//   return itemLIst;
// };

// export default List;

const List = ({ items }) => (
  <div>
    {/* <Link url={items.html_url} title={items.label} /> */}

    {items.map((item) => (
      <section>
        {/* <img src={item.value} alt={item.value}/> */}
        <a href={item.value}></a>
        <div key={item.value}>
          <p>
            {item.label} : {item.value}
          </p>
        </div>
      </section>
    ))}
  </div>
);

export default List;
