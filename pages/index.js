import React from 'react';
import Layout from '../components/Layout.js'
import Link from 'next/link'
// import fetch from 'isomorphic-unfetch'
import SUMMARY_JSON from '../content/summary.json'
import {getURL} from '../src/utils/content'

const PostLink = (props) => (
    <li>
        {/* <Link as={`/p/${props.id}`} href={`/post?title=${props.id}`}> */}
            <a href={`/p/${props.id}`}>{props.title}</a>
        {/* </Link> */}
    </li>
)

function Index(props) {

    return (
        <Layout>
            <h1>Danesh Dev Notes</h1>
                {
                    props.categories.map((category, i) => {
                        return (
                            <div key={i}>
                              <h2>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
                              <ul>
                                {
                                  props.posts[category].map((post, i) => {
                                    return (
                                      <PostLink key={i} id={getURL(post.title)} title={post.title} />
                                    )
                                  })
                                }
                              </ul>
                            </div>
                          ) 
                    })
                }
        </Layout>
    )
}

Index.getInitialProps = async function () {
    const posts = SUMMARY_JSON.fileMap
    const categories = [];
    const categorisedPosts = {};

    for (let key in posts) {
        let postCategory = posts[key].dir.split('/')[posts[key].dir.split('/').length - 1];
        if (postCategory in categorisedPosts) {
            categorisedPosts[postCategory].push(posts[key]);
        } else {
            categorisedPosts[postCategory] = [posts[key]];
            categories.push(postCategory);
        }
    }

    return {
        posts: categorisedPosts,
        categories: categories.sort()
    }
}

export default Index