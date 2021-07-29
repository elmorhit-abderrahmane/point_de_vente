// Application
class CrudProduct extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            productsArray: []
        };
    }
    componentDidMount() {
        this.chargementDonnees();
    }
    chargementDonnees() {

        var productsArray = null;

        // affichage de données par Ajax

        $.getJSON("/api/getProduct.php",
            function (data) {
                this.setState({ productsArray: data });
            }.bind(this))
            .fail(function (jqXHR, textStatus, errorThrown) {
                console.log(errorThrown);
            });
    }
    //add product
    addproduct(e) {
        $.ajax({
            url: "/api/addProduct.php",
            method: "POST",
            data: {
                Firstname: Firstname.value,
                Lastname: Lastname.value,
                Matricule: Matricule.value,
                Email: Email.value,
            },
            success: function (data) {
                this.chargementDonnees()
                $("#exampleModalCenter").modal('hide');
                console.log(data)
            }.bind(this)
        })
        e.preventDefault();
    }
    // Remove product
    removeproduct(i) {
        $.ajax({
            url: "/api/deleteProduct.php",
            method: "POST",
            data: {
                id: i
            },
            success: function (data) {
                //   $(this).parent().remove();
                this.chargementDonnees()
            }.bind(this)
        })

    }
    //update product
    updateproduct(i) {
        $.ajax({
            url: "api/updateProduct.php",
            method: "POST",
            data: {
                id : i,
                Firstname: Firstname.value,
                Lastname: Lastname.value,
                Matricule: Matricule.value,
                Email: Email.value,
            },
            success: function (data) {
                this.chargementDonnees()
                console.log(data)
            }.bind(this)
        })
        e.preventDefault();
    }






    onChangeInput(e) {
        // this.setState({value: e.target.value})
    }

    render() {
        let productsArray = this.state.productsArray.map((product) => {
            return (
                <Product
                    key={product.id}
                    product={product}
                    onClickClose={this.removeproduct.bind(this, product.id)}
                    onClickUpdate= {this.updateproduct.bind(this,product.id)}
                />
            )
        })

        return (
            <div className="container">
                {/* ADD Model */}
                <div className="modal fade" id="exampleModalCenter" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalCenterTitle">Elmorhit Abdebderrahmane</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form
                                    id="form-add"
                                    className="form-horizontal"
                                    onSubmit={this.addproduct.bind(this)}>


                                    <div className="form-row">
                                        <div className="col-12">
                                            <label htmlFor="inputName4">Nom</label>
                                            <input type="text" className="form-control Firstname" id="Firstname" placeholder="Nom" />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="col-12">
                                            <label htmlFor="inputLast4">Acheter la quantité</label>
                                            <input type="text" className="form-control Lastname" id="Lastname" placeholder="Acheter la quantité" />
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group col-12">
                                            <label htmlFor="inputMatricule4">Vendre la quantité</label>
                                            <input type="number" className="form-control Matricule" id="Matricule" placeholder="Vendre la quantité" />
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group col-12">
                                            <label htmlFor="inputEmail4">Créé à</label>
                                            <input type="number" className="form-control Email" id="Email" placeholder="Créé à" />
                                        </div>
                                    </div>

                                    <div className="input-group text-right">
                                        <div className="input-group-btn">
                                        <button type="submit" className="btn btn-primary submit ">AJOUTER OUVRIER</button>
 
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                            </div>
                        </div>
                    </div>
                </div>
                <table className="table table-hover">
                    <thead className="thead">
                        <tr>
                            <th scope="col">Nom</th>
                            <th scope="col">Acheter la quantité</th>
                            <th scope="col">Vendre la quantité</th>
                            <th scope="col">Créé à</th>
                            <th scope="col"></th>
                            <th scope="col"></th>


                        </tr>
                    </thead>
                    <tbody>
                        {productsArray}
                    </tbody>
                </table>
            </div>
        )
    }
}