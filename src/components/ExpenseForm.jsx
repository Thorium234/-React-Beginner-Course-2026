import React from "react";
import "./ExpenseForm.css";

class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            item: {}
        };
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleAmountChange = this.handleAmountChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleCategoryChange = this.handleCategoryChange.bind(this);
        
    }
    handleNameChange(e){
        this.setState((state, props)=>{
            let item = state.item;
            item.name = e.target.value;
            return {item:item};
        });
    }

    handleAmountChange(e){
        this.setState((state, props)=>{
            let item = state.item;
            item.amount = e.target.value;
            return {item:item};
        });
    }

    handleDateChange(e){
        this.setState((state, props)=>{
            let item = state.item;
            item.date = e.target.value;
            return {item:item};
        });
    }

    handleCategoryChange(e){
        this.setState((state, props)=>{
            let item = state.item;
            item.category = e.target.value;
            return {item:item};
        });
    }

    onSubmit(e){
        e.preventDefault();
        alert(JSON.stringify(this.state.item));
    }

    render() {
        return (
            <div id="expenseForm">
                <form onSubmit={(e)=>this.onSubmit(e)}>
                    <label htmlFor="name">Title</label>
                    <input type="text" name="name" id="name" value={this.state.item.name || ''} onChange={this.handleNameChange} />

                    <label htmlFor="amount">Amount</label>
                    <input type="number" name="amount" id="amount" value={this.state.item.amount || ''} onChange={this.handleAmountChange} />

                    <label htmlFor="date">Date</label>
                    <input type="date" name="date" id="date" value={this.state.item.date || ''} onChange={this.handleDateChange} />

                    <label htmlFor="category">Category</label>
                        <select type="text" name="category" id="category" value={this.state.item.category || ''}
                        onChange={this.handleCategoryChange}/> 
                        <option value="">Select a category</option>
                        <option value="food">Food</option>
                        <option value="transportation">Transportation</option>
                        <option value="utilities">Utilities</option>
                        <option value="entertainment">Entertainment</option>
                        <option value="other">Other</option>
                        
                        < select/>

                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
    }