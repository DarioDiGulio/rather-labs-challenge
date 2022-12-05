import Head from 'next/head'
import React from 'react'

export const Quizz: React.FC = () => {
    return (
        <>
            <Head>
                <title>Quizz Title</title>
            </Head>
            <div>
                <p>Quizz questions</p>
            </div>
        </>
    )
}

export default Quizz