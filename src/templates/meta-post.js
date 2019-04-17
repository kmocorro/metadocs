import React from "react";
import { graphql } from 'gatsby';
import { css } from '@emotion/core';
import Layout from "../components/layout";
import { rhythm } from "../utils/typography";

export default ({ data }) => {
    const post = data.markdownRemark;
    
    return (
        <Layout>
            <div>
                <h1
                    css={css`
                        margin-top: ${rhythm(1.5)};
                        display: inline-block;
                        margin-bottom: ${rhythm(1/4)};
                    `}
                >{post.frontmatter.title}</h1>
                <p 
                    css={css`
                        color: #bbb;
                        font-size: 12px;
                        margin-bottom: ${rhythm(1.5)};
                    `}
                >{post.frontmatter.date}
                </p>

                <div dangerouslySetInnerHTML={{__html: post.html }} />
            </div>
        </Layout>
    )
}

export const query = graphql`
    query($slug: String!){
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
            }
        }
    }
`