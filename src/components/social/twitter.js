import React from "react"
import Social from "./index"
import { FaTwitter } from "react-icons/fa"

export default function Twitter(props) {
  return (
    <Social {...props}>
      <FaTwitter color="black" />
    </Social>
  )
}
