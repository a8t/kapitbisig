import React from "react"
import PropTypes from "prop-types"
import { Link, graphql } from "gatsby"
import {
  Section,
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

          <Title>Who are we?</Title>
          <Content>
            <Columns>
              <Column isSize="1/2">
                <p>
                  We are a group of Filipinos, allies, and concerned community
                  members. We are women, youth, students, migrants, workers,
                  professionals, and church people.{" "}
                  <b>We knew that we would have to come together</b> to weather
                  the storm of the COVID-19 pandemic.
                </p>
                <p>
                  Kapit-Bisig Laban COVID is an effort initiated by BAYAN Canada
                  in Toronto (including member organizations Migrante Ontario,
                  Anakbayan Toronto, and GABRIELA Ontario) and Toronto Committee
                  for Human Rights in the Philippines (TCHRP).
                </p>
                <p>
                  These organizations support the democratic people's movement
                  in the Philippines. We connect the struggles of the Filipino
                  people back home to the struggles of migrant and diasporic
                  Filipinos overseas.
                </p>
              </Column>
            </Columns>
          </Content>

          {/* Features section begins */}
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
