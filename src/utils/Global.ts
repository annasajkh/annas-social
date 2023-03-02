import type { User } from 'firebase/auth';
import type { DatabaseReference } from 'firebase/database';
import { writable, type Writable } from 'svelte/store';
import type { PostData } from './Type';


export const user : Writable<User> | null = writable<User>();
export const userDatabaseReference : Writable<DatabaseReference> | null = writable<DatabaseReference>();
export const userPostsDatabaseReference : Writable<DatabaseReference> | null = writable<DatabaseReference>();

export const postData : Writable<PostData> | null = writable<PostData>();
export const dateNow : Writable<number> = writable<number>(Date.now());