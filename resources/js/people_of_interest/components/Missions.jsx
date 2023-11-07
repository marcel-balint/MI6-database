import { useEffect, useState } from "react";
import React from "react";
import MissionEditForm from "./MissionEditForm";

export default function Missions() {
    const [missions, setMissions] = useState(null);
    const [missionId, setMissionId] = useState(null);
    console.log(missionId);

    const loadMission = async () => {
        try {
            const response = await fetch("http://www.mi6.test/api/missions");
            const data = await response.json();

            // console.log(data);
            setMissions(data);
        } catch (error) {
            console.log(
                "uups, didnt go accoring to plan. Our agent dies.",
                error
            );
        }
    };

    useEffect(() => {
        loadMission();
    }, []);

    return (
        <>
            {missionId ? (
                <MissionEditForm
                    missionId={missionId}
                    setMissionId={setMissionId}
                />
            ) : (
                <>
                    <h2>Missions</h2>
                    {missions?.map((mission, i) => {
                        return (
                            <ul style={{ padding: 0 }} key={i}>
                                <li
                                    style={{ cursor: "pointer" }}
                                    onClick={() => setMissionId(mission.id)}
                                >
                                    {mission.name} {mission.year}
                                </li>
                            </ul>
                        );
                    })}
                </>
            )}
        </>
    );
}
