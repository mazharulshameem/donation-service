import React from "react";
import img from "../../../assets/img/rafell.jpg";

const RaffleDraw = () => {
  return (
    <div>
      <section>
        <div class="card m-3 w-75 mx-auto">
          <img src={img} class=" img-fluid h-4" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Get a Lottery Ticket</h5>
            <p class="card-text">
              By getting this lotteray, you cen be a millioner
            </p>
          </div>

          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title text-info" id="exampleModalLabel">
                    {" "}
                    Get Ticket ?
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <form>
                    <div class="mb-3">
                      <input
                        type="text"
                        placeholder="Full Name"
                        class="form-control"
                        id="inputName"
                        aria-describedby="emailHelp"
                      />
                    </div>
                    <div class="mb-3">
                      <input
                        type="email"
                        placeholder="Enter Email"
                        class="form-control"
                        id="inputEmail"
                        aria-describedby="emailHelp"
                      />
                      <div id="emailHelp" class="form-text"></div>
                    </div>
                    <div class="mb-3">
                      <input
                        type="address"
                        placeholder="Address"
                        class="form-control"
                        id="inputAdress"
                      />
                    </div>
                  </form>
                </div>
                <div class="modal-footer">
                  <button
                    id="raffle-submit"
                    type="submit"
                    class="btn btn-outline-info"
                    data-bs-target="#exampleModalToggle2"
                    data-bs-toggle="modal"
                  >
                    Submit
                  </button>
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div
            class="modal fade"
            id="exampleModalToggle2"
            aria-hidden="true"
            aria-labelledby="exampleModalToggleLabel2"
            tabindex="-1"
          >
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalToggleLabel2">
                    Note down Your Information
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <h5>
                    Full Name: <span id="buyer-name"></span>
                  </h5>
                  <h5>
                    {" "}
                    Your Mail: <span id="buyer-mail"></span>
                  </h5>
                  <h5>
                    Your Address: <span id="buyer-address"></span>
                  </h5>
                  <h5>
                    Ticket No: <span id="buyer-ticket-no"></span>
                  </h5>
                  <h5>
                    Ticket ID: <span id="buyer-ticket-id"></span>
                  </h5>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div
            class="modal fade"
            id="exampleModal2"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title text-info" id="exampleModalLabel">
                    raffle is drawn
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <form>
                    <div class="mb-1">
                      <h1>First winner:</h1>
                      <h4>
                        name: <span id="first-winner-name"></span>
                      </h4>
                      <h5>
                        Address: <span id="first-winner-address"></span>
                      </h5>
                      <h5>
                        Id: <span id="first-winner-id"></span>
                      </h5>
                    </div>
                    <div class="mb-1">
                      <h1>Second winner:</h1>
                      <h4>
                        name: <span id="second-winner-name"></span>
                      </h4>
                      <h5>
                        Address: <span id="second-winner-address"></span>
                      </h5>
                      <h5>
                        Id: <span id="second-winner-id"></span>
                      </h5>
                    </div>
                    <div class="mb-1">
                      <h1>Third winner:</h1>
                      <h4>
                        name: <span id="third-winner-name"></span>
                      </h4>
                      <h5>
                        Address: <span id="third-winner-address"></span>
                      </h5>
                      <h5>
                        Id: <span id="third-winner-id"></span>
                      </h5>
                    </div>
                  </form>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>

          <button
            id="buy-lottery"
            class="button"
            data-bs-toggle="modal"
            href="#exampleModal"
          >
            Buy One
          </button>
          <button
            id="draw-raffle"
            class="button mt-2"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal2"
          >
            Draw
          </button>
        </div>
      </section>
    </div>
  );
};

export default RaffleDraw;
