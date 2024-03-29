import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

export default ({ data }) => {

    return (
        <Layout>
            <div>
                <h1>Metadocs Files</h1>
                <table>
                    <thead>
                        <th>relativePath</th>
                        <th>prettySize</th>
                        <th>extension</th>
                        <th>birthTime</th>
                    </thead>
                    <tbody>
                        {data.allFile.edges.map(({node}, index) => (
                            <tr key={index}>
                                <td>{node.relativePath}</td>
                                <td>{node.prettySize}</td>
                                <td>{node.extension}</td>
                                <td>{node.birthTime}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Layout>
    )

}

export const query = graphql`
    query {
        allFile {
            edges {
                node {
                    relativePath
                    prettySize
                    extension
                    birthTime(fromNow: true)
                }
            }
        }
    }

`