import React, { useEffect, useState } from "react";
import axios from "axios";

// reactstrap components
import {
  FormGroup,
  Button,
  Card,
  Container,
  Row,
  Col,
  Input,
  Form,
  Label,
  CardBody,
  CardHeader,
} from "reactstrap";

// core components
import SimpleFooter from "components/Footers/SimpleFooter.js";
import CardFooter from "reactstrap/es/CardFooter";
import proposalApi from "common/api/proposals.api";

const ProposalForm = ({ history }) => {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, []);

  const defaultFormValues = {
    firstName: "",
    lastName: "",
    vkLink: "",
    name: "",
    description: "",
  };

  const [formValues, setFormValues] = useState(defaultFormValues);

  const handleInputChange = (key) => (event) => {
    setFormValues({ ...formValues, [key]: event.target.value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setFormValues(defaultFormValues);
    const { id } = proposalApi.createProposal(formValues);

    const accessToken =
      "b86cbde95692d8428d1f20e6d1f6dd01a6058593cae4cade6ed87f6767f2148d50fa25099e20add7f9552";
    let match = formValues.vkLink.match(/(\bwall)(\-*)(\d+)(\_*)(\d+)/);

    let owner_id = match[3];
    let postId = match[5];

    let message = `Автоматически создана петиция по ссылке: https://altay-ui.prbigbrother.now.sh/proposal/${id}`;

    let httpUrl = `https://api.vk.com/method/wall.createComment?owner_id=${owner_id}&post_id=${postId}&message=${message}&access_token=${accessToken}&v=5.107`;

    axios.get(httpUrl);

    history.push(`/proposal/${id}`);
  };

  const { firstName, lastName, vkLink, name, description } = formValues;

  return (
    <>
      <Container className="my-5">
        <Row className="justify-content-center">
          <Col md="8">
            <Card className="card-profile shadow w-100">
              <CardHeader className="bg-gray-300">
                <h1 className="h5 mb-0 text-primary">Предложение</h1>
              </CardHeader>
              <Form onSubmit={handleFormSubmit}>
                <CardBody className="bg-gray-400">
                  <Row className="mb-3">
                    <Col md="6">
                      <FormGroup>
                        <Label>Имя</Label>
                        <Input
                          id="exampleFormControlInput1"
                          placeholder="Иван"
                          type="text"
                          value={firstName}
                          onChange={handleInputChange("firstName")}
                        />
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <Label>Фамилия</Label>
                        <Input
                          id="exampleFormControlInput1"
                          placeholder="Иванов"
                          type="text"
                          value={lastName}
                          onChange={handleInputChange("lastName")}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <Label>Ссылка на публикацию</Label>
                        <Input
                          placeholder="https://vk.com/wall0000_0000"
                          type="text"
                          value={vkLink}
                          onChange={handleInputChange("vkLink")}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <Label>Название</Label>
                        <Input
                          placeholder=""
                          type="text"
                          value={name}
                          onChange={handleInputChange("name")}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <Label>Описание</Label>
                        <Input
                          placeholder=""
                          rows="5"
                          type="textarea"
                          value={description}
                          onChange={handleInputChange("description")}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter className="text-center bg-white">
                  <Button color="primary" type="submit">
                    Подать
                  </Button>
                </CardFooter>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
      <SimpleFooter />
    </>
  );
};

export default ProposalForm;
