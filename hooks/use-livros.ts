"use client";

import {useState, useEffect} from "react";

type Livro = {
    id: number;
    titulo: string;
    anoPublicacao: number;
    genero: string;
    quantidade: number;
    autorNome: string;
};

export function useLivros() {

    const [livros, setLivros] = useState<Livro[]>([]);

    const [carregando, setCarregando] = useState<boolean>(true);

    const [erro, setErro] = useState<string | null>(null);

    useEffect(() => {
        fetch("http://localhost:8080/livro")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Erro ao buscar livros");
                }
                return response.json();
            })
            .then((data) => {
                setLivros(data);
            })
            .catch((error) => {
                setErro(error.message);
            })
            .finally(() => {
                setCarregando(false);
            });
    }, []);

    return { livros, carregando, erro };
}