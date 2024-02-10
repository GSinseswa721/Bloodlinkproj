import React from 'react'

function Request() {
  return (
    <div>
        <div class="container request-container">
  <div class="row justify-content-center">
    <div class="col-md-6">
      <div class="card">
        <div class="card-header">Submit Request</div>
        <div class="card-body">
          <form>
            <div class="form-group">
              <label for="name">Name</label>
              <input type="text" class="form-control" id="name" name="name" required/>
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" class="form-control" id="email" name="email" required/>
            </div>
            <div class="form-group">
              <label for="request-type">Request Type</label>
              <select class="form-control" id="request-type" name="request-type" required>
                <option value="">Select Request Type</option>
                <option value="support">Donate</option>
                <option value="feedback">Make appointment</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div class="form-group">
              <label for="message">Message</label>
              <textarea class="form-control" id="message" name="message" rows="4" required></textarea>
            </div>
            <button type="submit" class="btn btn-danger btn-block">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>


    </div>
  )
}

export default Request