import React from 'react'

function BrowsedMobile() {
  return (
    <>
      <div className="d-flex flex-row justify-content-center">
          <h4 className="mt-5">Browsed Used Mobiles</h4>
        </div>
        {/* on large screen  */}
         <div className="mt-3 d-flex flex-row justify-content-evenly d-sm-flex d-none">
          <div class="row row-cols-1 row-cols-md-4 g-4">
            <div class="col">
              <div class="card">
                <div class="card-body d-flex flex-row justify-content-center align-item-center">
                  <h5 class="card-title mt-2 mb-2">Apple</h5>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <div class="card-body d-flex flex-row justify-content-center align-item-center">
                  <h5 class="card-title mt-2 mb-2">Realme</h5>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <div class="card-body d-flex flex-row justify-content-center align-item-center">
                  <h5 class="card-title mt-2 mb-2">Xiaomi</h5>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <div class="card-body d-flex flex-row justify-content-center align-item-center">
                  <h5 class="card-title mt-2 mb-2">Huawei</h5>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <div class="card-body d-flex flex-row justify-content-center align-item-center">
                  <h5 class="card-title mt-2 mb-2">Samsung</h5>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <div class="card-body d-flex flex-row justify-content-center align-item-center">
                  <h5 class="card-title mt-2 mb-2">Infinix</h5>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <div class="card-body d-flex flex-row justify-content-center align-item-center">
                  <h5 class="card-title mt-2 mb-2">Oppo</h5>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <div class="card-body d-flex flex-row justify-content-center align-item-center">
                  <h5 class="card-title mt-2 mb-2">Vivo</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* on small screen  */}
        <div className="mt-3 mx-2 d-flex flex-row justify-content-evenly d-sm-none">
          <div class="row row-cols-4 row-cols-md-4 g-3">
            <div class="col">
              <div class="card">
                <div class="card-body d-flex flex-row justify-content-center align-item-center">
                  <h5 class="card-title mt-2 mb-2">Apple</h5>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <div class="card-body d-flex flex-row justify-content-center align-item-center">
                  <h5 class="card-title mt-2 mb-2">Realme</h5>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <div class="card-body d-flex flex-row justify-content-center align-item-center">
                  <h5 class="card-title mt-2 mb-2">Xiaomi</h5>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <div class="card-body d-flex flex-row justify-content-center align-item-center">
                  <h5 class="card-title mt-2 mb-2">Huawei</h5>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <div class="card-body d-flex flex-row justify-content-center align-item-center">
                  <h5 class="card-title mt-2 mb-2 mx-1">Samsung</h5>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <div class="card-body d-flex flex-row justify-content-center align-item-center">
                  <h5 class="card-title mt-2 mb-2">Infinix</h5>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <div class="card-body d-flex flex-row justify-content-center align-item-center">
                  <h5 class="card-title mt-2 mb-2">Oppo</h5>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <div class="card-body d-flex flex-row justify-content-center align-item-center">
                  <h5 class="card-title mt-2 mb-2">Vivo</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default BrowsedMobile
