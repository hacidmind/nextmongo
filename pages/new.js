// import Link from 'next/link';
// import { useState, useEffect } from 'react';
// import fetch from "isomorphic-unfetch";
// import { useRouter } from 'next/router';

// const NewNote = () => {
//     const [form, setForm] = useState({ title: '', description: "" })

//     const [isSubmitting, setIsSubmitting] = useState(false);
//     const [errors, setErrors] = useState({});
//     const router = useRouter();

//     useEffect(() => {
//         if (isSubmitting) {
//             if (Object.keys(errors).length === 0) {
//                 // createNote();
//                 alert('success')
//             } else {
//                 setIsSubmitting(false);
//             }
//         }
//     }, [errors])

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         setSubmit(true)
//         let errs = validate();
//         setErrors(errs);
//         setIsSubmitting(true)
//     }
//     const handleChange = (e) => {
//         setForm({
//             ...form,
//             [e.target.name]: e.target.value
//         })
//     }

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
//             <h1>Create Note</h1>
//             <div>
//                 {isSubmitting ? <div className="spinner-grow" role="status">
//                     <span className="visually-hidden">Loading...</span>
//                 </div> : <form onSubmit={handleSubmit}>
//                     <input label="Title" type="text" placeholder="Title" onChange={handleChange} name="Title" className="form-control my-2" error={errors.title ? { content: 'Please enter a title' } : null} />
//                     <textarea label="Description" placeholder="Description" onChange={handleChange} name="Description" className="form-control my-2" rows="10" error={errors.description ? { content: 'Please enter a Description' } : null} />
//                     <div className="d-grid gap-2">

//                         <button className="btn btn-success my-2" type="submit">Create</button>
//                     </div>
//                 </form>
//                 }
//             </div>
//         </div>
//     )
// }

// export default NewNote













































// import Link from 'next/link';
// import { useState, useEffect } from 'react';
// import fetch from "isomorphic-unfetch";
// import { useRouter } from 'next/router';
// // import { useForm } from "react-hook-form";

// const NewNote = () => {
//     const [form, setForm] = useState({ title: '', description: "" })

//     const [isSubmitting, setIsSubmitting] = useState(false);
//     const [errors, setErrors] = useState({});
//     const router = useRouter();


//     useEffect(() => {
//         if (isSubmitting) {
//             if (Object.keys(errors).length === 0) {
//                 createNote(); //we will connect to our POST REQUEST SOON
//                 alert('success')
//             } else {
//                 setIsSubmitting(false);
//             }
//         }
//     }, [errors])

//         const createNote = async () => {
//         try {
//             const res = await fetch('http://localhost:3000/api/notes', {
//                 method: 'POST',
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
//             <h1>Create Note</h1>
//             <div>
//                 {isSubmitting
//                     ? <div className="spinner-border" role="status">
//                         <span className="visually-hidden">Loading...</span>
//                     </div>
//                     : <form onSubmit={handleSubmit}>
//                         <input label="Title" type="text" placeholder="Title" onChange={handleChange} name="Title" className="form-control my-2" error={errors.title ? { content: 'Please enter a title' } : null} required />

//                     <textarea label="Description" placeholder="Description" onChange={handleChange} name="Description" className="form-control my-2" rows="10" error={errors.description ? { content: 'Please enter a Description' } : null} required />
//                     <div className="d-grid gap-2">

//                         <button className="btn btn-success my-2" type="submit">Create</button>
//                     </div>
//                 </form>
//                 }
//             </div>
//         </div>
//     )
// }

// export default NewNote












































// import Link from 'next/link';
// // import { useState, useEffect } from 'react';
// import fetch from "isomorphic-unfetch";
// import { useRouter } from 'next/router';
// import { useForm } from "react-hook-form";

// const NewNote = () => {
//     // const [form, setForm] = useState({ title: '', description: "" })

//     // const [isSubmitting, setIsSubmitting] = useState(false);
//     // const [errors, setErrors] = useState({});
//     const router = useRouter();
//     const { register, formState: { errors }, handleSubmit } = useForm();
//     const onSubmit = async(data) => {
//         console.log(data);
//         // createNote()

//         try {
//             const res = await fetch('http://localhost:3000/api/notes', {
//                 method: 'POST',
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
//             <h1>Create Note</h1>
//             <div>
//                 <form onSubmit={handleSubmit(onSubmit)}>
//                     <input label="Title" type="text" placeholder="Title" name="Title" className="form-control my-2" {...register("title", { required: true })} />
//                         {errors.title && <p>Please enter a title</p>}
//                     <textarea label="Description" placeholder="Description" name="Description" className="form-control my-2" rows="10" {...register("description", { required: true })} />
//                     {errors.description && <p>Please enter a description</p>}

//                     <div className="d-grid gap-2">

//                         <button className="btn btn-success my-2" type="submit">Create</button>
//                     </div>
//                 </form>

//             </div>
//         </div>
//     )
// }

// export default NewNote

















































































import Link from 'next/link';
import fetch from "isomorphic-unfetch";
import { useRouter } from 'next/router';
import { useForm } from "react-hook-form";

const NewNote = () => {

    const router = useRouter();
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = async(data) => {
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
            <h1>Create Note</h1>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input label="Title" type="text" placeholder="Title" name="Title" className="form-control my-2" {...register("title", { required: true })} />
                    {errors.title && <p>Please enter a title</p>}
                    <textarea label="Description" placeholder="Description" name="Description" className="form-control my-2" rows="10" {...register("description", { required: true, max: 50000 })} />
                    {errors.description && <p>Please enter a description</p>}
                    <div className="d-grid gap-2">

                        <button className="btn btn-success my-2" type="submit">Create</button>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default NewNote
