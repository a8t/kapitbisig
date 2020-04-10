import React from "react"
import PropTypes from "prop-types"
import { Link, graphql } from "gatsby"
import {
  Container,
  Title,
  Column,
  Content,
  Button,
  Icon,
  Card,
  CardHeader,
  CardContent,
  Columns,
  CardHeaderTitle,
} from "bloomer"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import { RequestAid, Volunteer } from "../components/callToAction"
import ContactForm from "../components/contact"

const Section = props => {
  return <section style={{ paddingTop: 32, paddingBottom: 32 }} {...props} />
}

const IndexPage = ({ data }) => {
  const page = data.site.siteMetadata
  return (
    <Layout>
      <SEO title="Kapit-Bisig" />
      <Hero siteTitle={page.title} description={page.description} />
      <Section>
        <Container>
          <Title>How does it work?</Title>

          <Columns>
            <Column isSize="1/2">
              <p>
                To sign up for the Kapit-Bisig COVID Response mutual aid
                network, you can fill out one of the two forms below.
              </p>
            </Column>
          </Columns>

          <Columns>
            <Column isSize="1/2">
              <Card>
                <CardHeader>
                  <CardHeaderTitle>I need help</CardHeaderTitle>
                </CardHeader>
                <CardContent>
                  <Content>
                    I'm going through some hard times. I'm struggling
                    financially, emotionally, or physically. I'm facing loss of
                    work or other hardship.
                    <div style={{ marginTop: 16 }}></div>
                    <RequestAid isColor="primary" />
                  </Content>
                </CardContent>
              </Card>
            </Column>
            <Column isSize="1/2">
              <Card>
                <CardHeader>
                  <CardHeaderTitle>I want to help</CardHeaderTitle>
                </CardHeader>
                <CardContent>
                  <Content>
                    I have additional means. I can offer time, resources,
                    skills, or knowledge. I want to give back to my community.
                    <div style={{ marginTop: 16 }}></div>
                    <Volunteer isColor="primary" />
                  </Content>
                </CardContent>
              </Card>
            </Column>
          </Columns>
          <Columns>
            <Column isSize="1/2">
              <Content>
                <Section>
                  <h3>Who are we?</h3>
                  <p>
                    We are a group of Filipinos, allies, and concerned community
                    members. We are women, youth, students, migrants, workers,
                    professionals, and church people.{" "}
                    <b>We knew that we would have to come together</b> to
                    weather the storm of the COVID-19 pandemic.
                  </p>
                  <Link to="/about">
                    <Button isOutlined className="is-rounded" id="is-spaced">
                      <span>Learn more</span>
                      <Icon className="fa fa-arrow-right fa-sm" />
                    </Button>
                  </Link>
                </Section>

                <Section>
                  <h3>Contact us</h3>
                  <p>
                    If you have questions or concerns, please fill out the form
                    on our
                    <Link to="/contact"> Contact page</Link>.
                  </p>
                  <p>
                    If you need help urgently, please{" "}
                    <Link to="hotline">call our hotline</Link>.
                  </p>
                </Section>
              </Content>
            </Column>
          </Columns>
        </Container>
      </Section>
    </Layout>
  )
}

IndexPage.propTypes = {
  site: PropTypes.shape({
    siteMetadata: PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }),
  }),
}
export default IndexPage

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
