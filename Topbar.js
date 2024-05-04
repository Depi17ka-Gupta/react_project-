import React from 'react'
export default function Topbar() {
  return (

    <div className="container whole-header">
      <div className="row justify-content-between pt-4 pb-2 top-bar">
        <div className="col-xxl-3 col-sm-12">
          <a class="navbar-brand" href="javascript">
            <img class="imagess" src="./images/logo.png" alt="img" />
          </a>
        </div>
        <div className="col-xxl-5 col-sm-12 d-flex justify-content-center flex-column align-items-center search_bar_section">

          <div className="input-group w-100">
            <input type="text" className="form-control" placeholder="Search..."
              aria-label="Recipient's username" aria-describedby="button-addon2" />
            <a href="javascript"><i className="fa fa-search" aria-hidden="true"></i></a>
          </div>

          <div className="row w-100 pt-3">
            <div className="col-6 create text-center">
              CREATE NOW
            </div>
            <div className="col-6 shop text-center">
              SHOP NOW
            </div>
          </div>
        </div>
        <div className="col-xxl-4 col-sm-12 btns">
          <div className='text-end'>
            <a href="" className='bell mx-3'><i class="fa-solid fa-bell"></i></a>
            <a href="" className='btn px-3 mx-3'>login</a>
            <a href="" className='btn1 text-white px-3 ms-3'>Signup</a>
          </div>
          <div className='text-end pt-3 icons'>
            <a href="" className='bag mx-3'><i class="fa-solid fa-bag-shopping"></i></a>
            <a href="" className='globe mx-3'><i class="fa-solid fa-globe"></i></a>
            <a href="" className='reverse mx-3'><i class="fa-solid fa-poo-storm"></i></a>
          </div>
        </div>
      </div>
      <div className='list'>
        <ul className=' d-flex justify-content-center'>
          <li className='p-3'><a href="" className='fabr'>Fabric</a></li>
          <li className='p-3'><a href="" className='clo'>Clothing</a></li>
          <li className='p-3'><a href="" className='hom'>Home & Living</a></li>
          <li className='p-3'><a href="" className='acc'>Accessories</a></li>
          <li className='p-3'><a href="" className='emb'>Embroidry</a></li>
          <li className='p-3'><a href="" className='gif'>Gifts</a></li>
          <li className='p-3'><a href="" className='des'>Design</a></li>
          <li className='p-3'><a href="" className='buis'>Buisness & benefits</a></li>

        </ul>
      </div>
    </div>


  )
}
