// // import Link from 'next/link';

// export const getStaticPaths = async () => {
//     // we will make api request before it get rendered in the page (reason its an async function)
//     // we will send our data as props in the main function
//     const res = await fetch('http://localhost:3000/api/notes');
//     const { data } = await res.json();
//     const paths = data.map(note => {
//         return {
//             params: {
//                 id: note.id.toString()
//             }
//         }
//     })

//     return {
//         paths,
//         fallback: false
//     }
// }


// export const getStaticProps = async (context) => {

//     const id = context.params.id
//     const res = await fetch(`http://localhost:3000/api/notes/${id}`);
//     const { data } = await res.json();

//     return {
//         props: { notes: data }
//     }
// }


// const MyNote = ({notes}) => {
//     return (
//         <div>
//             <h1>My Individual note</h1>
//             <h2>{notes.title}</h2>
//             <p>{notes.description}</p>
//         </div>
//     )
// }

// export default MyNote