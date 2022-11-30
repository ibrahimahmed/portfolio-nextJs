const ResumeSection = () => {
  return (
    <div className="section resume" id="section-history">
      <div className="content">
        <div className="cols">
          <div className="col">
            {/* title */}
            <div className="title">
              <div className="title_inner">Experience</div>
            </div>
            {/* resume items */}
            <div className="resume-items">
              <div className="resume-item content-box active">
                <div className="date">July 2022 - Present</div>
                <div className="name">Full Stack Developer | Cargors </div>
                <div className="text">
                  Participated in the development lifecycle from design through implementation and testing.
                  <br></br>
                  Worked on developing REST Apis using Node Js with Express Js as middleware and MongoDB as a Database.
                  <br></br>
                  Reduced the build size of various web apps by more than 70 % which improves performance by 60 %.
                  <br></br>
                  Setup CI/CD pipeline using Github Actions to enable us to deploy code to production on a daily basis.
                  <br></br>
                  Collaborated with UI/UX engineers to improve and make  ideas a reality for our
                  Customer Portal using Angular and Vue Js for our internal portal.
                  <br></br>
                  Assisted with troubleshooting application issues as well as providing technical assistance to end-users when needed.
                </div>
              </div>
              <div className="resume-item content-box">
                <div className="date">Aug 2020- June 2022</div>
                <div className="name">Full Stack Developer | Try Catch Pro</div>
                <div className="text">
                  Improved existing website with more features like online ordering, loyalty programs and email signup forms.
                  <br></br>
                  Led efforts to create front-end for numerous projects from the ground up
                  using Reactjs and NextJS paired up with Bootstrap or Tailwind for styling.
                  <br></br>
                  Build intuitive DevOps pipelines using AWS codedeploy , codepipeline and github actions.
                  <br></br>
                  Reduced server load times by optimizing database queries and implementing caching techniques.
                  <br></br>
                  Contributed to back-end Rest and GraphQL Apis and microservices
                  built in Node.js with PostgreSQL, MySQL, DynamoDB, and MongoDB.
                  <br></br>
                  Implemented security measures including firewalls, patching systems and anti-virus software on all servers.
                </div>
              </div>
              <div className="resume-item content-box">
                <div className="date">Oct 2019 - July 2020</div>
                <div className="name">Front End Developer | InnowayIt</div>
                <div className="text">
                  Collaborated with the team to design new features for the app and ensured adherence to current brand standards.
                  <br></br>
                  Tested  and documented Apis using Postman and then integrated those to the front end.
                  <br></br>
                  Contributed to the development of customer portal using a modern framework like Angular paired up with bootstrap for styling.
                  <br></br>
                  Ensured all pages are optimized for speed and performance by eliminating unnecessary scripts/styles where possible.
                  <br></br>
                  Deployed front-end apps to Amazon S3 through CI/CD pipelines using AWS CodePipeline and Codedeploy.

                </div>
              </div>
              <div className="resume-item content-box">
                <div className="date">Sep 2018 - March 2020</div>
                <div className="name">Software Engineer | Test Internationals</div>
                <div className="text">
                  Improved overall product performance by implementing more efficient algorithms in code.
                  <br></br>
                  Contributed to the R&D of an automated bot to perform crypto trades.
                  <br></br>
                  Performed end-to-end testing of existing products.
                  <br></br>
                  Contributed to create a system which focuses on security with an emphasis of secure, identify and authorize mechanism.
                  <br></br>
                  Designed front end components for various applications using HTML and Bootstrap.

                </div>
              </div>
              <div className="resume-item content-box">
                <div className="date">Nov 2017 - Feb 2019</div>
                <div className="name">Software Engineer | Atrix Digital</div>
                <div className="text">
                  Created new features for existing software, including tools that allowed users to track and analyze data from multiple sources.
                  <br></br>
                  Revised, modularized, and updated old code bases to modern development standards,
                  reducing operating costs and improving functionality with respect to modern agile methodologies.
                </div>
              </div>
              <div className="resume-item content-box">
                <div className="date">June 2017 - Aug 2017</div>
                <div className="name">Software Engineer Intern | HexaCrew</div>
                <div className="text">
                Developed code and scripts to automate processes and improve efficiency.
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
export default ResumeSection;
