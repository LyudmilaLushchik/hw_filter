import { Component } from 'react';
import projects from './Projects'; 
import ProjectList from "./ProjectList";
import Toolbar from "./Toolbar";

export default class Portfolio extends Component {
    constructor() {
        super()
        this.state = {
            selectedFilter: 'All',
            projects
        }

        this.handleFilter = this.handleFilter.bind(this)
    }

    handleFilter(filter) {
        this.setState({selectedFilter: filter})
    }

    render() {
        return (
            <div>                
                <Toolbar 
                    filters={["All", "Websites", "Flayers", "Business Cards"]}
                    selected={this.state.selectedFilter}
                    onSelectFilter={this.handleFilter}
                />
                <ProjectList items={this.state.selectedFilter == 'All' 
                ? this.state.projects 
                : this.state.projects.filter(p => p.category == this.state.selectedFilter)}/>
            </div>
        )
    }
}