import React, { useState } from "react"
import { Link, graphql } from "gatsby"
import Header from "../components/Header"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import { useDocumentScrollThrottled, MINIMUM_SCROLL, TIMEOUT_DELAY } from '../utils/useDocumentScrollThrottled';

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  const [shrinkPosts, setShrinkPosts] = useState(false);

  useDocumentScrollThrottled(callbackData => {
    const {currentScrollTop } = callbackData;

    setTimeout(() => {
      setShrinkPosts(currentScrollTop > MINIMUM_SCROLL);
    }, TIMEOUT_DELAY);
  });

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <Header />
      <div className={`posts ${shrinkPosts ? 'shrunk' : ''}`}>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          const postColor = getPostColor(node.frontmatter.type);

          return (
            <article key={node.fields.slug} className='sup'>
              <header>
                <Link style={{ color: 'white', boxShadow: `none` }} to={node.fields.slug}>
                  <h3 className={`post-title ${postColor}`}>
                    {title}
                  </h3>
                </Link>
                <small className='post-body'>{node.frontmatter.date} {node.frontmatter.type}</small>
              </header>
              <section className='post-body'>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
              </section>
            </article>
          )
        })}
      </div>
    </Layout>
  )
}

export default BlogIndex

function getPostColor(postType){
  let postColor;

  switch (postType) {
    case 'education':
      postColor = 'green';
      break;
    case 'product sense':
      postColor = 'teal';
      break;
    default:
      postColor = 'purple';
  }

  return postColor;

}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            type
          }
        }
      }
    }
  }
`
