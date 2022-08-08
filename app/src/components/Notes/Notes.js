import { useEffect, useState } from "react";
import  { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../config/firebase";


const Notes = () => {


const [notes, setNotes] = useState([])


    useEffect(()=> {

        const notesCollection = collection(db, 'notes');
        onSnapshot(notesCollection, (snapshot) => {
            setNotes( snapshot.docs.map(notes => {

                return {
                    ...notes.data()
                }
  
              }))
           
        })

    },[])


    return (
        <div>
            {notes.map(x=> <div>
                <p>{x.text}</p> 
                <p>{x.author}</p>
                </div>)}
        </div>
    )

}


export default Notes;