import React, { useEffect, useState } from "react";

const PersonDetail = ({ agentId }) => {
    const [person, setPerson] = useState(null);

    const getAgent = async () => {
        try {
            const respone = await fetch(
                `http://www.mi6.test/api/people/${agentId}`
            );
            const data = await respone.json();
            setPerson(data);
        } catch (error) {
            console.log("Something went wrong", error);
        }
    };

    useEffect(() => {
        getAgent();
    }, []);
    return (
        <div className="person-detail">
            {person ? (
                <>
                    {" "}
                    <div className="image">
                        <img src={`images/${person?.image.path}`} alt="Image" />
                    </div>
                    <div className="description">
                        <p>
                            Nationality <i>{person?.nationality}</i>
                        </p>
                        <p>
                            Occupation <i>{person?.occupation}</i>
                        </p>
                        <p>
                            Hair color <i>{person?.hair_color}</i>
                        </p>
                        <p>
                            Eye color <i>{person?.eye_color}</i>
                        </p>
                    </div>
                </>
            ) : (
                "Loading..."
            )}
        </div>
    );
};

export default PersonDetail;
