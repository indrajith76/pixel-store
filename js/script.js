let dataSet;
fetch("../data.json")
  .then((res) => res.json())
  .then((data) => {
    dataSet = data;
    displayData(data);
  });

const displayData = (data) => {
  const cardContainer = document.getElementById("homepage-content");
  data.forEach((element) => {
    const { id, img, price, name } = element;
    const divContainer = document.createElement("div");
    divContainer.classList.add(
      "card",
      "bg-base-100",
      "shadow-2xl",
      "border",
      "border-white",
    );
    divContainer.innerHTML = `
            <div class="p-4">
                <figure>
                  <img
                    class="rounded-lg w-full h-[300px]"
                    src="${img}"
                    alt="Shoes"
                  />
                </figure>
              </div>
              <div class="card-body px-4 pb-4 py-0">
                <div id="parent-name-icon-container" class="flex justify-between">
                  <h2 class="card-title">${name}</h2>
                  <div>
                    <span><i class="fa-solid fa-heart text-slate-500"></i></span>
                    <span><i class="fa-regular fa-square-minus text-red-500"></i></span>
                  </div>
                </div>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <h2 class="card-title">Price : ${price}</h2>
                <div class="card-actions justify-between">
                  <label onclick="handleModal('${id}')" for="my-modal-3" class="btn modal-button btn-outline btn-primary w-[45%]"><i class="fa-solid fa-circle-info mr-2"></i>Details</label>
                  <button class="btn btn-outline btn-secondary w-[45%]"><i class="fa-solid fa-bag-shopping mr-2"></i>Buy Now</button>
                </div>
            </div>
        `;
    cardContainer.appendChild(divContainer);
  });
};

function handleModal(id) {
  const product = dataSet.find((item) => item.id === id);
  const { name, price, img } = product;
  const modalContainer = document.getElementById("modal-info");
  modalContainer.innerHTML = `
        <div class="py-4 flex flex-col gap-3">
            <h1 class="text-2xl font-bold"><span class="text-violet-600">Product:</span> ${name}</h1>
            <div class="flex gap-4">
                <img src="${img}" class="w-full h-[200px]" alt="">
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi repellat quo exercitationem voluptatem labore, quibusdam expedita. Suscipit amet maiores vel culpa. Suscipit amet maiores vel culpa.</p>
                </div>
            </div>
            <h1 class="text-2xl font-bold text-violet-600">Feature :</h1>
            <p class="text-lg">Feature1, Feature2, Feature3</p>
            <h1 class="text-2xl font-bold"><span class="text-violet-600">Price:</span> $2000</h1>
        </div>
    `;
}
