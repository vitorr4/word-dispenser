import Head from 'next/head'
import styles from '../styles/Home.module.css'

const list = require('../lib/csvjson.json')
let words = ["", ""]

export default function Home() {
  const getWords = () => {
    var number = parseInt(Math.floor(Math.random() * 100))
    words[0] = list[number]['verbs']
    document.getElementById('verb').innerHTML = words[0]
    number = parseInt(Math.floor(Math.random() * 100))
    words[1] = list[number]['nouns']
    document.getElementById('noun').innerHTML = words[1]
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Word Dispenser</title>
        <link rel="icon" href="/favicon.ico" />
        <meta httpEquiv="Content-Type" content="text/html" charSet="UTF-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name='description' content='A language learning website to practice your German writing.' />
      </Head>

      <main className={styles.main}>
        <div className={styles.head}>
          <div>
          <h1 className={styles.title}>
            Word Dispenser
          </h1>
          <h2>Practice your German writing.</h2>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 150"><path fill="#0099ff" fillOpacity="1" d="M0,128L80,122.7C160,117,320,107,480,112C640,117,800,139,960,144C1120,149,1280,139,1360,133.3L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
        </div>

        <section className={styles.description} id='top'>
        <p><span>Practice</span> is the best way to create <span>real connections</span> with the content you want to learn, that also applies to <span>language learning</span>.</p>
          <p>This site will help you to practice the 100 most used verbs and nouns in German. Each time you click the button, a new verb and a noun will appear. Your task is make up a sentence containing those two words.</p>
        </section>

        <section>
        <div className={styles.wordBox} id='random_words'>
          <div className={styles.row}><p><b>Verb: </b></p><p id='verb'>machen</p></div>
          <div className={styles.row}><p><b>Noun: </b></p><p id='noun'>Das Kuchen ~ Die Kuchen</p></div>
        </div>
        <button className={styles.btn} onClick={() => getWords()}>Sort!</button>
        </section>

        <section className={styles.description} id='bottom'>
          <h4>Example:</h4>
          <div id='examples'>
            <p><span><b>Verb: </b></span>meinen</p>
            <p><span><b>Noun: </b></span>Die Geschichte ~ Die Geschichten</p>
            <p><span><b>Possible sentence: </b></span>Was meinen Sie mit dieser Geschichte?</p>
          </div>
          <h4>References: </h4>
          <div id='references'>
            <p><span><b><a href='https://www.thegermanprofessor.com/top-100-german-verbs/' target='_blank'>Top 100 most used verbs</a></b> by The German Professor</span></p>
            <p><span><b><a href='http://frequencylists.blogspot.com/2016/01/the-2980-most-frequently-used-german.html' target='_blank'>Top 100 most used nouns</a></b> by Neri</span></p>
          </div>
          <p>This website was created by Vítor Tomé.</p>
          <p>Any questions and feedback can be sent to <a href = "mailto: vrodriguestome@gmail.com">vrodriguestome@gmail.com</a>. I will respond promptly. ;)</p>
        </section>
      </main>
    </div>
  )
}
