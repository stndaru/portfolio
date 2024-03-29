import Image from 'next/image'

function LegacyPage() {
    return (
        <html lang="en">
        <head>
            <title>VLNX Portfolio Website</title>
            <meta name="title" content="VLNX Portfolio Website"></meta>
            <meta name="description" content="This website is created to showcase my past works and achievements, especially in the frontend and graphic design sector."></meta>
        
            <link rel="shortcut icon" href="pictures/favicon.png" type="image/x-icon"></link>
            <meta charset="UTF-8"></meta>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            <link rel="stylesheet" href='../styles/style.css'></link>
        </head>
        <body>
        
            <nav class="topnav">
                <div class="topnav-list">
                    <a href="#" class="navcontent">
                        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                    </a>
                </div>
                
                <div class="topnav-list">
                    <div class="navcontent"><a href="index.html">Home</a></div>
                    <div class="navcontent-active"><a href="porto.html">Portfolio</a></div>
                    <div class="navcontent"><a href="https://www.instagram.com/st.ndar/">Contact</a></div>
                </div>
            </nav>
        
            <div class="main-content">
                <div>
                    <h1>My Portfolio</h1>
                </div>
                <div class="main-content-text">
                    <p>These are my works of art after 4 years of experience in graphic design.</p>
                    <p>Website is still under construction, expect some issues.</p>
                </div>
        
                <div class="main-content-img">
                    <div class="main-content-text">
                        <h2>Arts</h2>
                    </div>
                    <div>
                        <img src="pictures/nationalmonument.jpg" alt="National Monument"></img>
                        <img src="pictures/jakartakota.jpg" alt="Jakarta Kota"></img>
                        <img src="pictures/wisma46.jpg" alt="Wisma 46"></img>
                    </div>
        
                    <div class="main-content-text">
                        <h2>Infographics</h2>
                    </div>
                    <div>
                        <img src="pictures/covidinfographic.jpg" alt="COVID Infographic"></img>
                        <img src="pictures/pkkmbinfographic.jpg" alt="PKKMB Infographic"></img>
                        <img src="pictures/koleseinfographic.jpg" alt="Kolese Infographic"></img>
                    </div>
        
                    <div class="main-content-text">
                        <h2>Instagram Stories</h2>
                        <p>This section is still under consideration.</p>
                        <p>Might get updated or removed in the future.</p>
                    </div>
                    <div class="accord-wrap">
                        <div class="img-accord">
                            <div class="img img1"></div>
                            <div class="img img2"></div>
                            <div class="img img3"></div>
                            <div class="img img4"></div>
                            <div class="img img5"></div>
                        </div>
                    </div>
                </div>
        
            </div>
            
        
            <div class="credit">
                <h5>Current build 2.11.20</h5>
                <p style="font-size: 12px">Created by: Stefanus Ndaru Wedhatama</p>
            </div>
        
        </body>
        </html>
    )
  }
  
  export default LegacyPage