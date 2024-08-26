import React,{useEffect, useState} from "react";

function ModuleDetails(){
    const [modules, setModules] = useState([]);
    const [error, setError] = useState([null]);

    useEffect(() => {
        fetch('http://127.0.0.1:3000/Module/details')
         .then(response => {
            if(!response.ok) {
                throw new Error('There is no response');
            }
            return response.json()
         })
         .then(data => {
            console.log('Fetched data:', data); 
            setModules(data);
         })
         .catch(error => {
            setError('Error fetching data: ' + error.message);
});

        

    },[]);

    return(
        <>
            <div>
                <h1>Liste des Modules</h1>
            </div>

            {error && <p>{error}</p>}
            {Array.isArray (modules).length > 0 ?(
                <table>

                    <thead>
                        <tr>
                            <th>Modules</th>
                            <th>Type d'evaluation</th>
                            <th>Resultats</th>
                            <th>Promo</th>
                            <th>Commentaire</th>
                            <th>Date d'ajout</th>
                            <th>Date de modification</th>
                        </tr>
                    </thead>

                    <tbody>
                        {modules.map(module=>(
                    <tr key={module}>    
                        <td>{module.title}</td>
                        <td>{module.evaluation_type}</td>
                        <td>{module.result}</td>
                        <td>{module.promo}</td>
                        <td>{module.commentary}</td>
                        <td>{new Date(module.created_at).toLocaleString()}</td>
                        <td>{new Date(module.updated_at).toLocaleString()}</td>
                    </tr>

                        ))}
                    </tbody>

                </table>
            ) : (
                <p>Aucun module trouvé</p>
            )}
        </>
    )
};

export default ModuleDetails;

