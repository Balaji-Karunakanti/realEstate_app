import {Client,Avatars, Account, OAuthProvider,} from "appwrite"
import * as Linking from 'expo-linking'; 
export const config = {
    platform: 'com.BK.RealEstate',
    endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
    projectId:process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID
}


export const client = new Client();

client
     .setEndpoint(config.endpoint!)
     .setProject(config.projectId!)
     
  
export const avatar = new Avatars(client);
export const account = new Account(client);

export async function login(){
  try{
      const redirectUri = Linking.createURL('/');

      const response = await account.createOAuth2Token(OAuthProvider.Google, redirectUri)

      if(!response) throw new Error("Failed to login");
      const browserResult = await openAuthSessionAsync(
        response.toString(),
        redirectUri
      )

      if(browserResult.type !== 'success') throw new Error("Failed")

    const url =new URL(browserResult.url);
    cosnt secret = url.searchParams.get('secret')?.toString();
    cosnt userId = url.searchParams.get('secret')?.toString();
  }catch(error){
    console.error(error);
    return false;
  }
}

function openAuthSessionAsync() {
  throw new Error("Function not implemented.");
}
