import React, {Component} from 'react';
 class Education extends Component {
   render(){
     return(

       <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="education">
         <div className="w-100">
           <h2 className="mb-5 text-primary">{ this.props.title }</h2>

           <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
             <div className="resume-content">
               <h3 className="mb-0"> Cambellsville University</h3>
               <div className="subheading mb-3">Masters in MSITM</div>
               <div>Information Technology And Management</div>
               <p>GPA: </p>
             </div>
             <div className="resume-date text-md-right">
               <span className="text-primary">April 2019 - 2020</span>
             </div>
           </div>

           <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
             <div className="resume-content">
               <h3 className="mb-0">RTMNU University - G. H.Raisoni College Of Engineering And Technology</h3>
               <div className="subheading mb-3"> Master's In Computer Science And Engineering</div>
               <p>GPA: 4, Percentage: 77%</p>
             </div>
             <div className="resume-date text-md-right">
               <span className="text-primary">August 2013 - August 2015</span>
             </div>
           </div>


           <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
             <div className="resume-content">
               <h3 className="mb-0">RTMNU University - SMT. Rajshree Mulak College of Engineering</h3>
               <div className="subheading mb-3">Bachelor's In Information Technology</div>
               <p>GPA: 3.28, Percentage: 72%</p>
             </div>
             <div className="resume-date text-md-right">
               <span className="text-primary">August 2008 - June 2012</span>
             </div>
           </div>

         </div>
       </section>


     )
   }

 }
 export default Education;
