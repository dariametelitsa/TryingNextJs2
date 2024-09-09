import type { NextApiRequest, NextApiResponse } from 'next'

type Data = Books[]

const booksDB = [
    {id: 1, title: 'Hey'},
    {id: 2, title: 'Yes'},
    {id: 3, title: 'Simple'},
];

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    if(req.method === 'GET') {
        let books = booksDB;
        const term = req.query.term as string;
        if(term){
            books = books.filter(book => (book.title.toLowerCase().includes((term.toLowerCase()))));
        }
        await res.revalidate('/characters');
        res.status(200).json(books);
    }
    if(req.method === "POST") {}
}

type Books = {
    id: number
    title: string
}
