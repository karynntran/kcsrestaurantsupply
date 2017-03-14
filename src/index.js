import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import data from './data/data';

import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';

import SearchBar from './components/search_bar';
import RecipesList from './components/recipes_list';



// create a new component. this component should produce some html

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			data: '',
			sortedData: ''
		};
		this.loaded = false;
		// this._filterList = this._filterList.bind(this);
		// this._filterByCategory = this._filterByCategory.bind(this);

		// console.log(this.state.recipes)
	}

	fetchData(){
		var that = this;
		fetch('../../src/data/data.json', {
			method: 'GET',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			}
		})
		.then(function(response) {
			if (response.status >= 400) {
				throw new Error("Bad response from server");
			}
			return response.json();
		})
		.then(function(data) {
			let allData = data.data;

			that.setState({ 
				data : allData

			})
			console.log(data)
		});
	}

	componentDidMount(){
		this.fetchData();
		this.loaded = true;

	}

	componentWillUnmount() {
	    // window.removeEventListener('scroll', this.handleScroll);
	}



	// _filterList(term){
 //        //get query result
 //        // var queryResult=[];
 //        // data.data.map(function(recipe){
 //        //     if(recipe.recipeName.toLowerCase().indexOf(term.toLowerCase())!=-1)
 //        //     queryResult.push(recipe);
 //        // });
 //        // this.setState({ data: queryResult })
 //        // console.log(this.state)
	// };

	// _filterByCategory(category){
	// 	// if (category !== 'all') {
	//  //        var queryResult=[];
	//  //        data.data.map(function(recipe){
	//  //            if(recipe.category.toLowerCase() === category.toLowerCase())
	//  //            queryResult.push(recipe);
	//  //        });
	//  //        this.setState({ data: queryResult })
	// 	// } else {
	// 	// 	this.setState({ data: data.data })
	// 	// }
	// };

	render(){
		if (this.loaded === true) {
			let companyData = this.state.data[0].companyData,
				allData = this.state.data;
				// categoryData = this.state.categories;
			return (
				<div>
					<Header companyData={companyData} />
					<Main allData={allData} />
					<Footer companyData={companyData} />
				</div>
			)
		} else {
			return (
				<div>Loading...</div>
			)
		}

	}
}

// take this component's generated  html and put it on the page (in the dom)

ReactDOM.render(<App />, document.querySelector('.container'));