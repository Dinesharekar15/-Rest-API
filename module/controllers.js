// import student from './models/student.js';

async function saveuser(req, res) {

    
    const stud=new student({
        name:"Rahul",
        rollno:1,
        catagory:"open"
    })
    stud.save();
    res.send(stud)
    console.log("success")
}

export { saveuser };