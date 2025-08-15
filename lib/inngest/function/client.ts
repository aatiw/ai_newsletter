import { Inngest } from "inngest";

export const inngest = new Inngest({
    id: "ai-newsletter",
    eventKey: process.env.INNGEST_EVENT_KEY,
    signingKey: process.env.INNGEST_SIGNING_KEY,
})