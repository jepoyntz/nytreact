var React = require("react");

var Results = React.createClass({

    getInitialState: function(){
        return {
            title: "",
            url: "",
            pubdate: ""
        };

    },


    render: function(){

        return(
            <div className = "main-container">

                    <div className="row">
                        <div className="col-lg-12">

                            <div className="panel panel-primary">
                                <div className="panel-heading">
                                    <h1 className="panel-title"><strong><i className="fa fa-list-alt"></i>  Rockstar Results</strong></h1>
                                    <h2> {this.props.results} </h2>
                                </div>
                                <div className="panel-body">
                                    <ul className="list-group">
                                      <li className="list-group-item">

                                        <h3>
                                            <span><em>Christmas is Cancelled</em></span>
                                            <span className="btn-group pull-right" >
                                                <button className="btn btn-default ">View Article</button>
                                                <button className="btn btn-primary">Save</button>
                                            </span>
                                        </h3>
                                        <p>Date Published: 03/15/16</p>

                                      </li>

                                      <li className="list-group-item">

                                        <h3>
                                            <span><em>Children Refuse to Learn Lessons</em></span>
                                            <span className="btn-group pull-right" >
                                                <button className="btn btn-default ">View Article</button>
                                                <button className="btn btn-primary">Save</button>
                                            </span>
                                        </h3>
                                        <p>Date Published: 03/15/16</p>

                                      </li>

                                      <li className="list-group-item">

                                        <h3>
                                            <span><em>Kittens Will Attack</em></span>
                                            <span className="btn-group pull-right" >
                                                <button className="btn btn-default ">View Article</button>
                                                <button className="btn btn-primary">Save</button>
                                            </span>
                                        </h3>
                                        <p>Date Published: 03/15/16</p>


                                      </li>

                                      <li className="list-group-item">

                                        <h3>
                                            <span><em>JayZ Cheated</em></span>
                                            <span className="btn-group pull-right" >
                                                <button className="btn btn-default ">View Article</button>
                                                <button className="btn btn-primary">Save</button>
                                            </span>
                                        </h3>
                                        <p>Date Published: 03/15/16</p>

                                      </li>

                                      <li className="list-group-item">

                                        <h3>
                                            <span><em>Mud: Aliens Are Here?</em></span>
                                            <span className="btn-group pull-right" >
                                                <button className="btn btn-default ">View Article</button>
                                                <button className="btn btn-primary">Save</button>
                                            </span>
                                        </h3>
                                        <p>Date Published: 03/15/16</p>

                                      </li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>

            </div>
        )
    }

});

// Makes the component accessible for export
module.exports = Results;