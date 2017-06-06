import {isNullOrUndefined} from "util";
export class Init {
    load() {
        if (localStorage.getItem("todos") === null || localStorage.getItem("todos") == undefined) {
            console.log("no todos found, creating...");
            var todos = [
                {text: "cay yap"},
                {text: "yemek yap"},
                {text: "bulasiklari yika"}
            ];

            localStorage.setItem("todos", JSON.stringify(todos));
        } else {
            console.log("found todos");
        }
    }
}