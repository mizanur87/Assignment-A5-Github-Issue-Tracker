console.log("hello home.js");

// Get all the containers by ID,Class

const dashContainer = document.querySelector("#dashContainer");
const loadingSpin = document.querySelector("#loadingSpin");

// Show Loading Function

function showloading() {
  loadingSpin.classList.remove("hidden");
  dashContainer.innerHTML = "";
}
function hideloading() {
  loadingSpin.classList.add("hidden");
}

async function loadAll(params) {
  showloading();
  const res = await fetch(
    "https://phi-lab-server.vercel.app/api/v1/lab/issues",
  );
  const data = await res.json();
  hideloading();

  displayCards(data.data);
}

loadAll();

function displayCards(cards) {
  cards.forEach((element) => {
    console.log(element);
    const card = document.createElement("div");
    card.className = "card bg-base-100 w-max-50 shadow-sm rounded-[4px]";
    card.innerHTML = `<div class="card-body px-4 space-y-1.5">
              <!-- top buttons -->
              <div class="flex justify-between">
                <div class="flex justify-center items-center">
                  <img src="./assets/Open-Status.png" alt="" />
                </div>

                <button
                  class="bg-[#FEECEC] text-[12px] px-5 py-1 btn-error text-[#EF4444] rounded-full"
                >
                  ${element.priority}
                </button>
              </div>

              <h2 class="card-title text-[14px] text-[#1F2937] font-bold">
                ${element.title}
              </h2>
              <p class="text-[#64748B] text-[12px]">
                ${element.description}
              </p>
              <div class="card-actions justify-start">
                <button
                  class="bg-[#FEECEC] text-[12px] px-5 py-2 btn-error text-[#EF4444] rounded-full border-[#f8a6a6] border-[.5px]"
                >
                  <span
                    ><i class="fa-solid fa-bug" style="color: #ef4444"></i
                  ></span>
                  ${element.labels[0]}
                </button>
                <button
                  class="bg-[#FFF8DB] text-[12px] px-5 py-2 btn-error text-[#D97706] rounded-full border-[#FDE68A] border-[.5px]"
                >
                  <span
                    ><i
                      class="fa-regular fa-life-ring"
                      style="color: #d97706"
                    ></i
                  ></span>
                  ${element.labels[1]}
                </button>
              </div>
              <hr class="opacity-15 mt-2" />

              <p class="text-[#64748B]">${element.id} By ${element.author}</p>
              <p class="text-[#64748B]">${element.createdAt}</p>
            </div>`;
    dashContainer.appendChild(card);
  });
}
