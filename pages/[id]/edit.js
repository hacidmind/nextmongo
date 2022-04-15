
// import Link from 'next/link';
// import fetch from "isomorphic-unfetch";
// import { useRouter } from 'next/router';
// import { useForm } from "react-hook-form";

// const EditNote = ({note}) => {

//     const router = useRouter();
//     const { register, formState: { errors }, handleSubmit } = useForm();
//     const onSubmit = async (data) => {
//         console.log(data)
//         try {
//             const res = await fetch(`http://localhost:3000/api/notes/${router.query.id}`, {
//                 method: 'PUT',
//                 headers: {
//                     "Accept": "application/json",
//                     "Content-Type": "application/json"
//                 },
//                 body: JSON.stringify(data)
//             })
//             router.push("/")
//         } catch (error) {
//             console.log(error);
//         }
//     }



//     return (
//         <div className="container">
//             <h1>Update Note</h1>
//             <div>
//                 <form onSubmit={handleSubmit(onSubmit)}>
//                     <input label="Title" type="text" placeholder="Title" name="Title" className="form-control my-2" {...register("title", { required: true })} value={note.title} />
//                     {errors.title && <p>Please enter a title</p>}
//                     <textarea label="Description" placeholder="Description" name="Description" className="form-control my-2" rows="10" {...register("description", { required: true })} value={note.description} />
//                     {errors.description && <p>Please enter a description</p>}
//                     <div className="d-grid gap-2">

//                         <button className="btn btn-success my-2" type="submit">Update</button>
//                     </div>
//                 </form>

//             </div>
//         </div>
//     )
// }

// EditNote.getInitialProps = async ({ query: { id } }) => {

//     const res = await fetch(`http://localhost:3000/api/notes/${id}`);
//     const { data } = await res.json();

//     return { note: data }
// }


// export default EditNote









































































// import Link from 'next/link';
// import { useState, useEffect } from 'react';
// import fetch from "isomorphic-unfetch";
// import { useRouter } from 'next/router';
// // import { useForm } from "react-hook-form";

// const EditNote = ({ note}) => {
//     const [form, setForm] = useState({ title: note.title, description: note.description })

//     const [isSubmitting, setIsSubmitting] = useState(false);
//     const [errors, setErrors] = useState({});
//     const router = useRouter();


//     useEffect(() => {
//         if (isSubmitting) {
//             if (Object.keys(errors).length === 0) {
//                 updateNote(); //we will connect to our POST REQUEST SOON
//                 alert('success')
//             } else {
//                 setIsSubmitting(false);
//             }
//         }
//     }, [errors])

//         const updateNote = async () => {
//         try {
//             const res = await fetch(`http://localhost:3000/api/notes/${router.query.id}`, {
//                 method: 'PUT',
//                 headers: {
//                     "Accept": "application/json",
//                     "Content-Type": "application/json"
//                 },
//                 body: JSON.stringify(form)
//             })
//             router.push("/")
//         } catch (error) {
//             console.log(error);
//         }
//     }

//     const handleChange = (e) => {
//         setForm({
//             ...form,
//             [e.target.name]: e.target.value
//         })
//     }

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         let errs = validate();
//         setErrors(errs);
//         setIsSubmitting(true)
//     }

//     // To validate our form
//     const validate = () => {
//         let err = {};
//         if (!form.title) {
//             err.title = "Title is required";
//         }
//         if (!form.description) {
//             err.description = "Description is required";

//             return err;
//         }
//     }

//     return (
//         <div className="container">
//             <h1>Update Note</h1>
//             <div>
//                 {isSubmitting
//                     ? <div className="spinner-border" role="status">
//                         <span className="visually-hidden">Loading...</span>
//                     </div>
//                     : <form onSubmit={handleSubmit}>
//                         <input label="Title" type="text" placeholder="Title" onChange={handleChange} name="Title" className="form-control my-2" error={errors.title ? { content: 'Please enter a title' } : null} required value={form.title} />

//                         <textarea label="Description" placeholder="Description" onChange={handleChange} name="Description" className="form-control my-2" rows="10" error={errors.description ? { content: 'Please enter a Description' } : null} required value={form.description} />
//                     <div className="d-grid gap-2">

//                         <button className="btn btn-success my-2" type="submit">Update</button>
//                     </div>
//                 </form>
//                 }
//             </div>
//         </div>
//     )
// }

// EditNote.getInitialProps = async ({query:{id}}) => {
//     const res = await fetch(`http://localhost:3000/api/notes/${id}`)
//     const { data } = await res.json()
    
//     return { note: data}
// }

// export default EditNote



















































import Link from 'next/link';
import fetch from "isomorphic-unfetch";
import { useRouter } from 'next/router';
import { useForm } from "react-hook-form";

const NewNote = () => {

    const router = useRouter();
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = async (data) => {
        console.log(data)
        try {
            const res = await fetch('http://localhost:3000/api/notes', {
                method: 'POST',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
            router.push("/")
        } catch (error) {
            console.log(error);
        }
    }






    return (
        <div className="container">
            <h1>Update Note</h1>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input label="Title" type="text" placeholder="Title" name="Title" className="form-control my-2" {...register("title", { required: true })} />
                    {errors.title && <p>Please enter a title</p>}
                    <textarea label="Description" placeholder="Description" name="Description" className="form-control my-2" rows="10" {...register("description", { required: true })} />
                    {errors.description && <p>Please enter a description</p>}
                    <div className="d-grid gap-2">

                        <button className="btn btn-success my-2" type="submit">Update</button>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default NewNote
