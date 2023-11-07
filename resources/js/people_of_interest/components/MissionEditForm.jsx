import axios from "axios";
import React, { useEffect, useState } from "react";

const MissionEditForm = ({ missionId, setMissionId }) => {
    const [missionData, setMissionData] = useState(null);

    const getMission = async () => {
        const response = await axios.get(
            `http://www.mi6.test/api/missions/${missionId}`
        );
        console.log(response.data);
        setMissionData(response.data);
    };

    const handleChange = (event) => {
        setMissionData((previous_values) => {
            return {
                ...previous_values,
                [event.target.name]: event.target.value,
            };
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const response = axios.post(`/api/missions/${missionId}`, missionData);
        console.log(response);
    };

    useEffect(() => {
        getMission();
    }, []);

    return (
        <>
            <button onClick={() => setMissionId(null)}>&times;</button>

            <h2>{missionData?.name}</h2>
            <p>{missionData?.year}</p>
            <div>MissionEditForm</div>
            {missionData ? (
                <form action="" method="post" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        value={missionData?.name}
                        onChange={(e) => handleChange(e)}
                    />
                    <input
                        type="text"
                        name="year"
                        value={missionData?.year}
                        onChange={(e) => handleChange(e)}
                    />
                    <select
                        name="outcome"
                        id=""
                        value={missionData?.outcome ?? ""}
                        onChange={(e) => handleChange(e)}
                    >
                        <option value="">Success</option>
                        <option value="success">Success</option>
                        <option value="Fail">Fail</option>
                    </select>
                    <br />
                    <input type="submit" value="Edit" />
                </form>
            ) : null}
        </>
    );
};

export default MissionEditForm;
