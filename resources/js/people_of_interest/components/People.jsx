import { useEffect, useState } from "react";
import React from "react";
import PersonDetail from "./PersonDetail";

export default function People() {
    const [agents, setAgents] = useState(null);
    const [agentId, setAgentId] = useState(null);

    const loadAgents = async () => {
        try {
            const response = await fetch("http://www.mi6.test/api/people");
            const data = await response.json();
            console.log(data);
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
    }, []);

    const agentsList = agents?.map((agent) => {
        return agent.id !== null ? (
            <li key={agent.id}>
                <img src={`images/${agent.image.path}`} alt="agent image" />
            </li>
        ) : (
            <PersonDetail agentId={agentId} setAgentId={setAgentId} />
        );
    });
    return <>{agentsList}</>;
}
