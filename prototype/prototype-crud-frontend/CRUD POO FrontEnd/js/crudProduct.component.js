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
            url: "api/addProduct.php",
            method: "POST",
            data: {
                libelle: libelle.value,
                prix: prix.value,
                stock: stock.value,
                quantity: quantity.value,
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
                libelle: libelle.value,
                prix: prix.value,
                stock: stock.value,
                Quantity: Quantity.value,
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
                                <h5 className="modal-title" id="exampleModalCenterTitle">Ajouter Ouvrier</h5>
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
                                            <label htmlFor="inputName4">libelle</label>
                                            <input type="text" className="form-control Firstname" id="libelle" placeholder="libelle" />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="col-12">
                                            <label htmlFor="inputLast4">prix</label>
                                            <input type="number text" className="form-control Lastname" id="prix" placeholder="prix" />
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        
                                        <div className="form-group col-12">
                                            <label htmlFor="inputMatricule4">Stock</label>
                                            <input type="number" className="form-control Matricule" id="Stock" placeholder="Stock" />
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group col-12">
                                            <label htmlFor="inputEmail4">quantity</label>
                                            <input type="number" className="form-control Email" id="quantity" placeholder="quantity" />
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
                            <th scope="col">libelle</th>
                            <th scope="col">Prix</th>
                            <th scope="col">Stock</th>
                            <th scope="col">quantity</th>
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