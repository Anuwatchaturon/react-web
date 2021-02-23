/*!

=========================================================
* Paper Kit React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Button, Card, Form, Input, Container, Row, Col } from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";

function RegisterPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("register-page");
    return function cleanup() {
      document.body.classList.remove("register-page");
    };
  });
  return (
    <>
      <ExamplesNavbar />
      <div
        className="page-header"
        style={{
          backgroundImage: "url(" + require("assets/img/login-image.jpg") + ")",
        }}
      >
        <div />
       
        <div>
        <Col  className="ml-auto mr-auto text-center" md="20">
          <div className="owner">
            <div className="avatar">
              <img
                alt="..."
                className="img-circle  img-responsive"
                src={require("assets/img/faces/me.jpg")}
              />
            </div>
            <div>
              <h4 className="title">
              61114440847 นาย อนุวรรตน์จาตุรนต์ พัวทวี <br />
              </h4>
              <h6 className="title">Computer Science</h6>
            </div>
          </div>
        
            </Col>
         
          <br />
      </div>
 
    
      </div>
    </>
  );
}

export default RegisterPage;
