import React from "react";

const Card = ({ name, email, id }) => {
    return (
        <div className="bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5">
            <React.StrictMode>
                <img alt="robots" src={`https://robohash.org/${id}?200x200`}></img>
                <div>
                    <h2>{name}</h2>
                    <p>id: {id}</p>
                    <p>{email}</p>
                </div>
            </React.StrictMode>
        </div>
    );
}

export default Card;