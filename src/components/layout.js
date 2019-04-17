import React from 'react';
import { css } from '@emotion/core';
import { Link, StaticQuery, graphql } from 'gatsby';

import { rhythm } from '../utils/typography';

export default ({ children }) => (
    <StaticQuery 
        query={graphql`
            query {
                site {
                    siteMetadata{
                        title
                    }
                }
            }
        `}

        render={data => (
            <div
                css={css`
                    margin: 0 auto;
                    max-width: 700px;
                    padding: ${rhythm(1)};
                    padding-top: ${rhythm(0)}
                `}
            >
                <Link to={'/'}>
                    <h2
                        css={css`
                            text-decoration: none;
                            font-style: normal;
                        `}
                    >
                        {data.site.siteMetadata.title}
                    </h2>
                </Link>
                {children}
            </div>
        )}
    
    />

)   