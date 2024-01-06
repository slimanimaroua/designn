import { Link } from "react-router-dom"
function Menu() {
    //créer un tableau contient les élément du menu
    let menu = [
        {
            label: "Accueil",//objet du tableau
            url: "/",//le lien vers l'objet
        },
        {
            label: "Bouquets",//objet
            url: "/bouquets",
        },
        {
            label: "Fleurs",//objet
            url: "/fleurs",
        },
        {
            label: "Mon Compte",//objet
            url: "/compte",
        },
    ]
    return (
        <div className="menu">
            <ul>

            </ul>

            <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Flowers</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            {
                                menu.map((link) => (<li key={link.label}><Link className="nav-link active" aria-current="page" to={link.url}>{link.label}</Link></li>))
                                //on a utiliser key pour que chaque element dans la liste aura uneclé unique prop
                            }

                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Menu;