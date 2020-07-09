import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fetchRestaurants, updateFilters } from '../actions/restaurantActions';
import { connect } from 'react-redux';

class PaginationButtons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maxPage: 1
    }
    this.onFirstPage = this.onFirstPage.bind(this);
    this.onLastPage = this.onLastPage.bind(this);
    this.onPrevPage = this.onPrevPage.bind(this);
    this.onNextPage = this.onNextPage.bind(this);
  }

  componentDidMount() {
    const { total_entries, per_page } = this.props.posts;
    this.setState({maxPage: Math.ceil(total_entries/per_page)});
  }

  componentDidUpdate(prevProps) {
    const { total_entries : oldTotalEntries, per_page: oldPerPage} = prevProps.posts;
    const { total_entries, per_page } = this.props.posts;
    if(oldPerPage !== per_page || oldTotalEntries !== total_entries){
      this.setState({maxPage: Math.ceil(total_entries/per_page)});
    }
  }

  onFirstPage(e) {
    e.preventDefault();
    const { filters } = this.props;
    this.props.updateFilters({...filters, page:1});
    this.props.fetchRestaurants({...filters, page:1});
  }

  onPrevPage(e) {
    e.preventDefault();
    const { filters } = this.props;
    const { page } = filters;
    if(1 < page){
      const newPage = page-1;
      this.props.updateFilters({...filters, page:newPage});
      this.props.fetchRestaurants({...filters, page:newPage});
    }
  }

  onNextPage(e) {
    e.preventDefault();
    const { maxPage } = this.state;
    const { filters } = this.props;
    const { page } = filters;
    if(maxPage > page){
      const newPage = page+1;
      this.props.updateFilters({...filters, page:newPage});
      this.props.fetchRestaurants({...filters, page:newPage});
    }
  }

  onLastPage(e) {
    e.preventDefault();
    const { filters } = this.props;
    const { maxPage } = this.state;
    this.props.updateFilters({...filters, page:maxPage});
    this.props.fetchRestaurants({...filters, page:maxPage});
  }


  render() {
    const { page } = this.props.filters;
    const { maxPage } = this.state;
    return (
      <div className="PaginationButtons">
        <button className="FirstPageBtn" aria-label="First Page" onClick={this.onFirstPage} disabled={page === 1}>{"<<"}</button>
        <button className="PrevPageBtn" aria-label="Previous Page" onClick={this.onPrevPage} disabled={page === 1}>{"<"}</button>
        <div className="CurrentPage" aria-label="Current Page">{page}</div>
        <button className="NextPageBtn" aria-label="Next Page" onClick={this.onNextPage} disabled={page === maxPage}>{">"}</button>
        <button className="LastPageBtn" aria-label="Last Page" onClick={this.onLastPage} disabled={page === maxPage}>{">>"}</button>
      </div>
    )
  }
}

PaginationButtons.propTypes = {
  fetchRestaurants: PropTypes.func.isRequired,
  filters: PropTypes.object.isRequired,
  posts: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  posts: state.posts.items,
  filters: state.posts.filters,
});

export default connect(mapStateToProps, {fetchRestaurants, updateFilters})(PaginationButtons);
