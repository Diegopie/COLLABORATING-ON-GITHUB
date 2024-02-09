import './BlackPage.css'

export default function BlackPage () {

  return(
    <main className="BlackPage">
      <section className='BlackPage-Card-Container'>
      <article className='BlackPage-Card'>
        <img className="BlackPage-Card-Img" src="https://picsum.photos/200" alt="Jessica Randall is an experienced web developer from London England" />
        <h2 className='BlackPage-Card-Title'>Jessica Randall</h2>
        <h3>London, United Kingdom</h3>
        <p>&quot;Front-end developer and avid reader.&quot;</p>
        <button>Github</button>


      </article>
      
      </section>
    </main>
  )
}