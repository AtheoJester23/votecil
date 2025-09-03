import { Subtitles } from "lucide-react";
import { defineField, defineType } from "sanity";

export const admins = defineType({
    name: 'admin',
    title: "Admin",
    type: "document",
    fields: [
        defineField({
            name: "adminname",
            title: "Adminname",
            type: "string",
        }),
        defineField({
            name: "email",
            title: "Email",
            type: "string",
        }),
        defineField({
            name: "password",
            title: "Password",
            type: "string",
        })
    ],
    preview: {
        select: {
            title: "adminname",
            subtitle: "email"
        }
    }
})