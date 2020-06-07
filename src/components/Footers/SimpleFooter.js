import React from "react";
import {
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";

class SimpleFooter extends React.Component {
  render() {
    return (
      <>
        <footer className=" footer bg-transparent">
          <Container>
            <hr />
            <Row className=" align-items-center justify-content-md-between">
              <Col md="6">
                <div className=" copyright">
                  © {new Date().getFullYear()}{" "}
                  <a
                    href="#heyha"
                    target="_blank"
                  >
                    FBO Team
                  </a>
                  .
                </div>
              </Col>
              <Col md="6">
                <Nav className=" nav-footer justify-content-end">
                  <NavItem>
                    <NavLink
                      href="#heyha"
                      target="_blank"
                    >
                      О проекте
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      href="#heyha"
                      target="_blank"
                    >
                      Правила участия
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      href="#heyha"
                      target="_blank"
                    >
                      Блог
                    </NavLink>
                  </NavItem>
                </Nav>
              </Col>
            </Row>
          </Container>
        </footer>
      </>
    );
  }
}

export default SimpleFooter;
