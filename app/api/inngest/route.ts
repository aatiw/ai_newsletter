import {serve} from "inngest/next";
import { inngest } from "@/lib/inngest/function/client";
import { functions } from "@/lib/inngest/function/function";

export const {GET, POST, PUT} = serve({client: inngest, functions});