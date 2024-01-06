import React, { Component } from "react"
class BouquetList extends Component {
    state = {
        likes: this.props.Bouquet.liked
        //un tableau pour mes like qui accepte un objet qui a des variable en forme initialle les like dans le tableau
    }
    handelLike = () => {//avoir l'acces a modifier le like
        this.setState({//une fonction qui recoi un objet
            likes:!this.state.likes
            //likes c une variable qui va recevoir le contraire je qulique sur une et les autres ne change pas
        })
    }
    
    render() {
        return (
            <div className="bouquet_list">
                <div className="col">
                    <div className="card" style={{ width: "18rem" }}>
                        <img src={this.props.Bouquet.image} className="card-img-top" alt={this.props.Bouquet.nom} />
                        <div className="card-body">
                            <h5 className="card-title">{this.props.Bouquet.nom}</h5>
                            <p className="card-text">{this.props.Bouquet.descr}</p>
                            <a className={this.state.likes? "btn btn-success" : "btn btn-primary"} onClick={() => this.handelLike()}>
                                {this.state.likes? "i like it" : "like"}
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
export default BouquetList; 