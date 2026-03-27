export function Cats() {
    return <div>cats</div>

    async function getData() {
        const url = "https://mediacollege.dev/api/cats";
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }

            const result = await response.json();
            console.log(result);
        } catch (error) {
            console.error(error.message);
        }
    }
}