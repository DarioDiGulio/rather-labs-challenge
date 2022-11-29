import Head from 'next/head'
import utilStyles from '../../styles/utils.module.css'
import React from 'react'

export const Post: React.FC<Props> = ({ postData }) => {
    return (
        <>
            <Head>
                <title>{ postData.title }</title>
            </Head>
            <article>
                <h1 className={ utilStyles.headingXl }>{ postData.title }</h1>
                <div dangerouslySetInnerHTML={ { __html: postData.contentHtml } }/>
            </article>
        </>
    )
}

interface Props {
    postData: any
}
