import { useState, useEffect} from 'react';
import { RepositoryItem } from "./RepositoryItem";


import '../styles/repositories.scss'

interface Repository {
    name: string;
    description: string;
    html_url: string;
}

export function RepositoryList() {
    const [repositores, setRepositores] = useState<Repository[]>([]); //Informar que "<Repository[]>" é uma lista de repositórios, cfe interface

    useEffect(()=> {
        fetch('https://api.github.com/users/joaooliveiraa/repos')
        .then(response => response.json()) //converter a reposta pra json
        .then(data => setRepositores(data)) //setar na variavel repositories
    }, []);

    return(
        <section className="repository-list">
            <h1>Lista Repositórios</h1>

            <ul>
              {repositores.map(repository => {
                  return  <RepositoryItem key= {repository.name} repository = {repository}/>
              })}
            </ul>
        </section>
    );
}