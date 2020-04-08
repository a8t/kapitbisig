import React, { Component } from "react"
import {
  Hero,
  HeroBody,
  Container,
  Title,
  Button,
  Columns,
  Column,
  Icon,
  Content,
} from "bloomer"
import CallToAction from "./callToAction"

export default class hero extends Component {
  render() {
    return (
      <Hero isColor="primary" isSize="medium">
        <HeroBody>
          <Container>
            <Columns>
              <Column isSize="1/2">
                {/* Headline */}
                <Title>{this.props.description}</Title>

                <Content>
                  Kapitbisig is a Tagalog term that translates to "linked arms."
                </Content>
                <Content>
                  Community care and mutual aid are the best way for us to
                  overcome the hardship caused by COVID-19.{" "}
                  <b>
                    That is why we've organized Kapitbisig COVID Response, a
                    mutual aid network.
                  </b>
                </Content>

                {/* Call to action button */}
                <CallToAction size="medium" />
              </Column>
            </Columns>
          </Container>
        </HeroBody>
      </Hero>
    )
  }
}
