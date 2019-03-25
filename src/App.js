import React, { Component } from 'react';
import One from './image/one.jpg'
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
      <div className = 'Header'>
          <h3> Web Developer</h3>
          <br/>
          <h1> Abdou Sanda Dourhamane </h1>
      </div>
      <div className = 'App1'>
          <div className ='donnepersonel'> 
            <img src={One} alt= 'tttt'/>
            <div className = 'donnepersonel1'> 
              25 July 1980 <br/>
              Stadsomvaart 161/7 3500 Hasselt  Belgium<br/>
              abdous2004@yahoo.fr <br/>
              +32486 244 383	/ +32492 091 679 <br/>
              Driving License B, and personal car <br/>
              <br/>
            </div>
            <div className = 'donnepersonel2'>
              <h2> Skills</h2>
              <p>
                Developer Tools: <br/>
                HTML, CSS,<br/>
                JAVASCRIPT,<br/> 
                NODEJS, SQL, <br/>
                MongoDB,  <br/>
                React, <br/>
                Electron, <br/>
                Google-Spreadsheet <br/>
              </p>
            </div>
            <div className = 'donnepersonel3'>
              <h2> Interest</h2>
              <p>
                Web Development<br/>
                Data Science<br/>
                Staistiques<br/> 
              </p>
            </div>
            <div className = 'donnepersonel3'>
              <h2> Languages</h2>
              <p>
              French: Native  <br/> 
              English: Read, Written and Speaking: excellent  <br/>
              Dutch: 	Read, Written and Speaking: Good  (Instituut Voor Levende Talen-ILT, PCVO) <br/>
              </p>
            </div>
            <div className = 'donnepersonel3'>
              <h2> Qualities</h2>
              <p>
              Capable to work under pressure and meet the demanding deadline. <br/>
              Ability to work in group as well as independently, being creative and analytical.
              </p>
            </div>
            <div className = 'donnepersonel3'>
              <h2> Hobbies</h2>
              <p>
              Walking, Biking, Volunteer (Sahara- helping refugees to Be integrated in Belgium)
              </p>
            </div>
            <h2> References are available upon request</h2>
          </div>
      </div>
      <div className = 'mainpage'>
        <h2> Education&Qualification</h2>
        <p className = 'Education'>
            <div className = 'fff'>
            <span> Hack Your Future, Be Central </span> 
            <span className = 'dat'> 04/2018-12/2018 </span>  <br/>
            </div>
            <p className = 'pppp'> Project: Digital-Empowerment-hobo: development of online teaching platform</p>
        </p>
        <p className = 'Education'>
            <div className = 'fff'>
            <span> John Hopkins University </span> 
            <span className = 'dat'> 01/2015-04/2018 </span>  <br/>
            </div>
            <p className = 'pppp'>Certification  (Data Scientist's Toolbox, Getting and Cleaning Data, Exploratory Data Analysis, <br/> 
              R Programming Data Scientist, 
              Statistical Reasoning for Public Health Reg II Method) </p>
        </p>
        <p className = 'Education'>
            <div className = 'fff'>
            <span> University of North Carolina </span>   
            <span className = 'dat'> 12/2014-01/2015 </span>  <br/>
            </div>
            <p className = 'pppp'>Epidemiology and Public	 Health </p>
        </p>
        <p className = 'Education'>
            <div className = 'fff'>
            <span> Vanderbilt   University </span> 
            <span className = 'dat'> 09/2014-12/2014 </span>  <br/>
            </div>
            <p className = 'pppp'>Certified Data Management for Clinical Research  </p>
        </p>
        <p className = 'Education'>
            <div className = 'fff'>
            <span> University of Hasselt, Biostatistics: M.Sc. Courses	 </span> 
            <span className = 'dat'> 09/2010-09/2013 </span>  <br/>
            </div>
            <p className = 'pppp'>
            Project: Environmental Wide Association Study: human bio monitoring
            </p>  
        </p>
        <p className = 'Education'>
            <div className = 'fff'>
            <span> Usmanu Danfodio University Sokoto:  B. Sc. Statistics	 </span> 
            <span className = 'dat'> 09/2002-11/2006 </span>  <br/>
            </div>
            
        </p>
        <p className = 'Education'>
            <div className = 'fff'>
            <span> AMO Computer Center, Diploma in Computer Studies: Computer Science	 </span> 
            <span className = 'dat'>02/2004-11/2004 </span>  <br/>
            </div>
        </p>
        <h2> Work Experience</h2>
        <p className = 'Education'>
            <div className = 'fff'>
            <span> AppSaloon -Stage: Web Developer  </span> 
            <span className = 'dat'> 01/2019-02/2019 </span>  <br/>
            </div>
            <p className = 'pppp'>
              Developed a desktop Application that is used to follow cash. 
              It allow to know the status of the cash In and cash Out. <br/>
              Bills to be payed and when it has to be done. Able to have a summary of cash in hours, days  and weeks.<br/>
              Design was given by the client and did the software implementation. During the development work of this project,<br/>
              google-spreadsheet, Electron react and node js are used as languages to write the application.
            </p>
        </p>
        <p className = 'Education'>
            <div className = 'fff'>
            <span> Hack Your Future, Be Central(Hobo vzw) : Web Developer   </span> 
            <span className = 'dat'> 04/2018-12/2018 </span>  <br/>
            </div>
            <p className = 'pppp'>
            Develop an application for e-learning to be used by a public not introduced to technology. The community of hobo VZW 
            <br/>used the application to teach people without any prior experience to use computer for basic task on computer and
            <br/>to maintain the application without the help of technical professional.   <br/>
            During this project we have used React, Node and MongoDB to write the software.  Did the Design and implemented software.
            </p>
        </p>
        <p className = 'Education'>
            <div className = 'fff'>
            <span> Risotrans-Niger: Data  Management   </span> 
            <span className = 'dat'> 01/2010-08/2010 </span>  <br/>
            </div>
            <p className = 'pppp'>
            With extensive experience in data collection, management, clinical data analysis, writing and reporting projects. 
            <br/>I got chance to do: <br/>
            Planning Data collection strategy; Standardizing Operations and Procedures<br/>
            Electronic Data Capture Systems ;  Working Through Planning, EDC Setup and Study Launch<br/>
            Data Management Considerations Once a Study Is Launched (Mid-Study Operations and Challenges)<br/>
            Data Management Considerations Once a Study Is Finished; Regulatory Requirements and Compliance<br/>
            Collecting Information Directly From Research Participants (Surveys); Multi-Center and Network Studies<br/>
            Resource-Limited Settings and Global Health Studies <br/>
            </p>
        </p>
        <p className = 'Education'>
            <div className = 'fff'>
            <span> Institut National de la Statistique du Niger (INS): Statistician   </span> 
            <span className = 'dat'> 12/2007-12/2009 </span>  <br/>
            </div>
            <p className = 'pppp'>
            Statistician, participation in the conception, execution, evaluation, follow-up and analysis and reporting<br/>
            results of several inquiries organized by INS and Trainings.
            </p>
        </p>
        <p className = 'Education'>
            <div className = 'fff'>
            <span> Centre de Formation  Technique (CFT) Informatique   </span> 
            <span className = 'dat'> 11/2006- 06/2009 </span>  <br/>
            </div>
            <p className = 'pppp'>
            Teaching  “Mathematique et Statistique Appliquées ”
            </p>
        </p>

      </div>
      
      
      

    
        
      </div>
    );
  }
}

export default App;
