import React from 'react';
import PropTypes from 'prop-types';


const News = ({ nw }) => {

    // Extraer los datos de las noticias
    const { urlToImage, url, title, description, source } = nw;

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

    const image = (urlToImage) ?
        <div className="card-image">
            <img src={urlToImage} alt="portada" />
            <span className="card-title">{source.name}</span>
        </div>
        : null;

    return (
        <div className="col s12 m12 l4 nwContainer">
            <div className="card card_new" >
                {image}
                <div className="card-content">
                    <h4>{truncate(title, 75)}</h4>
                    <p>{truncate(description, 200)}</p>
                </div>
                <div className="card-action">
                    <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="waves-effect waves-light btn"
                    > Ver Noticia</a>
                </div>
            </div>

        </div>

    );
}


News.propTypes = {
    nw: PropTypes.object.isRequired
}

export default News;