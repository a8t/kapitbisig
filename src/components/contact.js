import React from "react"
import { Link } from "gatsby"
import {
  Subtitle,
  Button,
  Field,
  Label,
  Control,
  TextArea,
  Input,
  Box,
} from "bloomer"

export default function ContactForm() {
  return (
    <Box>
      <Subtitle>Contact Us</Subtitle>

      <form
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        {/* You still need to add the hidden input with the form name to your JSX form */}
        <input type="hidden" name="form-name" value="contact" />
        <Field>
          <Label>Your name</Label>

          <Control>
            <Input isColor="primary" type="text" placeholder="Name" />
          </Control>
        </Field>

        <Field>
          <Label>Your email</Label>
          <Control>
            <Input
              isColor="primary"
              type="text"
              placeholder="name@example.com"
            />
          </Control>
        </Field>

        <Field>
          <Label>Message</Label>
          <Control>
            <TextArea className={"is-primary"} placeholder="Your message" />
          </Control>
        </Field>

        <Field>
          <Control>
            <Button isColor="success">Submit</Button>
          </Control>
        </Field>
      </form>
    </Box>
  )
}
