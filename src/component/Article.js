import React, { useState } from "react";
import Data from "./../dummyData.json";

function Article() {
    
    const article = Data
    const [state, setState] = useState(' ')

    const descendingOder = () => {
        const res = article.sort((a, b) => a.upvotes > b.upvotes ? -1 : 1)
        console.log(res)

        return setState(res)
    }


    if (!article) {
        return <h3>Page Not Found</h3>
    }


    return (
        <div className="App">

            <button style={{ color: 'white', width: '140px', margin: "2%", height: '50px', background: 'gray' }} onClick={descendingOder}>Descending Oder</button>
            <h5 style={{ color: 'red' }}>Sorting by using a number of up-votes</h5>

            <hr />
            {article.map((data, index) => {

                return (
                    <div key={index}>

                        <h1>{data.title}</h1>
                        <h2>{data.upvotes}</h2>
                        <h3>{data.date}</h3>
                        <hr />
                    </div>
                )

            })}
        </div>
    );
}
export default Article