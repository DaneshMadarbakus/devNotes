import React, { Component } from 'react';
import Layout from '../components/Layout.js'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import SUMMARY_JSON from '../content/summary.json'

const PostLink = (props) => (
    <li>
        <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
            <a>{props.title}</a>
        </Link>
    </li>
)

function Index(props) {
    const postList = props.posts
    console.log(postList)
    return (
        <Layout>
            <h1>hello</h1>
            <ul>
                <PostLink id='post-one' title='Post One' />
                <PostLink id='post-two' title='Post Two' />
                <PostLink id='post-three' title='Post Three' />
            </ul>
        </Layout>
    )
}

Index.getInitialProps = async function () {
    const res = SUMMARY_JSON.fileMap
    // const data = await res.json()

    // console.log(`Show data fetched. Count: ${data.length}`)

    return {
        posts: res
    }
}

export default Index