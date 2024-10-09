import React, { useState, useEffect } from 'react';
import FormationServices from '../../Services/FormationServices';
import { useParams, useNavigate } from 'react-router-dom'; 
import "../../styles/LivretPage/LivretPage.css";
import UserServices from '../../Services/UserServices';

function LivretPage() {
  const [modules, setModules] = useState([]);
  const [moduleId, setModuleId] = useState(25);
  const { formationId } = useParams(); 
  const [students, setStudents] = useState([]);
  const [formationName, setFormationName] = useState('');
  const [selectedYear, setSelectedYear] = useState("Première année"); 
  const [dynamicFormationId, setDynamicFormationId] = useState(formationId); 
  const [showYearDropdown, setShowYearDropdown] = useState(false); 
  const [search, setSearch] = useState('');
  const navigate = useNavigate(); 
  const formateurId = UserServices.getUserId();

  const fetchModule = async () => {
    const response = await FormationServices.getModulesByFormationId(dynamicFormationId);
    setModules(response.data.modules);
  };

  const fetchStudents = async () => {
    const response = await FormationServices.getStudentsEvaluationsByFormationAndModule(dynamicFormationId, moduleId);
    setFormationName(response.data.title);
    setStudents(response.data.apprenants);
  };

  const handleChange = (event) => {
    const selectedModuleId = Number(event.target.value);
    setModuleId(selectedModuleId);
  };

  const handleYearChange = (event) => {
    const selectedYear = event.target.value;
    setSelectedYear(selectedYear);
    const newFormationId = selectedYear === "Première année" ? 2 : 4;
    setDynamicFormationId(newFormationId);
    navigate(`/${newFormationId}/concepteur-developpeur-application`);
  };

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const removeAccent = (string) => {
    return string.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  };

  const searchedStudents = students.filter((student) => {
    const firstName = removeAccent(student.first_name).toLowerCase();
    const lastName = removeAccent(student.surname).toLowerCase();
    const searchText = removeAccent(search).toLowerCase();
    return firstName.includes(searchText) || lastName.includes(searchText);
  });

  const studentsNotEvaluated = students.filter((student) => !student.evaluation || student.evaluation.length === 0).length;
  const selectedModule = modules.find((module) => module.id === moduleId);

  useEffect(() => {
    fetchModule();
    fetchStudents();
  }, [dynamicFormationId, moduleId]);

  useEffect(() => {
    if (formationId === '2' || formationId === '4') {
      setShowYearDropdown(true);
    } else {
      setShowYearDropdown(false); 
    }
  }, [formationId]);

  return (
    <div className='formation-container'>
      <h1>{formationName}</h1>
      <div className='formation-filter-container'>
        <div className='formation-filter'>
          <label htmlFor="module">Module :</label>
          <select name="module" id="module" onChange={handleChange}>
            {modules.map((module) => (
              <option key={module.id} value={module.id}>{module.title}</option>
            ))}
          </select>
        </div>
        {showYearDropdown && (
          <div className='formation-filter'>
            <label htmlFor="year">Année :</label>
            <select name="year" id="year" onChange={handleYearChange} value={selectedYear}>
              <option value="Première année">Première année</option>
              <option value="Deuxième année">Deuxième année</option>
            </select>
          </div>
        )}
        <div className='formation-filter'>
          <label htmlFor="search">Étudiant :</label>
          <div className="search-container">
            <input type="search" name="search" id="search" placeholder="Nom de l'étudiant" onChange={handleSearch} />
            <span className="material-icons-outlined">search</span>
          </div>
        </div>
      </div>

      <div>
        <h2><span className='badge-primary'>{studentsNotEvaluated}</span> évaluations à compléter</h2>
      </div>

      <div>
        <table>
          <thead>
            <tr>
              <th>Étudiant</th>
              <th>Entreprise</th>
              <th>Livrets de suivi</th>
            </tr>
          </thead>
          <tbody>
            {searchedStudents.map((student) => (
              <tr key={student.id}>
                <td>{student.first_name} {student.surname}</td>
                <td>{student.company}</td>
                <td>
                  {selectedModule && selectedModule.formateur_id === formateurId ? (
                    student.evaluation && student.evaluation.length > 0 ?
                      <a href="/livret">Voir le livret</a>
                      : <button className='primary-button'>Ajouter une évaluation</button>
                  ) : (
                    student.evaluation && student.evaluation.length > 0 ?
                      <a href="/livret">Voir le livret</a>
                      : <span>Pas de livret disponible</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default LivretPage;
