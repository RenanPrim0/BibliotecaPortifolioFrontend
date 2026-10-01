"use client";

import {useLivros} from "@/hooks/use-livros";
import{
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";

export default function Home() {
  const {livros, carregando, erro} = useLivros();

  return (
    <div className="flex flex-col items-center min-h-screen bg-zinc-50 dark:bg-black">
      <main className="w-full max-w-3xl px-6 py-16">
        <h1 className="text-3xl font-semibold mb-8">Livros</h1>

        {carregando && <p>Carregando livros...</p>}
        {erro && <p className="text-red-500">Erro: {erro}</p>}

        <div className="flex flex-col gap-4">
          {livros.map((livro) => (
            <Card key={livro.id}>
              <CardHeader>
                <CardTitle>{livro.titulo}</CardTitle>
                <CardDescription>{livro.autorNome}</CardDescription>
              </CardHeader>
              <CardContent className="flex items-center gap-2">
                <Badge>{livro.genero}</Badge>
                <span className="text-sm text-zinc-500">
                  {livro.anoPublicacao} · {livro.quantidade} disponível(is)
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}