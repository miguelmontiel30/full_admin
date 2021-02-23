import { MDBInput } from 'mdbreact'
import React from 'react';
import { MDBCard, MDBCardBody, MDBIcon, MDBRow, MDBCol, MDBCardText } from 'mdbreact';

const AdminCardSection1 = () => {
  return (
    <MDBRow className="mb-4">
        <MDBCol xl="3" md="6" className="mb-r">
          <MDBCard className="cascading-admin-card">
              <div className="admin-up">
              <MDBIcon icon="money-bill-alt" className="primary-color"/>
                <div className="data">
                  <p>SALES</p>
                  <h4>
                    <strong>$2000</strong>
                  </h4>
                </div>
              </div>
              <MDBCardBody>
                <div className="progress">
                  <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="25" className="progress-bar bg-primary" role="progressbar"
                    style={{width: '25%'}}></div>
                </div>
                <MDBCardText>Better than last week (25%)</MDBCardText>
              </MDBCardBody>
            </MDBCard>
        </MDBCol>
        <MDBCol xl="3" md="6" className="mb-r">
          <MDBCard className="cascading-admin-card">
              <div className="admin-up">
              <MDBIcon icon="chart-line" className="warning-color"/>
                <div className="data">
                  <p>SUBSCRIPTIONS</p>
                  <h4>
                    <strong>200</strong>
                  </h4>
                </div>
              </div>
              <MDBCardBody>
                <div className="progress">
                  <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="25" className="progress-bar bg grey" role="progressbar"
                    style={{width: '25%'}}></div>
                </div>
                <MDBCardText>Worse than last week (25%)</MDBCardText>
              </MDBCardBody>
            </MDBCard>
        </MDBCol>
        <MDBCol xl="3" md="6" className="mb-r">
          <MDBCard className="cascading-admin-card">
              <div className="admin-up">
              <MDBIcon icon="chart-pie" className="light-blue lighten-1"/>
                <div className="data">
                  <p>TRAFFIC</p>
                  <h4>
                    <strong>20000</strong>
                  </h4>
                </div>
              </div>
              <MDBCardBody>
                <div className="progress">
                  <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="25" className="progress-bar grey darken-2" role="progressbar"
                    style={{width: '75%'}}></div>
                </div>
                <MDBCardText>Worse than last week (75%)</MDBCardText>
              </MDBCardBody>
            </MDBCard>
        </MDBCol>
        <MDBCol xl="3" md="6" className="mb-r">
          <MDBCard className="cascading-admin-card">
              <div className="admin-up">
              <MDBIcon icon="chart-bar" className="red accent-2"/>
                <div className="data">
                  <p>ORGANIC TRAFFIC</p>
                  <h4>
                    <strong>2000</strong>
                  </h4>
                </div>
              </div>
              <MDBCardBody>
                <div className="progress">
                  <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="25" className="progress-bar bg-primary" role="progressbar"
                    style={{width: '25%'}}></div>
                </div>
                <MDBCardText>Better than last week (25%)</MDBCardText>
              </MDBCardBody>
            </MDBCard>
        </MDBCol>
      </MDBRow>
  )
}


