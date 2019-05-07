import React from "react"

export default function Social(props) {
  const { url, label, children } = props
  return (
    <a
      href={url}
      style={{ textDecoration: "none", boxShadow: "none" }}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  )
}
