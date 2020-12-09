/**
 * If you try to open a web-page locally, via file:// protocol, you’ll find that import/export directives don’t work.
 * Use a local web-server, such as static-server or use the “live server” capability of your editor, 
 * such as VS Code Live Server Extension to test modules.
 */

//Understand the Differences Between import and require
import { capitalizeString } from "./string_function"
const cap = capitalizeString("hello!");

console.log(cap);

//Use export to Reuse a Code Block
const capitalizeString = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export { capitalizeString };

export const foo = "bar";
export const bar = "foo";

//Use * to Import Everything from a File
import * as capitalizeStrings from "capitalize_strings";

//One thing from a file
//Create an Export Fallback with export default
export default function subtract(x,y) {return x - y;}


//Import a Default Export
import subtract from "math_functions";
subtract(7,4);