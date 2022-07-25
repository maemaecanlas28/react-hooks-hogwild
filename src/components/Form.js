import React, {useState} from "react";


function Form ({ hogs, setArrayHogs }) {

const [name, setName] = useState("Name")
const [image, setImage] = useState("Image")
const [specialty, setSpecialty] = useState("Specialty")
const [weight, setWeight] = useState("Weight")
const [greased, setGreased] = useState(false)
const [achievement, setAchievement] = useState("Achieved")

// const [formFields, setFormFields] = useState(
//     {
//         Name: "",
//         Image: "",
//         Specialty: "",
//         Weight: "",
//         Achievement: "",
//     }
// )

// function handleFormChange (event) {
//     const newFormValues = {
//         ...formFields, 
//         [event.target.name]: event.target.value,
//     }
//     setFormFields(newFormValues);
// }

function handleNameChange (event) {
    setName(event.target.value);
}

function handleImageChange (event) {
    setImage(event.target.value);
}

function handleSpecialtyChange (event) {
    setSpecialty(event.target.value);
}

function handleWeightChange (event) {
    setWeight(event.target.value);
}

function handleAchievementChange (event) {
    setAchievement(event.target.value);
}

function handleSubmit (event) {
    event.preventDefault();
    const formData = {
        name: name,
        specialty: specialty,
        greased: greased,
        weight: weight,
        "highest medal achieved": achievement,
        image: image,
    }
    const dataArray = [...hogs, formData];
    setArrayHogs(dataArray)
    setName("");
    setImage("");
    setSpecialty("");
    setWeight("");
    setGreased(false);
    setAchievement("");
}

    return (
    <form className="ui form" onSubmit={handleSubmit}>
        <div className="field">
            <label htmlFor="Name">Name:</label>
            <input 
                type="text" 
                name="Name" 
                placeholder="Name" 
                onChange={handleNameChange}
                value={name} />
        </div>
        <div className="field">
            <label htmlFor="Image">Image:</label>
            <input 
                type="text" 
                name="Image" 
                placeholder="URL" 
                onChange={handleImageChange}
                value={image} />
        </div>
        <div className="field">
            <label htmlFor="Specialty">Specialty</label>
            <input 
                type="text" 
                name="Specialty" 
                placeholder="What is the hogs specialty?"
                onChange={handleSpecialtyChange}
                value={specialty} />
        </div>
        <div className="field">
            <label htmlFor="Weight">Weight:</label>
            <input 
                type="text" 
                name="Weight" 
                placeholder="How chubby is the hog?" 
                onChange={handleWeightChange}
                value={weight} />
        </div>
        <div className="field">
            <label htmlFor="Greased">Is it greasy</label>
            <input 
                type="checkbox" 
                name="Greased"  
                onChange={() => setGreased(!greased)}
                checked={greased ? "checked" : ""} />
        </div>
        <div className="field">
            <label htmlFor="Achievement">Highest Medal Achieved:</label>
            <input 
                type="text" 
                name="Achievement" 
                placeholder="Please place achievement here." 
                onChange={handleAchievementChange}
                value={achievement}/>
        </div>
        <button className="ui button" type="submit">Submit</button>
    </form>
    )
}

export default Form 