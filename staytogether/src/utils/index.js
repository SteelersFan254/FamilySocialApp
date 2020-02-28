
const search_i_e = $("#search_i");
const search_form_f_e = $("#search_form_f");


const get_search_result = () => {
    let search_result = search_i_e.val();
    // search_result = search_result.replace(/[^\w\s]/gi, "");
    window.open(`/map/${search_result}`, "_self");
    
};


search_form_f_e.on("submit", (event) => {
    event.preventDefault();
    get_search_result();
});
