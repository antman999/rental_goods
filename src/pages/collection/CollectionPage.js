import React from 'react'
import Collections from '../../components/checkout-items/collections/Collections'
import './category.scss'
import {selectCollection} from '../../redux/shop/shop.selectors'
import {connect} from 'react-redux'
const CollectionPage = ({ collection }) => {
  const { title, items } = collection
  	console.log(collection);
  return (
    <div className='collection-page'>
      <h2 className='title'>{title}</h2>
      <div className='items'>
        {items.map(item => <Collections key={item.id} item={item} /> )}
      </div>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage)
