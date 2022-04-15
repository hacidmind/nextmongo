// import fetch from "isomorphic-unfetch";
// import { useState, useEffect } from 'react';
// import { useRouter } from 'next/router';

// const MyNote = ({ note }) => {
//     const [confirm, setConfirm] = useState(false);
//     const [isDeleting, setIsDeleting] = useState(false);
//     const router = useRouter();
    
//     return (
//         <div>
//             <h1>My Individual note</h1>
//             <h2>{note.title}</h2>
//             <p>{note.description}</p>
//         </div>
//     )
// }

// MyNote.getInitialProps = async ({query: {id}}) => {

//     const res = await fetch(`http://localhost:3000/api/notes/${id}`);
//     const { data } = await res.json();

//     return { note: data }

// }

// export default MyNote











import fetch from "isomorphic-unfetch";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const MyNote = ({ note }) => {
    const [confirm, setConfirm] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if (isDeleting) {
            deleteNote()
        }
    }, [isDeleting])

    const deleteNote = async () => {
        const noteId = router.query.id;
        try {
            const deleted = await fetch(`http://localhost:3000/api/notes/${noteId}`, {
                method: "Delete"
            });
            router.push("/")
        }catch(error){
            console.log(error)
        }
    }

    const handleDelete = async()=> {
    setIsDeleting(true)
    }

    return (
        <div className="container">
            <h1>My Individual note</h1>
            {isDeleting ?
                <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
                :
                <div>
                <h2>{note.title}</h2>
                <p>{note.description}</p>
                    <button className="btn btn-danger" onClick={handleDelete} >Delete </button>
                </div>
            }
            
           
        </div>
    )
}

MyNote.getInitialProps = async ({ query: { id } }) => {

    const res = await fetch(`http://localhost:3000/api/notes/${id}`);
    const { data } = await res.json();

    return { note: data }

}

export default MyNote