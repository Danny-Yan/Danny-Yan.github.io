import UPNG from "upng-js";
const input = document.getElementById("form") as HTMLInputElement;

input.onchange = async (ev) => {
    const file = input.files?.[0];
    if (!file) return;
    if (file.type !== "image/png") return;
    const result = UPNG.decode(await file.arrayBuffer());
    console.log(result);
};