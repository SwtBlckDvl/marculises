import React from "react";

export const ProExperienceScreen = () => {
  return (
    <div>
      <h1 className="title">Professional Profile</h1>
      <div className="container">
        <div className="row g-3">
          <div className="col-12 col-md-6">
            <div className="card">
              <img src="..." className="card-img-top" alt="Ford logo" />
              <div className="card-body">
                <h5 className="card-title">Automovile Tester</h5>
                <p className="card-text">
                  My most mechatronic side yet. I test a whole bunch of electric
                  modules and features for the incoming new Ford car models.
                </p>
                <h6>Skills</h6>
                <p className="card-text">
                  Bootstrap, CSS, Hostinger, HTML, Js, React
                </p>
                <h6>Tools</h6>
                <p className="card-text">Github, Hostinger, VScode</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="card ">
              <img src="..." className="card-img-top" alt="Gigstack logo" />
              <div className="card-body">
                <h5 className="card-title">Front-end Developer</h5>
                <p className="card-text">
                  Started with curiosisty, now as a hobbie I found out that the
                  whole process of design and develop functionality is a mix
                  that my brain enjoy a lot.
                </p>
                <h6>Skills</h6>
                <p className="card-text">Bootstrap, CSS, HTML, Js, React</p>
                <h6>Tools</h6>
                <p className="card-text">Github, Hostinger, VScode</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
