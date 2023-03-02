<script lang="ts">
    import { auth, googleProvider } from "$lib/Firebase";
    import { GoogleAuthProvider, OAuthCredential, signInWithPopup } from "firebase/auth";
    import { user } from "../utils/Global";
    import Button from "./Button.svelte";
    import Heading from "./Heading.svelte";

    let SignUpWithGoogleOnClick = function (): void {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential : OAuthCredential | null = GoogleAuthProvider.credentialFromResult(result);
                
                if(credential != null) {
                    const token = credential.accessToken;
                    // The signed-in user info.
                    $user = result.user;
                    // IdP data available using getAdditionalUserInfo(result)
                    // ...
                }
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }
</script>

<form>
    <Heading type="h1" text="Sign Up" --background-color="whitesmoke"></Heading>
    <Button text="Sign Up with Google" 
            extendedClass="sign-up-button-logo full-width" 
            --background-image="url(https://kgo.googleusercontent.com/profile_vrt_raw_bytes_1587515358_10512.png)" 
            bind:onClick={SignUpWithGoogleOnClick}/>
</form>


<style>
    form {
        background-color: whitesmoke;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: auto;
        height: 100%;
        margin-left: 35%;
        margin-right: 35%;
        padding-left: 1.5%;
        padding-right: 1.5%;
        padding-top: 1%;
        padding-bottom: 1%;
    }
</style>