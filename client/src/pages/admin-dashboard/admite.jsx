import React from 'react'

function Admite() {
  return (
    <div>
        <div class="container login-container">
  <div class="row justify-content-center">
    <div class="col-md-6">
      <div class="card">
        <div class="card-header">Admin Login</div>
        <div class="card-body">
          <form>
            <div class="form-group">
              <label for="username">Username</label>
              <input type="text" class="form-control" id="username" name="username" required/>
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input type="password" class="form-control" id="password" name="password" required/>
            </div>
            <button type="submit" class="btn btn-danger btn-block">Admit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Admite