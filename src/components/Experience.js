import React, {Component} from 'react';

class Experience extends Component{
  render(){
    return(
      <section className="resume-section p-3 p-lg-5 d-flex justify-content-center" id="experience">
        <div className="w-100">
          <h2 className="mb-5 text-primary">{ this.props.title }</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Front-End Developer</h3>
              <div className="subheading mb-3">Flying Penguin</div>
              <p>Completed Internship on Ionic platform. <br />
              These are the skills on which I worked: Ionic, CSS, HTML, JavaScript, JQuery, PHP.</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">December 2017 - January 2018</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Full Stack Developer</h3>
              <div className="subheading mb-3">Buzzinga Labs</div>
              <p> I worked on the Virtual Reality Product with following skills on front end and back end. <br/>
              Virtual Reality Product:<br/>
              Front-End: HTML, CSS, Bootstrap, Javascript, AFrame, three.js, JQuery, AJAX <br/>
              Back-End: MySQL & PHP <br/>
              Source Repository: Git <br/>
              <li> Worked on all stages of the SDLC for product development & applications </li>
              <li> Trained new hires and interns as a project guide</li>

              <li> Have good knowledge on Unity 3D</li>
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">August 2016 - November 2017</span>
            </div>
          </div>

        </div>

      </section>

    )
  }

}
export default Experience;
