import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Legacy.module.css'

function LegacyPage() {
    return (
            <html lang="en">
            <Head>
                <title>Coming Soon</title>
                <meta name="title" content="VLNX Portfolio Website"></meta>
                <meta name="description" content="This website is created to showcase my past works and achievements, especially in the frontend and graphic design sector."></meta>

                <link rel="shortcut icon" href="pictures/favicon.png" type="image/x-icon"></link>
                <meta charset="UTF-8"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            </Head>
            <body className={styles.mainbody}>

                <nav className={styles.topnav}>
                    <div className={styles.topnavlist}>
                        <a href="#" className={styles.navcontent}>
                            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                        </a>
                    </div>
                    
                    <div className={styles.topnavlist}>
                        <div className={styles.navcontentactive}><a href="index.html">Home</a></div>
                        <div className={styles.navcontent}><a className={styles.alink} href="porto.html">Portfolio</a></div>
                        <div className={styles.navcontent}><a className={styles.alink} href="https://www.instagram.com/st.ndar/">Contact</a></div>
                    </div>
                </nav>

                <div className={styles.comingsoon}>
                        <div>
                            <h1>Coming Soon</h1>
                        </div>
                        <div>
                            Be ready for a minimalistic design approach in websites.
                        </div>
                        <div className={styles.comingsooncontent}>
                            <div className={styles.comingsoonimg}></div>
                            <div className={styles.comingsoonimgtext}>
                                <h3>The Sunset Harbour</h3>
                                <p className={styles.par}>Sitting down in the docks on a peaceful sunset,</p>
                                <p className={styles.par}>watching the birds fly and the waves calmly move.</p>
                                <p className={styles.par}>I always wanted to enjoy such peace and serenity,</p>
                                <p className={styles.par}>but the chance never came, thus why I created this.</p>
                            </div>
                        </div>
                    
                </div>

                <div className={styles.credit}>
                    <h5>Current build 2.11.20</h5>
                    <p className={styles.par}>Created by: Stefanus Ndaru Wedhatama</p>
                </div>
                

            </body>
            </html>
    )
  }
  
  export default LegacyPage