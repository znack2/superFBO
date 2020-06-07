import React, { useEffect, useState } from "react";
import {
  Button,
  CardFooter,
  CardBody,
  Card,
  CardHeader,
  Col,
  Container,
  Row,
} from "reactstrap";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import SimpleFooter from "../components/Footers/SimpleFooter";
import proposalApi from "../common/api/proposals.api";

const ProposalSingle = ({ match }) => {
  console.log(match);
  const { params } = match;
  const { id } = params;
  const [proposal, setProposal] = useState({});

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, []);

  useEffect(() => {
    const proposals = proposalApi.getProposalById(id);
    setProposal(proposals[0]);
  }, []);

  const data = [
    {
      data: proposal.date,
      title: proposal.name,
      description: proposal.description,
      vkLink: proposal.vkLink,
    },
    {
      title: "Достижение 1",
      subtitle: "Набрать 100 голосов и сформировать предложение для проекта",
      description:
        "Награда: Публикация статьи о инициации проекта для города в местой газете\n",
    },
    {
      title: "Достижение 2",
    },
  ];

  return (
    <>
      <Container className="my-5">
        <Row className="justify-content-center">
          <Col md="12">
            <Card className="card-profile shadow w-100">
              <CardHeader>
                <Row>
                  <Col md="6">
                    <h1 className="h5 mb-0 text-primary">
                      Предложение {proposal.id}
                    </h1>
                  </Col>
                  <Col md="6" className="text-right">
                    <h5 className="text-primary">Статус: Этап 1</h5>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col md="12" className="text-center">
                    <h4 className="text-primary">53 голосов</h4>
                  </Col>
                </Row>
              </CardBody>
              <CardBody className="timeline" style={{ background: "#f3f3f3" }}>
                <VerticalTimeline>
                  {data.map(
                    ({ date, title, subtitle, description, vkLink }) => (
                      <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{
                          background: "#fff",
                          color: "#000",
                        }}
                        date={date}
                      >
                        <h3 className="vertical-timeline-element-title">
                          {title}
                        </h3>
                        <p className="">{subtitle}</p>
                        <p>{description}</p>
                        <br />
                        {vkLink && (
                          <a href={vkLink} className="mt-5">
                            {vkLink}
                          </a>
                        )}
                      </VerticalTimelineElement>
                    )
                  )}
                </VerticalTimeline>
              </CardBody>
              <CardFooter>
                <Row>
                  <Col md="6">
                    <Button>Редактировать</Button>
                  </Col>
                  <Col md="6" className="text-right">
                    <Button color="primary">Проголосовать</Button>
                  </Col>
                </Row>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </Container>
      <SimpleFooter />
    </>
  );
};

export default ProposalSingle;
