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

const register = (email, password, name) => {
    return account.create("unique()", email, password, name)
}

const login = (email, password) => {
    return account.createEmailSession(email, password)
}

export default { client, account, databases, functions, storage, googleSession, login, register }
