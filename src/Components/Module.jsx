import React,{useEffect, useState} from "react";

function Modules(){
    const [modules, setModules] = useState([]);
    const [error, setError] = useState([null]);

    useEffect(() => {
        fetch('http://127.0.0.1:3000/Module')
         .then(response => {
            if(!response.ok) {
                throw new Error('There is no response');
            }
            return response.json()
         })
         .then(data => {
            setModules(data);
         })
         .catch(error =>{
            setError({error:'Error of fetching', error});
         })
        

    },[]);

    return(
        <>
            <div>
                <h1>Liste des Modules</h1>
            </div>

            {error && <p>{error}</p>}
            {modules.length > 0 ?(
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
                        {modules.map(module =>(
                    <>      
                        <tr>{module.title}</tr>
                        <tr>{module.evaluation_type}</tr>
                        <tr>{module.result}</tr>
                        <tr>{module.promo}</tr>
                        <tr>{module.commentary}</tr>
                        <tr>{new Date(module.created_at).toLocaleString()}</tr>
                        <tr>{new Date(module.updated_at).toLocaleString}</tr>
                    </>
                        ))}
                    </tbody>

                </table>
            ) : (
                <p>Aucun module trouvé</p>
            )}
        </>
    )
};

export default Modules;

