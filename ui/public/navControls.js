export function handleOnClick(id){
    const className = document.getElementById(id).class;
    if (className === "active"){
        className.remove("active");
    } else {
        className.add("active")
    }
}