import './styles/footerContentBlock.css'

const FooterContentBlock: React.FC = () => {
    return (
        <>
            <div className="footer-content-block">


            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#0099ff" fillOpacity={1} d="M0,256L30,261.3C60,267,120,277,180,261.3C240,
                245,300,203,360,186.7C420,171,480,181,540,170.7C600,160,660,128,720,128C780,128,840,
                160,900,186.7C960,213,1020,235,1080,218.7C1140,203,1200,149,1260,133.3C1320,117,1380,
                139,1410,149.3L1440,160L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,
                0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,
                0C120,0,60,0,30,0L0,0Z"></path></svg>
               

                <div className="footer-content-block-inner">

                

                <iframe width="560" height="315" 
                src="https://www.youtube.com/embed/b-PWrBu43tw" 
                title="YouTube video player" frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen></iframe>
                </div>
            </div>

        </>
    );
}

export default FooterContentBlock;