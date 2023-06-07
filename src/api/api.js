import { Client as Appwrite, Databases, Account } from "appwrite"
import { Server } from "../lib/utils";

let api = {
    sdk: null,

    provider: () => {
        if (api.sdk) {
            return api.sdk
        }
        let appwrite = new Appwrite();
        appwrite
            .setEndpoint(Server.endpoint)
            .setProject(Server.project)
        const account = new Account(appwrite)
        const database = new Databases(appwrite)

        api.sdk = { database, account }
        return api.sdk
    },

    createAccount: (email, password, name) => {
        api.provider().account.create("unique()", email, password, name)
    },

    getAccount: () => {
        let account = api.provider().account
        return account.get()
    },

    createSession: (email, password) => {
        return api.provider().account.createEmailSession(email, password)
    },

    getSession: () => {
        return api.provider().account.getSession("current")
    },

    deleteSession: () => {
        return api.provider().account.deleteSession("current")
    },
}

export default api
