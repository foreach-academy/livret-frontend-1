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
    
        const extractDate = (dateString) => {
        // Extraire uniquement la date au format YYYY-MM-DD
        return dateString.split('T')[0];
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
                                    <td>{extractDate(module.end_date)}</td>
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