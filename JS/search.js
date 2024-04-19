document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("search-input")?.addEventListener("input", async ({ target: { value } }) => {
        const items = document.getElementsByClassName("item");

        await Array.from({ length: items.length }, async (_, index) => {
            const item = items.item(index);

            const valueLower = `${value}`.toLowerCase();
            const title = `${item.children[0].textContent}`.toLowerCase();
            const price = `${item.children[2].textContent}`.toLowerCase();

            if (title.includes(valueLower) || price.includes(valueLower)) {
                item.classList.remove("item-hide");
            } else {
                item.classList.add("item-hide");
            }
        });

        const itemsHide = document.getElementsByClassName("item-hide");
        const emptyResult = document.getElementById("empty-result");

        if (items.length === itemsHide.length) {
            emptyResult.style.display = "flex";
        } else {
            emptyResult.style.display = "none";
        }
    });
});
