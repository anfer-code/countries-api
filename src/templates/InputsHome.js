const InputsHome = () => {
    const view =  /*html*/`
        <div class="input-group">
            <span class="input-group__image"><i class="fas fa-search"></i></span>
            <input class="toogle-element toogle-text" placeholder="Search for a country..." type="text" id="input-text">
        </div>

        <select class="toogle-element toogle-text select-toogle" id="input-select">
            <option value="" select>Filter by Region</option>
            <option value="africa">Africa</option>
            <option value="americas">America</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
        </select>`

return view
}

export default InputsHome