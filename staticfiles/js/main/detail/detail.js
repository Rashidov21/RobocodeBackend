function openModal(){
	q(".modal").classList = "modal open_modal"

}

function closeModal(){
	q(".modal").classList = "modal"
}

function selected(id){
    let option = q("select").querySelector(`option[value="${id}"]`)
    option.setAttribute("selected","")
}
