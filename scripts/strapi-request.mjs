import { writeFileSync } from "node:fs";


//regular
// const url = "http://127.0.0.1:1337/api/posts";

// with appended related fields, like img attributes
const url = "http://127.0.0.1:1337/api/posts" + "?populate=*";
const response = await fetch(url);
const body = await response.json();
const formatted = JSON.stringify(body, null, 2);
const file = "scripts/strapi-response.json";
// to write the response to a file
writeFileSync(file, formatted, "utf-8");


