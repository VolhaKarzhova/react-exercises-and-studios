import data from './../data.json';
import { useState } from 'react';

export default function MyProjects() {
    const [index, setIndex] = useState(0);

    function handleClick() {
        index < data.projects.length-1 ? setIndex(index + 1) : setIndex(0);
    }

    let projects = data.projects;
    let project = projects[index];
  
    return (
      <div>
        <button onClick={handleClick}>Next</button>
        <h2>{project.name} by {project.manufacturer} on {project.canvas}</h2>
        <img src={project.photoUrl} alt={project.name} />
      </div>
    );
}