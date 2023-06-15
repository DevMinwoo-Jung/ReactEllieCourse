'use client';
import React, { useEffect, useState } from 'react'
import styles from './page.module.css'

const MeowArticle = () => {

  const [article, setArticle] = useState('...loading...')

  useEffect(() => {
    fetch('https://meowfacts.herokuapp.com')
    .then(res => res.json())
    .then(data => setArticle(data.data[0]))
  }, [])


  return (
    <article className={styles.article}>{article}</article>
  )
}

export default MeowArticle