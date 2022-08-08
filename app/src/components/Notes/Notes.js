import { useEffect, useState } from "react";
import  { collection, addDoc, onSnapshot, query, orderBy } from "firebase/firestore";
import { db } from "../../config/firebase";
import "./notes.css"

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
    const dt = new Date()
addDoc(collection(db,'notes'), {
    text: inputText,
    author: inputAuthor,
    date: dt.getDate() + "/" + (dt.getMonth() + 1) + "/" + dt.getFullYear(),
    query:9
})
}
    return (
        <>
            {notes.map(notes=>
                <div key={notes.id} className="notes-card">
                    <div className="note-text">
                <p>{notes.text}</p> 
                    </div>
                    <div className="card-footer">
                        <div className="note-author">
                <p>@{notes.author} {notes.date}</p>
                
                
                        </div>
                    </div>
                </div>)}
                <div className="notes-card form">

                <form onSubmit={formHandler}>
                    <div>

                Your Mark <textarea onChange={textHandler} className="text-input" required name="text" maxLength="850" minLength="10" value={inputText}></textarea>
                    </div>
                    <div>

                Author : <input onChange={authorHandler} className="author-input" required name="author" maxLength="20" value={inputAuthor}></input>
                    </div>
                
                <br/>
                <button className="submit-btn" type="submit">Leave a mark to the Internet</button>
                </form>
                </div>
        </>
    )

}


export default Notes;