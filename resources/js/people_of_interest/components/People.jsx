import { useEffect, useState } from "react";
import React from "react";
import PersonDetail from "./PersonDetail";
import StatusFilter from "./StatusFilter";

export default function People() {
    const [agents, setAgents] = useState(null);
    const [agentId, setAgentId] = useState(null);
    const [selectedStatus, setSelectedStatus] = useState("");

    console.log(selectedStatus);

    const loadAgents = async () => {
        try {
            const response = await fetch(
                `http://www.mi6.test/api/people?status=encodeURIComponent(${selectedStatus})`
            );
            const data = await response.json();
            // console.log(data);
            setAgents(data);
        } catch (error) {
            console.log(
                "uups, didnt go accoring to plan. Our agent dies.",
                error
            );
        }
    };

    useEffect(() => {
        loadAgents();
    }, [selectedStatus]);

    const handleId = (id) => {
        setAgentId(id);
    };
    const personDetail = <PersonDetail agentId={agentId} />;

    const agentsList = agents?.map((agent) => {
        return (
            <li key={agent.id}>
                {" "}
                <img
                    style={{ cursor: "pointer" }}
                    key={agent.id}
                    onClick={() => handleId(agent.id)}
                    src={`images/${agent.image.path}`}
                    alt="agent image"
                />
            </li>
        );
    });

    return (
        <>
            {agentId == null ? <ul> {agentsList} </ul> : personDetail}
            <StatusFilter
                selectedStatus={selectedStatus}
                setSelectedStatus={setSelectedStatus}
            />
        </>
    );
}
