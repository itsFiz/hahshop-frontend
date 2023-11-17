import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'

const AddCardDetails = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const user = JSON.parse(sessionStorage.getItem('active-customer'))
  const priceToPay = location.state.priceToPay

  const customer_jwtToken = sessionStorage.getItem('customer-jwtToken')

  const [card, setCard] = useState({
    cardName: '',
    cardNumber: '',
    validThrough: '',
    cvv: '',
  })

  const handleCardInput = (e) => {
    setCard({ ...card, [e.target.name]: e.target.value })
  }

  const payForOrder = (e) => {
    e.preventDefault()
    fetch('http://localhost:8080/api/order/add?userId=' + user.id, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + customer_jwtToken,
      },
    })
      .then((result) => {
        result.json().then((res) => {
          if (res.success) {
            toast.success(res.responseMessage, {
              position: 'top-center',
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            })

            setTimeout(() => {
              navigate('/home')
            }, 2000) // Redirect after 3 seconds
          } else if (!res.success) {
            toast.error(res.responseMessage, {
              position: 'top-center',
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            })
            setTimeout(() => {
              window.location.reload(true)
            }, 2000) // Redirect after 3 seconds
          } else {
            toast.error('It Seems Server is down!!!', {
              position: 'top-center',
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            })
            setTimeout(() => {
              window.location.reload(true)
            }, 2000) // Redirect after 3 seconds
          }
        })
      })
      .catch((error) => {
        console.error(error)
        toast.error('It seems server is down', {
          position: 'top-center',
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
        setTimeout(() => {
          window.location.reload(true)
        }, 1000) // Redirect after 3 seconds
      })
  }

  return (
    <div className="pg-background">
      <div className="pg-blur">
        <div class="mt-2 d-flex aligns-items-center justify-content-center">
          <div
            class="card form-card border-color glass"
            style={{ width: '25rem', marginTop: '80px' }}
          >
            <div className="card-header bg-color custom-bg-text">
              <h5 class="card-title text-center">Payment Details</h5>
            </div>
            <div class="card-body text-color custom-bg">
              <form onSubmit={payForOrder}>
                <div class="mb-3">
                  <label for="name" class="form-label">
                    <b> Name on Card</b>
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                    name="cardName"
                    onChange={handleCardInput}
                    value={card.cardName}
                    required
                  />
                </div>
                <div class="mb-3">
                  <label for="cardNumber" class="form-label">
                    <b> Card Number</b>
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="cardNumber"
                    name="cardNumber"
                    onChange={handleCardInput}
                    value={card.cardNumber}
                    required
                  />
                </div>

                <div class="mb-3">
                  <label for="validThrough" class="form-label">
                    <b>Valid Through</b>
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="validThrough"
                    name="validThrough"
                    onChange={handleCardInput}
                    value={card.validThrough}
                    required
                  />
                </div>

                <div class="mb-3">
                  <label for="cvv" class="form-label">
                    <b>CVV</b>
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="cvv"
                    name="cvv"
                    onChange={handleCardInput}
                    value={card.cvv}
                    required
                  />
                </div>

                <input
                  type="submit"
                  class="btn custom-bg-text bg-color"
                  value={'Pay RM ' + priceToPay}
                />

                <ToastContainer />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddCardDetails
