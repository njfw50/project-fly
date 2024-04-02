import { citySuggestions } from "./data/oldData.js";

for (const element of citySuggestions) {
    if (element.code === "ATL") {
        console.log(element)
    }

    if (element.name.includes("Brazil")) {
        console.log(element)  
    }
}