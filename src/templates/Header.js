const Header = () => {
    const view = `
        <div class="Header-main">
            <div class="Header-logo">
                <h1>
                    <a href="/">
                        Rick and Morty
                    </a>
                </h1>
            </div>
            <header class="Header-nav">
                <a href="#/about/">About</a>
            </header>
        </div>
    `
    return view
}

export default Header