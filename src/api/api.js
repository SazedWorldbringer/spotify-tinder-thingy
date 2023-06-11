import { Client, Account, Databases, Functions, Storage } from "appwrite";
import { Server } from "../lib/utils";

const client = new Client();

client
    .setEndpoint(Server.endpoint)
    .setProject(Server.project)

const account = new Account(client)

const databases = new Databases(client)

const functions = new Functions(client)

const storage = new Storage(client)

const googleSession = () => {
    account.createOAuth2Session('google');
}

export default { client, account, databases, functions, storage , googleSession }
