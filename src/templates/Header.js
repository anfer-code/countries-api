const Header = () => {
    
    const view = /*html*/`
        <div class="header__container">
            <div class="header__logo">
                <a class="toogle-text" href="#">
                    Where in the world?
                </a>
            </div>

            <div id="toogle" class="toogle-mode">
                <p class="toogle-element toogle-text"><i class="far fa-moon"></i> Dark Mode</p>
            </div>
        </div>
    `
    return view
}

export default Header