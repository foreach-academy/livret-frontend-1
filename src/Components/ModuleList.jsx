import React, {useState, useEffect} from "react";

function ModuleList(){
    const[moduleList, setModuleList] = useState([]);
    const[error, setError] = useState([null]);

    useEffect(() =>{
        fetch('http://127.0.0.1:3000/Module')
        .then(response =>{
            if(!response.ok) {
                throw new Error('There is no response');
            }
            return response.json()
        })
        .then(data => {
            console.log('Fetched data:', data); 
            setModuleList(data);
         })
         .catch(error =>{
            setError('Error fetching dat', error)
         })
    }, []);
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();

        return `${day}/${month}/${year}`;
    };
    return(
        <>
            <div>
                <h1>List des modules</h1>
            </div>

            <div>
                {error && <p>{error}</p>}
                {moduleList.length > 0 ?(
                    <table>
                        <thead>
                            <tr>
                                <th>Module</th>
                                <th>Date de fin</th>
                            </tr>
                        </thead>

                        <tbody>
                            {moduleList.map(module =>(
                                <tr key={module}>
                                    <td>{module.title}</td>
                                    <td>{formatDate(module.end_date)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p> Aucune liste de module trouvé</p>
                )}
            </div>
        
        </>
    )
};

export default ModuleList;