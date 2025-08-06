import Learn from "./learn";

export default function Lesson({}){
    const person= {
    name:'Rob',
     message:"world",
     numberArr: [1,2,3,4]

    }
    return <div>
     <Learn  person ={person}/>
    </div>
}