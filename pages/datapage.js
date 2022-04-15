// import Link from 'next/link';

// export const getStaticProps = async () => {

//     const res = await fetch('http://localhost:3000/api/notes');
//     const { data } = await res.json();

//     return {
//         props: { notes: data }
//     } 
// }

// const Home = ({ notes }) => {
//     return (
//         <div className='container'>
            
//             <div className="notes-container">
//                 <h1>Data Page</h1>

//                 <div className="grid wrapper">
//                     {
//                         notes.map(note => {
//                             return (
//                                 <div key={note._id} className='container-fluid'>

//                                     <div className="cardstyle">
//                                         <div className="card m-3" >
//                                             <div className="card-body">
//                                                 <h5 className="card-title">{note.title}</h5>

//                                                 <Link href={`/${note._id}`}>
//                                                     <a className="card-link">View</a>
//                                                 </Link>
//                                                 <Link href={`/${note._id}/edit`}>
//                                                     <a className="card-link">Edit</a>
//                                                 </Link>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             )
//                         })
//                     }
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Home