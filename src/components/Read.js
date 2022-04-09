import React, { useEffect, useState } from "react";
import axios from "axios";

const Read = () => {

    const [record, setRecord] = useState([])

    const getAllData = () => {
        axios.get('http://localhost:5000/placement/')
            .then((response) => {
                console.log(response.data.articles)
                const allData = response.data
                setRecord(allData)

            })
    }

    useEffect(() => {
        getAllData()
    }, [])


    return (
        <div>
            {record.map((rec) => {
                <div className="article" key={rec.key}>
                    <h3>{rec.name}</h3>
                    <h3>{rec.email}</h3>
                    <h3>{rec.company_name}</h3>
                    <h3>{rec.position}</h3>
                    <h3>{rec.experience}</h3>
                </div>
            })

            }
        </div>
    )
}

export default Read