import React, { useEffect, useState } from "react";

const PersonDetail = ({ agentId, setAgentId }) => {
    const getAgent = async () => {
        const respone = await fetch(`/people/${agentId}`);
        const data = respone.json();
        setAgentId(data);
        console.log(data);
    };

    useEffect(() => {
        getAgent();
    }, []);
    return <div>PersonDetail</div>;
};

export default PersonDetail;
