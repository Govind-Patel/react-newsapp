import React from 'react'
import loader from './loader.gif';

const Spinner = ()=> {
  // export class Spinner extends Component {
  // render() {
    return (
      <div className='text-center'>
        <img src={loader} alt="loader" />
      </div>
    )
  // }
}

export default Spinner
