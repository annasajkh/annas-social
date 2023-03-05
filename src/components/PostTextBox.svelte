<script lang="ts">
    import { auth, database } from "$lib/Firebase";
    import { signOut } from "firebase/auth";
    import { push, ref, update, type DatabaseReference } from "firebase/database";
    import { openPopup, postData, user} from "../utils/Global";
    import Button from "./Button.svelte";
    import TextInput from "./TextInput.svelte";


    let textPost : string = "";

    function onSignOutClicked() {
        $openPopup = true;
        signOut(auth).then(() => {
            $user = null;
        }).catch((error) => {

        });
    }

    function onSubmitClicked() {
        if($user != null && textPost.trim() != "") {
            $postData = {
                uid: "",
                author: {
                    uid: $user.uid, 
                    displayName: $user.displayName!,
                    photoURL: $user.photoURL!,
                },
                text: textPost,
                dateCreated: new Date().getTime()
            };
            
            push(ref(database, "/posts"), $postData)
            .then((newPostReference : DatabaseReference) => {
                update(newPostReference, {"uid": newPostReference.key}); 
            });

            textPost = "";
        }        
    }
</script>


<div class="post-textbox">

    <div class="text-input">
        <TextInput placeHolder="Type something..." bind:value={textPost}/>
    </div>

    <div class="below-elements">
        <Button onClick={onSubmitClicked} text="Post" />
        <Button onClick={onSignOutClicked} text="Log Out" />
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