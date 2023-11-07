import React, { useEffect,useState } from "react";

const StatusFilter = ({selectedStatus, setSelectedStatus}) => {

  const [statuses, setStatuses] = useState([]);

  const loadStatuses = async () => {
    const response = await fetch('http://www.mi6.test/api/statuses');
    const data = await response.json();
    setStatuses(data);
    console.log(data);

  }

  useEffect(()=>{
    loadStatuses()
  },[])

  console.log(statuses)


    return (<div className="status-filter">
      This is the status filter
      {statuses?.map((status,i)=>{
        return <button key={i} onClick={() => setSelectedStatus(status.id)}>{ status.name }</button>
      })

      }
      
      
      
      </div>)
};

export default StatusFilter;
