import PropTypes from 'prop-types'

import styles from './NewsCard.module.css'

const NewsCard = ({
    src,
    title,
    publishedAt,
    sourceName,
    description,
    url,
    notLastChild
}) => {
    return (
        <>  
            <div className={styles.newsCardGap}>

                <div className={styles.imgContainer}>
                    <img
                        className={styles.img}
                        src={src}
                        alt={`${title} thumbnail img`}
                    />
                    <p className={styles.imgTitle}>{title}</p>
                </div>

                <div className={styles.newsCardContent}>
                    <p className={styles.newsCardDate}>{publishedAt}</p>
                    <p className={styles.newsCardAuthor}>
                        {`${sourceName}`}
                    </p>

                    <p className={styles.newsCardDesc}>{description}</p>

                    <a  
                        className={styles.url}
                        href={url}
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        Go to website    
                    </a>
                </div>
            </div>
        </>
    )
}

NewsCard.propType = {
    src: PropTypes.string,
    title: PropTypes.string,
    publishedAt: PropTypes.string,
    sourceName: PropTypes.string,
    description: PropTypes.string,
    url: PropTypes.string,
    notLastChild: PropTypes.bool
}

export default NewsCard