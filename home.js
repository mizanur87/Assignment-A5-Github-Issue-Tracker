console.log("hello home.js");

// Get all the containers by ID,Class

const dashContainer = document.querySelector("#dashContainer");
const loadingSpin = document.querySelector("#loadingSpin");
const filterBtn = document.querySelectorAll(".tg");
const srchBox = document.querySelector("#srchBox");
const srchBtn = document.querySelector("#srchBtn");
let issues = "";
let fdata = "";
let filtValue = "all";

// Search Function

srchBox.addEventListener("input", () => {
  const val = srchBox.value.trim();
  //   console.log(val);
  searchItem(val);
});

// Show Loading Function

filterBtn.forEach((btn) => {
  btn.addEventListener("click", function () {
    filterBtn.forEach((btn) => btn.classList.remove("active"));
    btn.classList.add("active");
    filtValue = btn.value;
    console.log(btn.value);
    filtrOut(filtValue);
  });
});

function filtrOut(value) {
  showloading();
  let openCards = issues.filter((el) => el.status === "open");

  let closedCards = issues.filter((el) => el.status === "closed");

  if (value === "all") {
    displayCards(issues);
    hideloading();
  } else if (value === "open") {
    displayCards(openCards);
    hideloading();
  } else {
    displayCards(closedCards);
    hideloading();
  }
}

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
  issues = data.data;
  fdata = data.data;
}

loadAll();

function displayCards(cards) {
  dashContainer.innerHTML = "";
  cards.forEach((element) => {
    // console.log(element);
    const card = document.createElement("div");
    card.className =
      "card bg-base-100 w-max-50 shadow-sm rounded-[4px] border-t-4";

    if (element.status === "open") {
      card.classList.add("border-green-400");
    } else {
      card.classList.add("border-purple-400");
    }

    card.innerHTML = `<div class="card-body  space-y-1.5">

   
              <!-- top buttons -->
              <div class="flex justify-between">
                <div class="flex justify-center items-center">
                  <img src = "${element.status === "open" ? "/assets/Open-Status.png" : "/assets/Closed- Status .png"}" />
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

function searchItem(item) {
  const query = item.toLowerCase();
  let searched = [];
  if (query.length > 0) {
    for (let eleme of fdata) {
      if (
        eleme.title.toLowerCase().includes(query) ||
        eleme.author.toLowerCase().includes(query) ||
        eleme.priority.toLowerCase().includes(query)
      ) {
        searched.push(eleme);
      }
    }
    displayCards(searched);
  } else {
    displayCards(fdata);
  }
}
