<script lang="ts">
    import { auth, database } from "$lib/Firebase";
    import { onAuthStateChanged, type User } from "firebase/auth";
    import { DataSnapshot, onValue, ref } from "firebase/database";
    import Login from "../components/Login.svelte";
    import Post from "../components/Post.svelte";
    import PostTextBox from "../components/PostTextBox.svelte";
    import UserProfile from "../components/UserProfile.svelte";
    import { dateNow, user, userDatabaseReference, userPostsDatabaseReference } from "../utils/Global";
    import type { PostData } from "../utils/Type";

    let postDataArray : Array<PostData> = [];


    onAuthStateChanged(auth, (usr : User | null)=> {
        if(usr) {
            $user = usr
            $userDatabaseReference = ref(database, "users/" + $user.uid)
            $userPostsDatabaseReference = ref(database, "users/" + $user.uid + "/posts/")
        }
    })

    
    onValue(ref(database, "users/"), (snapshot : DataSnapshot) => {
        postDataArray = [];

        let data = snapshot.val();

        if(data != null) {
            const usersData : any = Object.values(data);

            let userPosts : Array<PostData> = [];
            
            for(let userData of usersData) {
                let userDataValue : Array<PostData> = Object.values(userData["posts"]);
                
                userPosts.push(...userDataValue);
            }

            postDataArray.push(...userPosts);

            postDataArray.sort((a : PostData, b : PostData) => {
                return a.dateCreated - b.dateCreated;
            });

            postDataArray.reverse();
        }
    })

    setInterval(()=> {
        $dateNow = Date.now();
    }, 500)
</script>


{#if $user}
    <UserProfile />
    <div class="main-page">
        <PostTextBox />
        {#each postDataArray as post}
            <Post name={post.authorDisplayName} userImageUrl={post.authorPhotoURL} postText={post.text} dateCreated={post.dateCreated} dateNow={$dateNow}></Post>
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