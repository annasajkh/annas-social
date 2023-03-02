<script lang="ts">
    import { auth } from "$lib/Firebase";
    import { signOut } from "firebase/auth";
    import { push } from "firebase/database";
    import { postData, user, userDatabaseReference, userPostsDatabaseReference} from "../utils/Global";
    import Button from "./Button.svelte";
    import TextInput from "./TextInput.svelte";


    let textPost : string = "";

    function signOutOnClick() {
        signOut(auth).then(() => {
            $user = null;
            $userDatabaseReference = null;
        }).catch((error) => {

        });
    }

    function submitPost() {
        if($userPostsDatabaseReference != null && $user != null && textPost.trim() != "") {
            $postData = {
                authorUID: $user.uid, 
                authorDisplayName: $user.displayName!,
                authorPhotoURL: $user.photoURL!,
                text: textPost,
                dateCreated: new Date().getTime()
            };
            
            push($userPostsDatabaseReference, $postData);

            textPost = "";
        }        
    }
</script>


<div class="post-textbox">

    <div class="text-input">
        <TextInput placeHolder="Type something..." bind:value={textPost}/>
    </div>

    <div class="below-elements">
        <Button onClick={submitPost} text="Post" />
        <Button onClick={signOutOnClick} text="Log Out" />
    </div>
</div>

<style>
    .text-input {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .below-elements {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
    }

    .post-textbox {
        border: 3px solid white;
        width: 50%;
        height: 100%;
        position: sticky;
        top: 0;
        font-family: Arial;
        color: white;
        background-color: #144272;
        border-radius: 10px;
        margin-bottom: 20px;
        padding-left: 10px;
        padding-right: 10px;
        padding-top: 70px;
        padding-bottom: 10px;
    }
</style>