import { useEffect, useState } from "react";
import  { collection, addDoc, onSnapshot, query, orderBy } from "firebase/firestore";
import { db } from "../../config/firebase";


const Notes = () => {


const [notes, setNotes] = useState([])
const [inputText, setText] = useState("")
const [inputAuthor, setAuthor] = useState("")

    useEffect(()=> {

        const notesCollection = query(collection(db, 'notes'), orderBy("query","asc"));
        onSnapshot(notesCollection, (snapshot) => {
            setNotes( snapshot.docs.map(notes => {

                return {
                    id: notes.id,
                    ...notes.data()
                }
  
              }))
           
        })

    },[])

const textHandler = (event) => {setText(event.target.value)}
const authorHandler = (event) => {setAuthor(event.target.value)}
const formHandler = (event) =>{event.preventDefault()
addDoc(collection(db,'notes'), {
    text: inputText,
    author: inputAuthor,
    query:9
})
}
    return (
        <div>
            {notes.map(notes=>
                <div key={notes.id}>
                <p>{notes.text}</p> 
                <p>{notes.author}</p>
                </div>)}

                <form onSubmit={formHandler}>
                Text : <input onChange={textHandler} name="text" value={inputText}></input>
                Author : <input onChange={authorHandler} name="author" value={inputAuthor}></input>
                
                <br/>
                <button type="submit">Test</button>
                </form>
        </div>
    )

}


export default Notes;