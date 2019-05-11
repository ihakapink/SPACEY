import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

import { getCategories } from '../api/categories'

class CategoryList extends React.Component {
  componentDidMount () {
    this.props.dispatch(getCategories())
  }

  render () {
    return (
      <div className='container is-fluid'>
        <h1 className='title is-1'>Categories:</h1>

        <div className='columns is-mobile is-vcentered'>

          {this.props.categories.map(category => {
            return <p key={category.id}><Link to={`/cardlist/${category.id}`}>{category.categoryName}</Link></p>
          })}
        </div>

        <form>
          <input style={{ textAlign: 'center', borderColor: 'lightblue' }}
            type="text" name="newCategory" placeholder ='New Category' /> <br /> <br />
          <input type="submit" value="Submit New Category" /> <br /> <br />
        </form>

      </div>

    )
  }
}

function mapStateToProps (state) {
  return {
    categories: state.categories
  }
}

export default connect(mapStateToProps)(CategoryList)
