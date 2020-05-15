import React from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.id;
    return (
        <div className="container section project-details">
            <div className="z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project title {id}</span>
                    <p>details of the project xxx ppppp details :: here  :p </p>
                </div>
                <div className="card-action gret lightn-4 grey-text">
                <div>Posted by the turtle</div>
                <div>12th, Mai, 11am</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails