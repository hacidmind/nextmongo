import Head from 'next/head'
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch'

const Home = ({notes}) =>{
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="notes-container">
        <h1>Notes</h1>

        <div className="grid wrapper">
          {
            notes.map(note => {
              return (
                <div key={note._id} className='container-fluid'>

                  <div className={styles.cardstyle}>
                    <div className="card m-3" >
                      <div className="card-body">
                        <h5 className="card-title">{note.title}</h5>

                        <Link href={`/${note._id}`}>
                          <a className="card-link">View</a>
                        </Link>
                        <Link href={`/${note._id}/edit`}>
                          <a className="card-link">Edit</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

Home.getInitialProps = async () => {
  // we will make api request before it get rendered in the page (reason its an async function)
  // we will send our data as props in the main function
  const res = await fetch('http://localhost:3000/api/notes');
  const { data } = await res.json();

  return { notes: data }
}

export default Home;
