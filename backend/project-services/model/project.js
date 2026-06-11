import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    githubLink:{
        type: string,
        required: true
    },
    imageUrl:{
        type: string,
        required: true
    },
    name:{
        type: string,
        required: true
    },
    description:{
        type: string,
        required: true
    }
});

const Project = mongoose.model("Note", noteSchema);

export default Project;