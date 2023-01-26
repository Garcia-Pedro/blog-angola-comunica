import axios from "axios";
import React, {useEffect, useState} from "react";

/*-------------  Components ---------------*/
import Article from "./Article";
import Carrousel from "./Carrousel";
import searchIcon from '../assets/images/search.svg';

/*----------------- CSS ----------------*/
import './css/search.scss';

const SearchArticle = () => {
    const [search, setSearch] = useState('');
    const [articles, setArticle] = useState([]);
    
    const params = {};

    if(search)
    {
        params.title_like = search;
    }

    useEffect(() => {
        axios.get('http://localhost:5000/articles?_embed=comments', {params})
        .then((response) => {
            setArticle(response.data);
        });

    }, [search]);

    return(
        <>
            <div className="input fade-in">
                <input 
                    type="text" 
                    placeholder='Procurar Artigo'
                    value={search} 
                    onChange = {(ev) => setSearch(ev.target.value)}
                />
                <button>
                    <img src={searchIcon} alt="" />
                </button>
            </div>

            <Carrousel>
                {
                    articles.length ? articles.map((article) => (
                        <Article article={article} />
                    )) : 'Sem Artigos...'
                }
            </Carrousel>
        </>
    );
}


export default SearchArticle;