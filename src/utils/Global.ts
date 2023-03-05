import type { User } from 'firebase/auth';
import { writable, type Writable } from 'svelte/store';
import type { PostData } from './Type';



export const user : Writable<User> | null = writable<User>();

export const postData : Writable<PostData> | null = writable<PostData>();
export const dateNow : Writable<number> = writable<number>(Date.now());
export const openPopup : Writable<boolean> = writable<boolean>();
export const posts : Writable<Array<PostData>> = writable<Array<PostData>>([]);