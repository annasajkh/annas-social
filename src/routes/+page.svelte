<script lang="ts">
    import { auth, database } from "$lib/Firebase";
    import { onAuthStateChanged, type User } from "firebase/auth";
    import { DataSnapshot, onValue, ref, remove } from "firebase/database";
    import Login from "../components/Login.svelte";
    import Post from "../components/Post.svelte";
    import PostTextBox from "../components/PostTextBox.svelte";
    import UserProfile from "../components/UserProfile.svelte";
    import { dateNow, user, posts } from "../utils/Global";
    import type { PostData } from "../utils/Type";

    let opened : boolean = false;
    
    onAuthStateChanged(auth, (usr : User | null)=> {
        if(usr) {
            $user = usr
        }
    });

    
    onValue(ref(database, "/posts"), (snapshot : DataSnapshot) => {
        let jsonPosts = snapshot.val();
        $posts = [];

        if(jsonPosts != null) {
            let postsIDs : Array<string> = Object.keys(jsonPosts);

            for(let key of postsIDs) {
                $posts.push(jsonPosts[key]);
            }

            $posts.sort((a : PostData, b : PostData) => {
                return a.dateCreated - b.dateCreated;
            });

            $posts.reverse();
        }
    });

    
    opened = true;

    setInterval(()=> {
        $dateNow = Date.now();
    }, 500)

</script>


{#if $user}
    <UserProfile />

    <div class="main-page">
        <PostTextBox />
        {#each $posts as post}
            <Post name={post.author.displayName} userImageUrl={post.author.photoURL} postText={post.text} dateCreated={post.dateCreated}></Post>
        {/each}
    </div>
{:else}
    <Login />
{/if}

<style>
    :global(body) {
        background-color: #0A2647;
    }

    .main-page {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
</style>