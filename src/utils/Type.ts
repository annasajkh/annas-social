export type UserData = {
    uid: string;
    displayName: string;
    photoURL: string;
}

export type PostData = {
    uid: string;
    author: UserData;
    text: string;
    dateCreated: number;
}


export type Posts = {
    [key: string]: PostData;
}