import { Client as Appwrite, Databases, Account } from "appwrite"
import { Server } from "../utils/config"

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

    createAccount: () => {
        api.provider().account.createOAuth2Session("spotify", `${window.location.origin}/you`, `${window.location.origin}/`, ['user-top-read', 'user-follow-read', 'user-read-currently-playing'])
    },

    getAccount: () => {
        let account = api.provider().account
        return account.get()
    },

    getSession: () => {
        return api.provider().account.getSession("current")
    },

    deleteSession: () => {
        return api.provider().account.deleteSession("current")
    },
}

export default api
