import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Layout from "../layout/layout"
import Menu from "../components/menu"
import siteConfig from "../../gatsby-config"
import NoteList from "../components/note-list"

import { MDXRenderer } from "gatsby-plugin-mdx"

export default function Home() {
  const data = useStaticQuery(graphql`
    query HomeQuery {
      homeNote: mdx(fields: { slug: { eq: "/home" } }) {
        rawBody
        fields {
          title
          date
        }
        frontmatter {
          tags
        }
      }
      notes: allMdx(limit: 5, sort: { fields: fields___date, order: DESC }) {
        edges {
          node {
            fields {
              slug
              title
              date
            }
            frontmatter {
              tags
            }
          }
        }
      }
    }
  `)

  return data.homeNote ? (
    <Layout title={data.homeNote.fields.title}>
      <div className="note-area">
        <h1 className="note-title">{data.homeNote.fields.title}</h1>
        {/* <div
          className="note-content"
          dangerouslySetInnerHTML={{ __html: data.homeNote.html }}
        ></div> */}
        <MDXRenderer className="note-content">
          {data.homeNote.rawBody}
        </MDXRenderer>
      </div>
    </Layout>
  ) : (
    <Layout title="Home">
      <h1>{siteConfig.siteMetadata.title}</h1>
      <p className="lead">{siteConfig.siteMetadata.description}</p>

      <h3>Table Of Contents</h3>
      <Menu />

      <h3>Latest Notes</h3>
      <NoteList notes={data.notes.edges} />

      <br />
      <Link to="/sitemap">See All Notes</Link>
    </Layout>
  )
}
