import React, { Component } from 'react';

class Categories extends Component {

    state = {
        category_name: ''
    }

    onChangeHandler = (e) => {
        e.preventDefault();
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmitHandler = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

    render() {        
        return (
            <div className='categories'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className='display-4 text-center'>Add Category</h1>

                            {/* Add Categories */}
                            <form onSubmit={this.onSubmitHandler} className='mt-3'>
                                <div className="form-group">
                                    <input type="text" name='category_name' className='form-control' onChange={this.onChangeHandler} />
                                </div>
                                <button type='submit' className='btn btn-primary'>Add category</button>
                            </form>

                            {/* Table of Categories */}
                            <table class="table mt-5">
                                <thead>
                                    <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Active</th>
                                        <th scope="col">Created At</th>
                                        <th scope="col">Updated At</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>1</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>
                                        <th>2</th>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>
                                    <tr>
                                        <th >3</th>
                                        <td>Larry</td>
                                        <td>the Bird</td>
                                        <td>@twitter</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Categories;