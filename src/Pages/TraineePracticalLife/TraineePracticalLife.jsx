import React, { useState, useEffect } from 'react';
import '../../styles/TraineePracticalLife/TraineePracticalLife.css';
import PracticalLifeImg from '../../assets/images/PracticalLifeImg.png';
import two_men_laptops from'../../assets/images/two_men_laptops.png';


const TraineePracticalLife = () => {
    return <>
    <div className='practical_life_section'>
        <div id='practical_life_container'>
            <div id='practical_life_title'>
                <h1>Vie pratique du stagiaire</h1>
            </div>
            <div id='practical_life_img'>
            <img src={PracticalLifeImg} id="students" alt="Deux étudiants un homme et une femme avec dossiers " />
            </div>
        </div>
        <div>
            <h2>Informations générales</h2>
        </div>
        <div>
            <ul>
                <li>Les horaires de votre formation vous sont communiqués via un planning qui
                vous est remis et disponible sur votre extranet HOP3TEAM. Celui-ci peut être
                sujet à modifications dont vous serez informé(e)s par votre formateur 
                référent.</li> 
                <li>La Responsable Campus est Laury BOSSAERT. Vous pouvez la joindre pour toute question 
                relative à votre formation, par téléphone au 06 07 69 23 21 ou par mail, 
                l’adresse laury.bossaert@foreach-academy.fr</li>
            </ul>
            <ul>
                <li>Une salle de formation dédiée et équipée est mise à la disposition des stagiaires ainsi 
                qu’une salle de restauration ou il est possible de prendre ses repas sur place, il est demandé 
                à chacun d’être responsable de cet espace de de veiller à la tenue en état de propreté du lieu.</li>
            </ul>
            <ul>
                <li>Comme stipulé dans le règlement intérieur, les stagiaires doivent être présents aux horaires de formation. 
                    En cas d’absence ou d’imprévu, il est impératif de prévenir dans les meilleurs délais pour que la bonne 
                    marche de l’organisme puisse continuer d’opérer. Le contrôle de l’assiduité des stagiaires est mené 
                    à bien tout au long des formations, par demi-journée, par le biais des feuilles d’émargement mais 
                    également par la veille exercée par le formateur sur la participation et dans certains cas, 
                    par une attestation d’entrée ou une attestation de fin de stage.</li>
                <li>L’organisme de formation peut, s’il l’estime nécessaire, ne pas autoriser la remise de l'attestation 
                    de formation. Cela peut être le cas si le stagiaire a été renvoyé temporairement, n'a pas été assidu 
                    ou a récidivé après des sanctions initiales (ex : absences fréquentes au cours des demi-journées, 
                    non-respect des horaires, non participation aux exercices de groupe…).
                </li>
            </ul>   
        </div>
        <div>
            <div>
                <img src={two_men_laptops} alt="deux ordinateurs portables avec personnes qui travaillent" />
            </div>
            <div></div>
        </div>
    </div>
</>
    }




export default TraineePracticalLife;


