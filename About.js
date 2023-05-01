import React, {Component} from 'react';

class About extends Component {
  render(){
    return(

      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
        <div className="w-100">
          <h1 className="mb-0 text-primary">Gitali
            <span className="text-primary">  Rakshak</span>
          </h1>
          <div className="subheading mb-5">
          (M): 8378941744 <br/>
          (E): <a href="mailto:name@email.com"> gitalirakshak007@email.com</a> <br/>
          Nagpur, Maharashtra, India.

          </div>
          <p className="lead mb-5">I am Experienced developer with a demonstrated history of working in the information technology and services industry. I have total 4+ years of experience. Skilled in Hoops communicator, Angular 11, PDFTron, HTML, CSS, Javascript, AFrame, Angular JS. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. </p>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/gitali-rakshak/" target="_blank"  rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://twitter.com/@GitaliRakshak" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.facebook.com/gitali.rakshak" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
          </div>
        </div>
      </section>


    )
  }

}
export default About;
