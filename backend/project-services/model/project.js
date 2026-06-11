import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    githubLink:{
        type: String,
        required: true
    },
    imageUrl:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    }
});

const Project = mongoose.model("Project", projectSchema);

export default Project;