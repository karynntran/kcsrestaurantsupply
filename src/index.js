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
			currentView: '',
			categoryData: '',
			sortedData: '',
			mainViewLoaded: false
		};
		this.loaded = false;
		this._setMainView = this._setMainView.bind(this);
		this._groupCategories = this._groupCategories.bind(this);
		this._sortGroups = this._sortGroups.bind(this);


		// this._filterByCategory = this._filterByCategory.bind(this);

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

			const array = that._groupCategories(allData[1].productData, 'categoryName'),
				catData = [],
				sortedArray = that._sortGroups(array);

				// console.log(array,sortedArray)

			that.setState({ 
				data : allData,
				currentView: [],
				subCurrentView: [],
				categoryData: sortedArray,
				sortedData: array
			})
			
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

	_setMainView(option){
		this.setState({
			currentView: this.state.sortedData[option],
			mainViewLoaded: true
		})
	};

	_groupCategories(arr1, arr2){
		return arr1.reduce(function(obj, prop) {
			(obj[prop[arr2]] = obj[prop[arr2]] || []).push(
				prop
			);
			return obj;
		}, []);

		// var newArray = [];
		// for (var n in testarray) newArray.push(n);

		// return newArray;
	}

	_sortGroups(array1){
		var array = [];
		for (var n in array1) array.push(n);
		return array;
	}

	render(){
		if (this.loaded === true) {
			let companyData = this.state.data[0].companyData,
				allData = this.state.data,
				categoryData = this.state.categoryData;
				// categoryData = this.state.categories;
			return (
				<div>
					<Header companyData={companyData} />
					<Main allData={allData}
						currentView={this.state.currentView}
						setMainView={this._setMainView}
						mainViewLoaded = {this.state.mainViewLoaded}
						categoryData = {categoryData}
						groupCategories = {this._groupCategories}
						sortGroups = {this._sortGroups}/>
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