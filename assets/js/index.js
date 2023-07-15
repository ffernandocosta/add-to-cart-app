import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue, remove} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://realtime-database-b8787-default-rtdb.firebaseio.com/"
}

const app = initializeApp(appSettings);
const database = getDatabase(app);
const shoppingListInDB = ref(database, "shoppingList");

const inputFieldEl = document.getElementById('input-field');
const addButtonEl = document.getElementById('add-button');
const shoppingListEl = document.getElementById('shopping-list');

addButtonEl.addEventListener('click', () => {
    const inputValue = inputFieldEl.value
    clearInputFieldEl();
    clearShoppingListEl();
    push(shoppingListInDB, inputValue);
});

onValue(shoppingListInDB, (snapshot) => {
    if (snapshot.exists()) {
        let itemsArray = Object.entries(snapshot.val());

        clearShoppingListEl
        
        for (let i = 0; i < itemsArray.length; i++) {
            let currentItem = itemsArray[i];
            let currentItemID = currentItem[0];
            let currentItemValue = currentItem[1];

            appendItemToShoppingListEl(currentItem)
        }
    }
    else {
        shoppingListEl.innerHTML = "No items here... yet!"
    }
})

const clearShoppingListEl = () => shoppingListEl.innerHTML = ""

const clearInputFieldEl = () => inputFieldEl.value = ""

const appendItemToShoppingListEl = (item) => { 
    let itemID = item[0]
    let itemValue = item[1];
    let newEl = document.createElement("li");

    newEl.textContent = itemValue;

    shoppingListEl.append(newEl);

    newEl.addEventListener('click', () => {
        let exactLocationOfItemInDB = ref(database, `shoppingList/${itemID}`);

        remove(exactLocationOfItemInDB);
    })
}