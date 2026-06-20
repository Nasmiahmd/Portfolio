import Project from "../model/project.js"

export const getAllProjects = async(req, res) => {
    try {
        const projects = await Project.find();
        res.status(200).json(projects)
    } catch (error) {
        console.log("Error in getAllProjects Controller", error);
        res.status(500).json({message: "Internal server error"});
    }
}