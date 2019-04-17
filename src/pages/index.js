import React from "react";
import { Link, graphql } from 'gatsby';
import { css } from '@emotion/core';
import { rhythm } from '../utils/typography';
import Layout from '../components/layout';

export default ({ data }) => (
    <Layout>
        <div>
            <div>
                <p
                    css={css`
                        margin-bottom: ${rhythm(0)};
                    `}
                >Documented by <a href='https://twitter.com/kevinmocorro' target='_blank' rel="noopener noreferrer" >
                    Kevin Mocorro
                </a> and Elmer Malazarte.
                </p>
                <p
                    css={css`
                        margin-bottom: ${rhythm(1/4)};
                    `}
                >
                
                </p>
            </div>
            {data.allMarkdownRemark.edges.map(({ node }) => (
                <div key={node.id}>
                    <Link 
                        to={node.fields.slug}
                        css={css`
                            text-decoration: none;
                        `}
                    >
                    <h3
                        css={css`
                            margin-bottom: ${rhythm(1/4)};
                        `}
                    >{node.frontmatter.title}{" "}
                    </h3>
                    </Link> 
                    <p 
                        css={css`
                            color: #bbb;
                            font-size: 12px;
                            margin-bottom: ${rhythm(1/4)};
                        `}
                    >{node.frontmatter.date}
                    </p>
                    <p>{node.excerpt}</p>
                </div>
            ))}
        </div>
    </Layout>

)

export const query = graphql`
    query {
        allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
            edges {
                node {
                    id
                    frontmatter {
                        title
                        date(formatString: "MMMM DD, YYYY")
                    }
                    fields {
                        slug
                    }
                    excerpt
                }
            }
        }
    }
`