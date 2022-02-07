import React from 'react'
import PropTypes from 'prop-types'
import { PortableText } from '../PortableText'
import styles from './TextSection.module.css'

function TextSection (props) {
  const {heading, label, text} = props

  return (
    <div className={styles.root}>
      <section className={styles.article}>
        <div className={styles.label}>{label}</div>
        <h2 className={styles.heading}>{heading}</h2>
        {text && <PortableText blocks={text} />}
      </section>
    </div>
  )
}

TextSection.propTypes = {
  heading: PropTypes.string,
  label: PropTypes.string,
  text: PropTypes.arrayOf(PropTypes.object)
}

export default TextSection