const Main = () => {

    return (

        <div className="container-fluid">

            {/* <CardExample/> */}
            {/* <CardExample_2 /> */}

            <AdminCardSection1/>            

            <section className="mt-md-4 pt-md-2 mb-5 pb-4">

                <div className="row">

                    <div className="col-xl-3 col-md-6 mb-xl-0 mb-4">

                        <div className="card card-cascade cascading-admin-card">

                            <div className="admin-up">
                                <i className="far fa-money-bill-alt primary-color mr-3 z-depth-2"></i>
                                <div className="data">
                                    <p className="text-uppercase">Ventas Mensuales</p>
                                    <h4 className="font-weight-bold dark-grey-text">$246,450</h4>
                                </div>
                            </div>

                            <div className="card-body card-body-cascade">
                                <div className="progress mb-3">
                                    <div className="progress-bar bg-success" style={{ width: "25%" }} aria-valuenow="25"
                                        aria-valuemin="0" aria-valuemax="100">
                                    </div>
                                </div>
                                <p className="card-text">
                                    Incremento comparado al mes de Octubre<strong>(25%)</strong>
                                </p>
                            </div>
                        </div>
                        {/* 
                                
                            </div>

                        </div> */}

                    </div>

                    <div className="form-group">
                        <MDBInput label="Large input" size="lg" />
                        <MDBInput label="Medium input" />
                        <MDBInput label="Small input" size="sm" />
                    </div>
                </div>

                {/* 

                    <div className="col-xl-3 col-md-6 mb-xl-0 mb-4">

                    



                            <div className="card-body card-body-cascade">
                                <div className="progress mb-3">
                                    <div className="progress-bar bg-success" role="progressbar" style="width: 25%" aria-valuenow="25"
                                        aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <p className="card-text">
                                    Incremento comparado al mes de Octubre
          <strong>
                                        (25%)
          </strong>
                                </p>
                            </div>


                        </div>


                    </div>



                    <div className="col-xl-3 col-md-6 mb-xl-0 mb-4">


                        <div className="card card-cascade cascading-admin-card">


                            <div className="admin-up">
                                <i className="fas fa-inventory danger-color mr-3 z-depth-2"></i>
                                <div className="data">
                                    <p className="text-uppercase">Stock Minimo</p>
                                    <h4 className="font-weight-bold dark-grey-text">50</h4>
                                </div>
                            </div>


                            <div className="card-body card-body-cascade">
                                <div className="progress mb-3">
                                    <div className="progress-bar red accent-2" role="progressbar" style="width: 5%" aria-valuenow="5"
                                        aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <p className="card-text">Total de los productos en stock minimo <strong>(5%)</strong></p>
                            </div>

                        </div>


                    </div>



                    <div className="col-xl-3 col-md-6 mb-md-0 mb-4">


                        <div className="card card-cascade cascading-admin-card">


                            <div className="admin-up">
                                <i className="fas fa-user-chart warning-color lighten-1 mr-3 z-depth-2"></i>
                                <div className="data">
                                    <p className="text-uppercase">Clientes Asociados</p>
                                    <h4 className="font-weight-bold dark-grey-text">35</h4>
                                </div>
                            </div>


                            <div className="card-body card-body-cascade">
                                <div className="progress mb-3">
                                    <div className="progress-bar warning-color accent-2" role="progressbar" style="width: 75%"
                                        aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <p className="card-text">Incremento de clientes comparado al mes de Octubre (75%)</p>
                            </div>

                        </div>


                    </div>



                    <div className="col-xl-3 col-md-6 mb-0">


                        <div className="card card-cascade cascading-admin-card">


                            <div className="admin-up">
                                <i className="fas fa-pallet-alt success-color accent-2 mr-3 z-depth-2"></i>
                                <div className="data">
                                    <p className="text-uppercase">Compras del Mes</p>
                                    <h4 className="font-weight-bold dark-grey-text">2000</h4>
                                </div>
                            </div>


                            <div className="card-body card-body-cascade">
                                <div className="progress mb-3">
                                    <div className="progress-bar bg-success" role="progressbar" style="width: 42%" aria-valuenow="42"
                                        aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <p className="card-text">Incremento comparado al mes de Octubre <strong>(42%)</strong></p>
                            </div>

                        </div>


                    </div>


                </div>

                <section className="row mt-4">


                    <div className="col-xl-3 col-md-6 mb-4">


                        <div className="card">


                            <div className="row mt-3">


                                <div className="col-md-5 col-5 text-left pl-4">

                                    <a type="button" className="btn-floating btn-lg primary-color ml-4">
                                        <i className="far fa-hands-usd" aria-hidden="true"></i>
                                    </a>

                                </div>



                                <div className="col-md-7 col-7 text-right pr-5">

                                    <h5 className="ml-4 mt-4 mb-2 font-weight-bold">$4,567</h5>

                                    <p className="font-small grey-text">Total de Ventas de hoy</p>
                                </div>


                            </div>


                        </div>


                    </div>



                    <div className="col-xl-3 col-md-6 mb-4">


                        <div className="card">


                            <div className="row mt-3">

                                <div className="col-md-5 col-5 text-left pl-4">
                                    <a type="button" className="btn-floating btn-lg red accent-2 ml-4">
                                        <i className="fas fa-warehouse" aria-hidden="true"></i>
                                    </a>
                                </div>

                                <div className="col-md-7 col-7 text-right pr-5">
                                    <h5 className="ml-4 mt-4 mb-2 font-weight-bold">405,567</h5>
                                    <p className="font-small grey-text">Total de Productos en almacen</p>
                                </div>

                            </div>


                        </div>


                    </div>



                    <div className="col-xl-3 col-md-6 mb-4">


                        <div className="card">


                            <div className="row mt-3">


                                <div className="col-md-5 col-5 text-left pl-4">

                                    <a type="button" className="btn-floating btn-lg warning-color ml-4">
                                        <i className="fas fa-user" aria-hidden="true"></i>
                                    </a>

                                </div>



                                <div className="col-md-7 col-7 text-right pr-5">

                                    <h5 className="ml-4 mt-4 mb-2 font-weight-bold">20</h5>
                                    <p className="font-small grey-text">Usuarios en el Sistema</p>

                                </div>


                            </div>


                        </div>


                    </div>



                    <div className="col-xl-3 col-md-6 mb-4">


                        <div className="card">


                            <div className="row mt-3">


                                <div className="col-md-5 col-5 text-left pl-4">

                                    <a type="button" className="btn-floating btn-lg success-color ml-4">
                                        <i className="fas fa-cart-plus" aria-hidden="true"></i>
                                    </a>

                                </div>



                                <div className="col-md-7 col-7 text-right pr-5">

                                    <h5 className="ml-4 mt-4 mb-2 font-weight-bold">5</h5>
                                    <p className="font-small grey-text">Ordenes de compra en proceso</p>

                                </div>


                            </div>


                        </div>


                    </div>


                */}
            </section>
        </div >
    )
}

export default Main
