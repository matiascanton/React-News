import React from 'react';
import styles from'./Form.module.css';
import useSelect from '../hooks/useSelect';
import PropTypes from 'prop-types';

const Form = ({setCategory}) => {

    const OPTIONS = [
        {value: 'general', label: 'General'},
        {value: 'entertainment', label: 'Entretenimiento'},
        {value: 'sports', label: 'Deportes'},
        {value: 'science', label: 'Ciencia'},
    ]

    const [category, SelectNews] = useSelect('general', OPTIONS);

    // Cuando se hace submit, pasamos categoria a APP
    const searchNews = e => {
        e.preventDefault();

        setCategory(category);
    }

    return (
        <div className={`${styles.search} row`}>
            <div className="col s12 m8 offset-m2">
                <form
                    onSubmit={searchNews}
                >
                    <h2 className={styles.heading}> Encuentra noticias por categoria </h2>

                    <SelectNews/>

                    <div className="input-field col s12">
                        <input
                            type="submit"
                            className={`${styles.btn_block} btn-large amber darken-2`}
                            value="Buscar"
                        />
                    </div>
                </form>
            </div>
        </div>
      );
}


Form.propTypes = {
    setCategory: PropTypes.func.isRequired
}

 
export default Form;