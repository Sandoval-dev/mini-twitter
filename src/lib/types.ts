export type ID=string;

export type User = {
    id: ID;
    username: string;
    password: string;
    avatarUrl?: string;
    createadAt: string;
}

export type Post = {
    id: ID;
    authorId: ID;
    content: string;
    image?: string;
    likes:number;
    createdAt: string;
}

export type ApiResponse<T> = {
    ok:boolean;
    data?: T;
    error?: string;
}