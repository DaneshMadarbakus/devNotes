import React, { Component } from 'react';
import Layout from '../components/Layout.js'
import Link from 'next/link'


const PostLink = (props) => (
    <li>
        <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
            <a>{props.title}</a>
        </Link>
    </li>
)

function Index(props) {
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

export default Index