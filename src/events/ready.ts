import { Event } from "../structures/Event";
import { client } from ".."


export default new Event("ready", async () => {
    try {
        client.user?.setActivity("over issues", { type: "WATCHING" });
    } catch (e) { }
});
