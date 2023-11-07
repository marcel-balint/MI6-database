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

    useEffect(() => {
        getMission();
    }, []);

    return (
        <>
            <button onClick={() => setMissionId(null)}>&times;</button>

            <h2>{missionData?.name}</h2>
            <p>{missionData?.year}</p>
            <div>MissionEditForm</div>
        </>
    );
};

export default MissionEditForm;
