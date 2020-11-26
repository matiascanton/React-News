import React from 'react';
import styles from'./Form.module.css';
import useSelect from '../hooks/useSelect';

const Form = () => {

    const OPTIONS = [
        {value: 'general', label: 'General'},
        {value: 'entertainment', label: 'Entretenimiento'},
        {value: 'sports', label: 'Deportes'},
        {value: 'science', label: 'Ciencia'},
    ]

    const [category, SelectNews] = useSelect('general', OPTIONS);

    return (
        <div className={`${styles.search} row`}>
            <div className="col s12 m8 offset-m2">
                <form>
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
 
export default Form;