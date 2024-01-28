import React from "react";

const Dashboard = () => {
    return (
        <div className="row">
            <div className="col-lg-6">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title mb-2">Latest Product Sale</h5>

                        <table
                            id=""
                            className="table table-bordered table-striped"
                        >
                            <thead>
                                <tr>
                                    <th>Product Name</th>
                                    <th>Quantity</th>
                                    <th>Date</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* @foreach($sales as $sale)
                <tr>
                  <td>{{$sale->product_name}}</td>
                  <td>{{$sale->pro_quantity}}</td>
                  <td>{{$sale->dob}}</td>
                  <td>{{$sale->total}}</td>
                </tr>
              @endforeach */}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {/* <!-- /.col-md-6 --> */}
            <div className="col-lg-6">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title mb-2">Service</h5>
                        <table
                            id=""
                            className="table table-bordered table-striped"
                        >
                            <thead>
                                <tr>
                                    <th>Bike </th>
                                    <th>Customer</th>
                                    <th>Date</th>
                                    <th>Service Type</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* @foreach($bikeservices as $service)
                <tr>
                  <td>{{$service->bike_name}}</td>
                  <td>{{$service->client_name}}</td>
                  <td>{{$service->f_date}}</td>
                  <td>{{$service->service_type}}</td>
                </tr>
              @endforeach */}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {/* <!-- /.col-md-6 --> */}
        </div>
    );
};

export default Dashboard;
