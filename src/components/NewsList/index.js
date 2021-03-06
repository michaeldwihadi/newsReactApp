import PropTypes from 'prop-types'
import NewsCard from '../NewsCard'

import styles from './NewsList.module.css'

const NewsList = ({ articles }) => {
    return (
        <div className={styles.NewsList}>
            {articles.map((article, index, arr) => {
                return (
                    <NewsCard
                        key={index}
                        src={article.image}
                        title={article.title}
                        publishedAt={article.publishedAt}
                        sourceName={article.source.name}
                        description={article.description}
                        url={article.url}
                        notLastChild={!(arr.length === index + 1)}
                    />
                )
            })}
        </div>
    )
}

NewsList.propTypes = {
    articles: PropTypes.array
}

export default NewsList