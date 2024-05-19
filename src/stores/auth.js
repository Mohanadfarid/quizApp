import { ref } from "vue";
import { defineStore } from "pinia";

export const useAuthStore = defineStore("authStore", () => {
    const id = ref(null);
    const name = ref(null);
    const email = ref(null);
    const token = ref(localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')) : null);

    const authenticate = async (credentials, url) => {
        try {
            const res = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(credentials),
            });
            const data = await res.json();

            //setting the values of the store

            email.value = data.message.email;
            id.value = data.message.id;
            name.value = data.message.name;
            token.value = data.token;

            //storing the token in the localStorage
            localStorage.setItem("token", JSON.stringify(token.value));
        } catch (error) {
            console.log(error);
        }
    };

    const logout = () => {
        //clearing the data from the server
        try {
            fetch("https://front.astra-tech.net/quiz/public/api/teacher/logout", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token.value}`,
                },
            });
            //clearing the data locally
            email.value = null;
            id.value = null;
            name.value = null;
            token.value = null;
            localStorage.removeItem("token");
        } catch (error) {
            console.log(error);
        }
    };
    return { id, name, token, email, authenticate, logout };
});
