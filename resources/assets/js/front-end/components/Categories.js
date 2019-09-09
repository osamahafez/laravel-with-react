import React, { Component } from 'react';
import axios from 'axios';

class Categories extends Component {

    state = {
        category_name: '',
        categories: null
    }

    onChangeHandler = (e) => {
        e.preventDefault();
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmitHandler = (e) => {
        e.preventDefault();

        const data = {
            category_name: this.state.category_name
        } 
        axios.post('api/categories/store', data)
            .then(() => {
               console.log('category created successfully')
            })
            .catch(err => {
                console.log(err)
            })
    }

    componentDidMount() {
        axios.get('api/categories/all')
            .then(res => {
                this.setState({categories: res.data})
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {        

        let tableContent;

        if(this.state.categories) {
            tableContent = this.state.categories.map(cat => 
                <tr key={cat.id}>
                    <td>{cat.name}</td>
                    <td>{(cat.active) ? 'Active' : 'Inactive'}</td>
                    <td>{cat.created_at}</td>
                    <td>{cat.updated_at}</td>
                </tr>
            );
        }

        


        return (
            <div className='categories'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className='display-4 text-center'>Add Category</h1>
                            <div>
                                
                            </div>
                            {/* Add Categories */}
                            <form onSubmit={this.onSubmitHandler} className='mt-3'>
                                <div className="form-group">
                                    <input type="text" name='category_name' className='form-control' onChange={this.onChangeHandler} />
                                </div>
                                <button type='submit' className='btn btn-primary'>Add category</button>
                            </form>

                            {/* Table of Categories */}
                            <table className="table mt-5">
                                <thead>
                                    <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Active</th>
                                        <th scope="col">Created At</th>
                                        <th scope="col">Updated At</th>
                                    </tr>
                                </thead>
                                <tbody>
                                   {tableContent}
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