import React from "react"
import { graphql,Link,navigate } from "gatsby"
import { Graph } from "react-d3-graph";
import Layout from "../layout/layout"
import "../styles/note.css"
import "../styles/graph.css"
const makeSlug = require("../utils/make-slug")
const moment = require('moment')

export default function Note({ pageContext, data }) {
  const post = data.markdownRemark

  // Create the data for the graph visualisation for the note linking.
  const graphData = {
    nodes: [{id: post.fields.title, color: "black"}],
    links: [],
    focusedNodeId: post.fields.title
  }

  // Links to the current Note
  for(let i = 0; i < pageContext.referredBy.length; i++) {
    const refNoteTitle = pageContext.referredBy[i]
    graphData.nodes.push({id: refNoteTitle })
    graphData.links.push({source: refNoteTitle, target: post.fields.title })
  }

  // Links from the current Note
  for(let i = 0; i < pageContext.refersTo.length; i++) {
    const refNoteTitle = pageContext.refersTo[i]
    graphData.nodes.push({id: refNoteTitle })
    graphData.links.push({source: post.fields.title, target: refNoteTitle })
  }

  // If this is an orphan note(no links to and from other notes), we need some hackery to get it to work.
  if(graphData.nodes.length === 1) {
    graphData.nodes.push({id: "No Links", color: "#eee", fontColor: "#999"})
    graphData.links.push({source: post.fields.title, target: "No Links", color: "#eee"})
  }

  const onClickNode = function(nodeId) {
    if(nodeId === "Unlinked") return
    const slug = makeSlug(nodeId)
    navigate(`/${slug}`)
  };

  // the graph configuration, just override the ones you need
  const graphConfig = {
    automaticRearrangeAfterDropNode: true,
    directed: true,
    initialZoom: 1.4,
    // nodeHighlightBehavior: true,
    node: {
      color: "gray",
      size: 120,
      fontSize: 10,
    }
  };

  return (
    <Layout title={ post.fields.title }>

      <div className="note-area">
        <h1 className="note-title">{ post.fields.title }</h1>
        <div className="note-content" dangerouslySetInnerHTML={{ __html: post.html }}>
        </div>

        <div className="note-meta">
          <p>Published on: { moment(new Date(post.fields.date)).format("do MMMM, YYYY") }</p>
        </div>

        { post.frontmatter.tags ? (
        <div className="note-tags">
          <h6>Tagged With: </h6>
          <ul>
            {post.frontmatter.tags.map((tag, index) => (
              <li key={index}><Link to={`/tags/${makeSlug(tag)}`}>{tag}</Link></li>
            ))}
          </ul>
        </div>
        ) : null }

        { pageContext.referredBy.length ? (
        <div className="note-references">
          <h6>Referred By</h6>
          <ul>
            {pageContext.referredBy.map((title, index) => (
              <li key={index}><Link to={`/${makeSlug(title)}`}>{title}</Link></li>
            ))}
          </ul>
        </div>
        ) : null }

        <div className="note-graph">
          <Graph
            id="note-link-graph"
            data={graphData}
            config={graphConfig}
            onClickNode={onClickNode}
          />
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        title
        date
      }
      frontmatter {
        tags
      }
    }
  }
`
