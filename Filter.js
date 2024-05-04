import React from 'react'
export default function Filter() {
    return (
        <div className="container filter-section">
            <div className="row justify-content-between">
                
                    <div className="col-xxl-3 col-xl-3 col-sm-12 arrows p-0">
                        <div className="row">
                            <div className="col-12 list p-0">
                                <ul className='d-flex p-0'>
                                    <li className='px-2'><a href="" >Home<i class="fa-solid fa-chevron-right ps-3"></i></a></li>
                                    <li className='px-2'><a href="" >Fabric<i class="fa-solid fa-chevron-right ps-3"></i></a></li>
                                    <li className='px-2'><a href="" >Type<i class="fa-solid fa-chevron-right ps-3"></i></a></li>
                                    <li className='px-2'><a href="" >Cotton</a></li>
                                </ul>
                            </div>
                            <div className="col-12 filters p-4">
                                <div className='d-flex justify-content-between border-bottom pb-3'>
                                    <div className='fil ps-3'>
                                        Filter
                                    </div>
                                    <div className='pe-3'>
                                        <a href=""><i class="fa-solid fa-code"></i></a>
                                    </div>
                                </div>
                                <div className='filterss'>
                                    <div class="accordion" id="accordionExample">
                                        <div class="accordion-item">
                                            <h2 class="accordion-header">
                                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="False" aria-controls="collapseOne">
                                                    Fabric Type
                                                </button>
                                            </h2>
                                            <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                                <div class="accordion-body">
                                                    <ul className='p-4'>
                                                        <li><input type="checkbox" className='me-2' />Soft</li>
                                                        <li><input type="checkbox" className='me-2' />Sheer</li>
                                                        <li><input type="checkbox" className='me-2' />Matte</li>
                                                        <li><input type="checkbox" className='me-2' />Shiny</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item">
                                            <h2 class="accordion-header">
                                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                    Fabric property
                                                </button>
                                            </h2>
                                            <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                                <div class="accordion-body">
                                                    <ul className='p-4'>
                                                        <li><input type="checkbox" className='me-2' />Soft</li>
                                                        <li><input type="checkbox" className='me-2' />Sheer</li>
                                                        <li><input type="checkbox" className='me-2' />Matte</li>
                                                        <li><input type="checkbox" className='me-2' />Shiny</li>
                                                    </ul>                                                </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item">
                                            <h2 class="accordion-header">
                                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                    Fabric usage
                                                </button>
                                            </h2>
                                            <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                                <div class="accordion-body">
                                                    <ul className='p-4'>
                                                        <li><input type="checkbox" className='me-2' />Soft</li>
                                                        <li><input type="checkbox" className='me-2' />Sheer</li>
                                                        <li><input type="checkbox" className='me-2' />Matte</li>
                                                        <li><input type="checkbox" className='me-2' />Shiny</li>
                                                    </ul>                                                </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item">
                                            <h2 class="accordion-header">
                                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                    construction
                                                </button>
                                            </h2>
                                            <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                                <div class="accordion-body">
                                                    <ul className='p-4'>
                                                        <li><input type="checkbox" className='me-2' />Soft</li>
                                                        <li><input type="checkbox" className='me-2' />Sheer</li>
                                                        <li><input type="checkbox" className='me-2' />Matte</li>
                                                        <li><input type="checkbox" className='me-2' />Shiny</li>
                                                    </ul>                                                </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item">
                                            <h2 class="accordion-header">
                                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                                    Fabric handle
                                                </button>
                                            </h2>
                                            <div id="collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                                <div class="accordion-body">
                                                    <ul className='p-4'>
                                                        <li><input type="checkbox" className='me-2' />Soft</li>
                                                        <li><input type="checkbox" className='me-2' />Sheer</li>
                                                        <li><input type="checkbox" className='me-2' />Matte</li>
                                                        <li><input type="checkbox" className='me-2' />Shiny</li>
                                                    </ul>                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-8 col-sm-12 pt-5">
                        <div className="row">
                            <div className="col-xxl-4  col-xl-4 col-sm-12">
                                <div class="card">
                                    <img src="./images/logo.png" class="card-img-top" alt="..." />
                                    <div class="card-body d-flex justify-content-between">
                                        <div>
                                            Cotton Twill
                                        </div>
                                        <a href="#" class="btn btn-primary">RS 0.00/mtr</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-4  col-xl-4 col-sm-12">
                                <div class="card">
                                    <img src="./images/logo.png" class="card-img-top" alt="..." />
                                    <div class="card-body d-flex justify-content-between">
                                        <div>
                                            Cotton Twill
                                        </div>
                                        <a href="#" class="btn btn-primary">RS 0.00/mtr</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-4  col-xl-4 col-sm-12">
                                <div class="card">
                                    <img src="./images/logo.png" class="card-img-top" alt="..." />
                                    <div class="card-body d-flex justify-content-between">
                                        <div>
                                            Cotton Twill
                                        </div>
                                        <a href="#" class="btn btn-primary">RS 0.00/mtr</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
               
            </div>
        </div>
    )
}
