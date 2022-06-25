import "./HeaderTop.css"

function HeaderTop() {
    return (
        <div class="header_container">
            <div class="header_left">
                <a href="/">
                    <img src="https://s1.vnecdn.net/vnexpress/restruct/i/v617/v2_2019/pc/graphics/logo.svg" alt="vnexpress" />
                </a>
            </div>
            <div class="header_right">
                <button class="btn-header">Mới nhất</button>
                <button class="btn-header">International</button>
                <form action="GET">
                    <input class="input-search" type="text" placeholder="Tìm kiếm"></input>
                    <button type="button"></button>
                </form>
            </div>
        </div>
    );
}

export default HeaderTop;
