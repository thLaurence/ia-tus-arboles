export interface NoticiasApple {
    status: string;
    totalResults: number;
    articles: Article[];
}

export interface Article {
    source: SourceBuffer;
    author?: string;
    tittle: string;
    description: string;
    url: string;
    urlToImage?: string;
    publishedAt: string;
    content: string;
}

export interface Source {
    id?: string;
    name: string;
}