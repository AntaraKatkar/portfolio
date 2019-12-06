import React, {Component} from 'react';
import "../App.css";

//import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

//For File viewer
<<<<<<< HEAD
//import FileViewer from 'react-file-viewer';
const file = '../resume/ResumeGitaliRakshak.docx';
//const file = 'https://AntaraKatkar.github.io/portfolio/public/resume/ResumeGitaliRakshak.docx';
const file = 'https://AntaraKatkar.github.io/portfolio/resume/ResumeGitaliRakshak.docx';
=======
import FileViewer from 'react-file-viewer';
const file = 'https://AntaraKatkar.github.io/portfolio/resume/ResumeGitaliRakshak.docx';
//const file ='https://github.com/AntaraKatkar/portfolio/blob/master/public/resume/ResumeGitaliRakshak.docx';
>>>>>>> 5c41e63785cd236e8b59a343d207891fd263d9d9
const type = 'docx';

class Resume extends Component {
  render(){
    return(
      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="resume">
        <div className="w-100">


        <FileViewer
        fileType={type}
        filePath={file}
        //errorComponent={ CustomErrorComponent }
        onError={this.onError}/>

           </div>
         </section>


    )
  }
  onError(e) {
    //logger.logError(e, 'error in file-viewer');
  }
}
export default Resume;
