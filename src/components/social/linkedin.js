import React from "react"
import Social from "./index"
import { FaLinkedin } from "react-icons/fa"

export default function Linkedin(props) {
  return (
    <Social {...props}>
      <FaLinkedin color="black" />
    </Social>
  )
}
