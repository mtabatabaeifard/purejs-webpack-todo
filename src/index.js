import "./css/styles.css"
import {handleCreateNewTodo} from "./controller/handleCreateTodo.js";
import { toastify } from "./components/toastify.js";

const submitTodoButton = document.getElementById("submit");

submitTodoButton.addEventListener("click", handleCreateNewTodo);